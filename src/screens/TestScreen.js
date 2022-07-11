import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { Dimensions } from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import { AntDesign } from '@expo/vector-icons';
import DATA from './data/chalengesBu22';

const TestScreen = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [dynamicData, setDynamicData] = useState(DATA);
  const [heart, setHeart] = useState(DATA.map(el => { return el.isLiked ? true : false}));
  const { width, height } = Dimensions.get('window');
  const blockWidth = width - 42;
  const contentOffset = (width - blockWidth) / 2;
  console.log(heart);

  const renderItem = ({ item, itemIndex, currentIndex, animatedValue }) => (
    <Item text={item.text} isLiked={item.isLiked} animatedValue={animatedValue}/>
  );

  const Item = ({ text, isLiked, itemIndex, animatedValue }) => (
    <View style={styles.container}>
      <View style={{ ...styles.item, width: blockWidth }}>
        <Text style={styles.text}>{text} ci:{currentIndex} ii: {itemIndex} av:{animatedValue.Value}</Text>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => { setHeart(heart.map((el, index) => { return ((index === currentIndex) ? !el : el); })); console.log(animatedValue); }}>
            <AntDesign name={heart[itemIndex] ? "heart" : "hearto"} size={34} color="black" />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );

  // currentDay === YYYYMMDD
  // const currentData = DATA.filter(el=>el.date>currentDay)


  //starting from the current day challenge- set state
  useLayoutEffect(() => {
    setCurrentIndex(dynamicData.length - 1);

  }, [])



  return (
    <View>
      <Text>TestScreen width: {width} height:{height}</Text>
      <Text>{dynamicData[0].text}</Text>
      {/* <FlatList
        data={dynamicData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
      <SideSwipe
        index={currentIndex}
        itemWidth={blockWidth}
        style={width}
        data={dynamicData}
        contentOffset={contentOffset}
        onIndexChange={index => setCurrentIndex(index)}
        renderItem={renderItem}
        threshold={50}
      />
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 100,
    marginVertical: 8,
    paddingHorizontal: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  },
  text: {
    fontSize: 22,
  },
  footer: {

  }
});
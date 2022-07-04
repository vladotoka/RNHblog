import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useContext, useLayoutEffect, useEffect } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather style={{...styles.headerRight, ...styles.icon}} name="plus"/>
        </TouchableOpacity>
      ),
    });
  }, [navigation])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            < TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash-2" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }} />
    </View >
  )
}

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24,
    color: "black"
  },
  headerRight: {
    marginRight: 10
  },
});
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title='нов пост' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <Feather style={styles.icon} name="trash-2" />
          </View>
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
});
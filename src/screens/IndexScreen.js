import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title='нов пост' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => (<Text>{item.title}</Text>)} />
    </View >
  )
}

export default IndexScreen;

const styles = StyleSheet.create({});
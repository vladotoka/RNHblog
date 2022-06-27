import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title='нов пост' onPress={addBlogPost}/>
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => (<Text>{item.title}</Text>)} />
    </View >
  )
}

export default IndexScreen;

const styles = StyleSheet.create({});
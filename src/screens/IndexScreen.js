import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title='нов пост' onPress={blogPosts.addBlogPost}/>
      <FlatList
        data={blogPosts.data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => (<Text>{item.title}</Text>)} />
    </View >
  )
}

export default IndexScreen;

const styles = StyleSheet.create({});
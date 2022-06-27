import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>IndexScreen</Text>
      <Text>{value}</Text>
    </View>
  )
}

export default IndexScreen;

const styles = StyleSheet.create({});
import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import { Context } from '../context/BlogContext';

const ShowScreen = ({route}) => {
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
};

export default ShowScreen;

const styles = StyleSheet.create({});
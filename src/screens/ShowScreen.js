import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import { Context } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    )
};

export default ShowScreen;

const styles = StyleSheet.create({
    screen: {

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginVertical: 15,
        paddingHorizontal: 7,
    },
    content: {
        fontSize: 15,
        paddingHorizontal: 7,



    },
});
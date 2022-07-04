import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';

import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation, route }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                    <FontAwesome style={{ ...styles.headerRight, ...styles.icon }} name="pencil" />
                </TouchableOpacity>
            ),
        })
    }, [navigation])

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
    icon: {
        fontSize: 24,
        color: "black"
    },
    headerRight: {
        marginRight: 10
    },
});
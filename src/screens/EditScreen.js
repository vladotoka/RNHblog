import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';
import { Context } from '../context/BlogContext';

const EditScreen = ({ route }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((post) => post.id === route.params.id);

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text>Edit Title</Text>
            <TextInput value={title} onChangeText={setTitle} />
            <Text>Edit Content</Text>
            <TextInput value={content} onChangeText={setContent} />
        </View>
    )
};

export default EditScreen;

const styles = StyleSheet.create({});
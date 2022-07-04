import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState, useContext } from 'react';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation, route }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle} />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={setContent} />
            <Button
                title='Add Blog Post'
                onPress={() => {
                    addBlogPost(title, content, () => navigation.goBack());
                }} />
        </View>
    );
};

export default CreateScreen;

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },

});
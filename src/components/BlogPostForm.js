import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

const BlogPostForm = ({ onSubmit, initialValues = { title: '', content: '' }
    , edit }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>{edit ? 'Change Title' : 'Enter Title'}</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle} />
            <Text style={styles.label}>{edit ? 'Change Content' : 'Enter Content'}</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={setContent} />
            <Button
                title={edit ? 'Save Blog Post' : 'Add Blog Post'}
                onPress={() => { onSubmit(title, content) }} />
        </View>

    )
};

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

export default BlogPostForm;

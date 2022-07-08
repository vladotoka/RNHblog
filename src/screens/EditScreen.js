import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((post) => post.id === route.params.id);

    return <BlogPostForm
        edit
        initialValues={{ title: blogPost.title, content: blogPost.title }}
        onSubmit={(title, content) => console.log(title, content)}
    />
};

const styles = StyleSheet.create({});

export default EditScreen;
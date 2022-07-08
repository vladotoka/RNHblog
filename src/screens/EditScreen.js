import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route, navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = route.params.id;

    const blogPost = state.find((post) => post.id === id);

    return <BlogPostForm
        edit
        initialValues={{ title: blogPost.title, content: blogPost.title }}
        onSubmit={(title, content) => editBlogPost(id, title, content, () => navigation.goBack())}
    />
};

const styles = StyleSheet.create({});

export default EditScreen;
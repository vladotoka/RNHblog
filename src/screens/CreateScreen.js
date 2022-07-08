import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation, route }) => {
    const { addBlogPost } = useContext(Context);

    return <BlogPostForm
        onSubmit={(title, content) => {
            addBlogPost(title, content, () => navigation.navigate('Index'));
        }}
    />
};

export default CreateScreen;

const styles = StyleSheet.create({

});
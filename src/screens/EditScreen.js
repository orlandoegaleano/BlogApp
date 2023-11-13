import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = (props) => {

    const blogID = props.navigation.getParam("id");
    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find((currentPost) => {
        return currentPost.id === blogID;
    });

    return <BlogPostForm         
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {editBlogPost(blogID, title, content, () => {props.navigation.pop()})}}
    />;
};

const styles = StyleSheet.create({

});

export default EditScreen;
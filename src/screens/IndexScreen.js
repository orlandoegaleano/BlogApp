import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';



const IndexScreen = () => {

    const {data, addBlogPost} = useContext(BlogContext);

    return(
        <View>
            <Text>Hello from IndexScreen</Text>
            <Button title='Add Post' onPress={() => {addBlogPost()}}/>
            <FlatList
                data={data}
                keyExtractor={(blogPost) => {return blogPost.title}}
                renderItem={({item}) => {return <Text>{item.title}</Text>}}
            />
        </View>
    );
};

export default IndexScreen;
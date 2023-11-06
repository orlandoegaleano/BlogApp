import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import { Context } from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';




const IndexScreen = () => {

    const {state, addBlogPost} = useContext(Context);

    return(
        <View>
            <Text>Hello from IndexScreen</Text>
            <Button title='Add Post' onPress={() => {addBlogPost()}}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => {return blogPost.title}}
                renderItem={({item}) => {
                    return <View style={styles.row}><Text style={styles.title}>{item.title}</Text><Feather name='trash' style={styles.icon}/></View>}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
});

export default IndexScreen;
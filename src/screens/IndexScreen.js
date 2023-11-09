import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';




const IndexScreen = (props) => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context); 

    return(
        <View>
            <Text>Hello from IndexScreen</Text>            
            <FlatList
                data={state}
                keyExtractor={(blogPost) => {return blogPost.title}}
                renderItem={({item}) => {
                    return <TouchableOpacity onPress={ () => {props.navigation.navigate('Show', {id: item.id})}}>

                        <View style={styles.row}>
                            <Text style={styles.title}> {item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                <Feather name='trash' style={styles.icon}/>
                            </TouchableOpacity>    
                        </View>

                    </TouchableOpacity>
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => {props.navigation.navigate("Create")}}>        
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        ),
    };
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
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Pereira',
            email: 'rafaelprrflh@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stunning!'
            }
            , {
                nickname: 'Ana Julia Arruda' ,
                comment: 'Foto linda! Onde foi tirada?'
            }]
        } , {
            id: Math.random(),
            nickname: 'Francisco Leandro Lima',
            email: 'fllima@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`} //template string
                    renderItem={({ item }) => //desestruturação para tirar o item
                        <Post key={item.id} {...item} />} //operadado sprad para passar os atributos de mesmo nome (component e atributos)
                />
            </View>
        )
    }
}

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})

export default Feed;
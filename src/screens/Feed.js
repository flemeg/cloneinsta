import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'


class Feed extends Component {

    state = {
        posts: [{
            id: Math.random(),
            nickname: 'AAAAAAAAAAAAA',
            email: 'ddddddd@gdddddd.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'BBBBBBBBBBBB',
                comment: 'CCCCCCCCC dd'
            }]

        }]
    }

    render() {

        const DATA = [
            {
                id: Math.random(),
                nickname: 'AAAAAAAAAAAAA',
                email: 'ddddddd@gdddddd.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [{
                    nickname: 'BBBBBBBBBBBB',
                    comment: 'CCCCCCCCC dd'
                }]
            },
        ]

        const renderItem = ({ item }) => <Post key={item.id} {...item} />

        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <Text>Meu Teste</Text>
                <FlatList
                    data={DATA}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem} />
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed
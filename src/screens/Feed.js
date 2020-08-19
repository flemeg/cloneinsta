import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'


class Feed extends Component {

    state = {
        posts: []
    }

    render() {

        const DATA = [
            {
                id: Math.random(),
                name: 'Flemeg Balla',
                nickname: 'Balla',
                email: 'flemeg@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [{
                    nickname: 'Xuxinha',
                    comment: 'Ismal bebao'
                }]
            },
            {
                id: Math.random(),
                name: 'Daniel',
                nickname: 'Xuxinha',
                email: 'daniel.cdesouza@gmail.com',
                image: require('../../assets/imgs/car2.jpg'),
                comments: [{
                    nickname: 'Flemeg',
                    comment: 'Me xama pra da uma volta'
                }]
            },
        ]

        const renderItem = ({ item }) => <Post key={item.id} {...item} />

        return (
            <SafeAreaView style={styles.container}>
                <Header />
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
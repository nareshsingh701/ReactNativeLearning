import { StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react'


class ViewAnkush extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 30 }}>my name is most</Text>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/3.jpg' }} style={{ width: 200, height: 200, }} />
                <Text style={{ color: 'blue', fontSize: 30 }}>i am the best </Text>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={{ width: 200, height: 200, }} />
                <Text style={{ color: 'pink', fontSize: 30 }}>how to the </Text>
            </View>


        )
    }
}
export default ViewAnkush;
const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',





    }
})
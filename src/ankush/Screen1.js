import { View, Text, StyleSheet, Button, Icon } from 'react-native'
import React, { Component } from 'react'




class Screen1 extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintocolor }) => (
            Icon = "icons8-home-gradient.zip"
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <Text>I am Screen1</Text>
                <Icon name="icons8-home-gradient.zip" />

            </View>
        )
    }
}

export default Screen1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
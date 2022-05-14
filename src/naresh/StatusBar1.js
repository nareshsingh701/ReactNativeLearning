import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React, { Component } from 'react'


class StatusBar1 extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="dark-content"
                />


            </SafeAreaView>
        )
    }
}

export default StatusBar1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 
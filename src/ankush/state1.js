import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function state1() {
    state = {
        number: 70,
        name: 'react native'
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{ fontSize: 35 }}
            >{this.state.number}</Text>
            <Text
                style={{ fontSize: 35 }}
            >{this.state.name}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
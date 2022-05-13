import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function state16() {
    state = {
        number: 70,
        name: 'React native'
    }
    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 32 }}
            >{this.state.number}</Text>
            <Text
                style={{ fontSize: 32 }}
            >{this.state.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
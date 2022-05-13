import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

class TextInput1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ fontSize: 35, width: 300, borderWidth: 1.45, borderColor: '#e5e5e5', }}
                    placeholder="Email"
                    placeholderTextColor="red"

                />
            </View>
        )
    }
}
export default TextInput1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
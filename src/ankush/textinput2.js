import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { Component } from 'react/cjs/react.production.min'

class TextInput1 extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput

                    style={{ fontSize: 35, width: 300, borderWidth: 3, borderColor: '#e5e5e5' }}
                    placeholder='Email'
                    placeholderTextColor='red'
                />

            </SafeAreaView>
        )
    }
}
export default TextInput1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
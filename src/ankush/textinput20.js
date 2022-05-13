import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { Component } from 'react/cjs/react.production.min'

class TextInput1 extends Component {
    state = {
        mytext: 'hello',
        seteditable: true
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text
                    style={{ fontSize: 35 }}
                >{this.state.mytext}</Text>
                <TextInput
                    style={{ fontSize: 35, width: 300, borderWidth: 3, borderColor: '#e5e5e5' }}
                    placeholderTextColor='red'
                    onChangeText={(mytext) => this.setState({ mytext })}
                    value={this.state.seteditable}
                    autoCapitalize='words'
                    autoCorrect={false}
                    returnKeyType='search'


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
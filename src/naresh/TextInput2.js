import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

class TextInput2 extends Component {
    state = {
        mytext: 'hello world',
        steeditable: true
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{ fontSize: 45 }}
                >{this.state.mytext}</Text>

                <TextInput
                    style={{ fontSize: 35, width: 300, borderWidth: 1.45, borderColor: '#e5e5e5', }}
                    placeholder="Email"
                    placeholderTextColor="red"
                    onChangeText={(mytext) => this.setState({ mytext })}
                    value={this.state.mytext}
                    editable={this.state.steeditable}
                    autoCapitalize="words"
                    autoCorrect={true}
                    returnKeyType="google"

                />
            </View>
        )
    }
}
export default TextInput2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
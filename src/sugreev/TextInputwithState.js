import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'
//string =>  " "
//function => ()=>
//boolean => {}
class TextInputwithState extends Component {
    state = {
        mytext: 'hello world'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{ fontSize: 45 }}>{this.state.mytext}</Text>
                <TextInput
                    style={{ fontSize: 35, width: 300, borderWidth: 1.5, borderColor: '#ee5e55' }}
                    placeholder="Email"
                    placeholderTextColor="red"
                    onChangeText={(mytext) => this.setState({ mytext })}
                    value={this.state.mytext} />
            </View>
        );
    }
}

export default TextInputwithState;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
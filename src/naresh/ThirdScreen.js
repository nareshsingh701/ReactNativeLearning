import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'


class ThirdScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>ThirdScreen</Text>
            </View>
        );
    }
}
export default ThirdScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'


class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SecondScreen</Text>
            </View>
        );
    }
}
export default SecondScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'


class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FirstScreen</Text>
            </View>
        );
    }
}
export default FirstScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

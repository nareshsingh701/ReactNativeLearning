import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'


class Basicpart1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Basicpart1</Text>
            </View>
        )
    }
}
export default Basicpart1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export default class Ankush extends Component {

    state = {
        number: 0
    }

    add = () => {
        const number = this.state.number;
        this.setState({ number: number + 2 })
    }

    sum = () => {
        const number = this.state.number;
        this.setState({ number: number - 2 })
    }

    render() {
        return (
            <View style={styles.container} >
                <Text
                    style={{ fontSize: 35, color: 'red' }}>
                    {this.state.number}
                </Text>
                <Button
                    onPress={() => this.add()}
                    title='Add 2'
                />
                <Button
                    onPress={() => this.sum()}
                    title='sum 2'
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
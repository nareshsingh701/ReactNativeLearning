import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

class Lecture17 extends Component {
    state = {
        number: 0
    }
    add = () => {
        //const number = this.state.number;
        const { number } = this.state;
        this.setState({ number: number + 2 })
    }
    render() {
        return (
            <SafeAreaView style={styles.container} >
                <Text
                    style={{ fontSize: 42 }}>
                    {this.state.number}
                </Text>
                <Button
                    onPress={() => this.add()}
                    title='Add 2'
                />
            </SafeAreaView>
        )
    }
}

export default Lecture17;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
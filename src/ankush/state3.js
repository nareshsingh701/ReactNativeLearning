import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export default class Ankush extends Component {

    state = {
        number: 0,
        secondnumber: 2,
        name: 'fail'
    }

    add = () => {
        const { number, secondnumber } = this.state;
        this.setState({ number: number + secondnumber })
        if (number == 8) {
            this.setState({ name: 'pass' })
        } else {
            this.setState({ name: 'results over' })
        }
    }


    render() {
        return (
            <View style={styles.container} >
                <Text
                    style={{ fontSize: 35, color: 'red' }}>
                    {this.state.number}
                </Text>
                <Text
                    style={{ fontSize: 35, color: 'red' }}>
                    {this.state.name}
                </Text>
                <Button
                    onPress={() => this.add()}
                    title='Add 2'
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
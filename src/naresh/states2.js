import { StyleSheet, Text, View, Button } from 'react-native'
import React, { Component } from 'react'

class states2 extends Component {
    state = {
        number: 0,
        secondNumber: 2,
        name: 'fail'
    }
    add = () => {
        //const number = this.state.number;
        const { number, secondNumber, name } = this.state
        this.setState({ number: number + secondNumber })
        if (number == 8) {
            this.setState({ name: 'pass' })
        } else {
            this.setState({ name: 'Results over' })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{ fontSize: 42 }}>
                    {this.state.number}

                </Text>
                <Text
                    style={{ fontSize: 42 }}>
                    {this.state.name}

                </Text>
                <Button
                    onPress={() => this.add()}
                    title='Add 2'
                />

            </View>
        );
    }
}
export default states2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

import { StyleSheet, Text, View, Button } from 'react-native'
import React, { Component } from 'react'

class UseState extends Component {
    state = {
        number: 0
    }
    add = () => {
        //const number = this.state.number;
        const { number } = this.state
        this.setState({ number: number + 2 })
    }
    sub = () => {
        //const number = this.state.number;
        const { number } = this.state
        this.setState({ number: number - 2 })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{ fontSize: 42 }}>
                    {this.state.number}

                </Text>
                <Button
                    onPress={() => this.add()}
                    title='Add 2'
                />
                <Button
                    onPress={() => this.sub()}
                    title='sub 2'
                />
            </View>
        );
    }
}
export default UseState;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

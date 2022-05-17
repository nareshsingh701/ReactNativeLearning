import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { Component } from 'react'

class BasicLogic2 extends Component {
    state = {
        vOne: 2,
        vTwo: 4,
        clicks: 1,
        buttonDisablad: false
    }
    fOne = () => {
        const vOne = this.state.vOne;
        if (vOne == 2) {
            this.setState({ vOne: vOne + 2 })
        }
        this.decreaseClicks();
        this.disableButton();
    }
    fTwo = () => {
        const vTwo = this.state.vTwo;
        if (vTwo == 4) {
            this.setState({ vTwo: vTwo - 2 })
        }
        this.decreaseClicks();
        this.disableButton();
    }
    decreaseClicks = () => {
        const clicks = this.state.clicks;
        this.setState({ clicks: clicks - 1 })
    }
    checkWinner = () => {
        const { vOne, vTwo } = this.state;
        if (vOne + vTwo == 8) {
            alert('Winner')
        }
        else {
            alert('You Lost')
        }
    }
    disableButton = () => {
        const buttonDisablad = this.state.buttonDisablad;
        this.setState({ buttonDisablad: true })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 45, color: 'green' }}>{this.state.clicks}</Text>
                <Text style={{ fontSize: 24 }}>You have only one click left!</Text>
                <Text style={{ fontWeight: 'bold' }}>Make the total of values 8</Text>

                <TouchableOpacity style={styles.blue}
                    onPress={() => this.fOne()}
                    disabled={this.state.buttonDisablad} >
                    <Text style={{ fontSize: 45 }}>
                        {this.state.vOne}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.red}
                    onPress={() => this.fTwo()}
                    disabled={this.state.buttonDisablad}>
                    <Text style={{ fontSize: 45 }}>
                        {this.state.vTwo}
                    </Text>
                </TouchableOpacity>
                <Button title="Check"
                    onPress={() => this.checkWinner()} />

            </View>
        );
    }
}
export default BasicLogic2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    blue: {
        height: 120,
        width: 120,
        borderColor: 'red',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        marginTop: 24
    },
    red: {
        height: 120,
        width: 120,
        borderColor: 'blue',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',

    }
})

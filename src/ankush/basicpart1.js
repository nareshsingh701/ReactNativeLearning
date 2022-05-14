import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { Component } from 'react'

class Basicpart1 extends Component {
    state = {
        vOne: 2,
        vTwo: 4,
        clicks: 1
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 45, color: 'green' }}>{this.state.clicks}</Text>
                <Text style={{ fontSize: 24 }}>you have only one click left!</Text>
                <Text style={{ fontWeight: 'bold' }}>make the total of values 8</Text>

                <TouchableOpacity style={styles.blue}>
                    <Text style={{ fontSize: 45 }}>
                        {this.state.vOne}
                    </Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.red}>
                    <Text style={{ fontSize: 45 }}>
                        {this.state.vTwo}
                    </Text>
                </TouchableOpacity>
                <Button title='check'
                    onPress={() => alert('hello')}
                />
            </View>
        );
    }
}
export default Basicpart1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    red: {
        height: 120,
        width: 120,
        borderColor: 'red',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 24

    },
    blue: {
        height: 120,
        width: 120,
        borderColor: 'blue',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24


    }
});
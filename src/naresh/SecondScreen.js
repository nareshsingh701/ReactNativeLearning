import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { Component } from 'react'


class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                < Button
                    title='go to third screen'
                    onPress={() => this.props.navigation.navigate('ThirdScreen')} style={styles.buttonStyle}

                />
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
    },
    buttonStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginTop: 16
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
});

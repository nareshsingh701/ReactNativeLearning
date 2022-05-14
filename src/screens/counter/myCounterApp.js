import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MyCounterApp = () => {

    const [counter, setCounter] = useState(0);

    const onPressClickMe = () => {
        setCounter(counter + 1)
    }
    const onPressGhataDoClickMe = () => {
        setCounter(counter - 1)
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.counterText}>{counter}</Text>
            <TouchableOpacity onPress={onPressClickMe} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Badha Do Mujhe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressGhataDoClickMe} style={styles.buttonGhataDoStyle}>
                <Text style={styles.textStyle}>Ghata Do Mujhe</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyCounterApp;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    buttonStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginTop: 200,
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    counterText: {
        color: 'black',
        fontSize: 25,
        fontWeight: '600',
        marginTop: 100
    },
    buttonGhataDoStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        marginTop: 20,
    }
})
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

//https://material.io/design/color/the-color-system.html#tools-for-picking-colors

const Home = (props) => {

    const onPressButton = (screenName) => {
        props.navigation.navigate(screenName)
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => onPressButton('FirstScreen')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Naresh</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('ImageMaharajView')} style={styles.buttonMaharjStyle}>
                <Text style={styles.textStyle}>Maharaj</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('Scroll1')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Ankush</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('MyCounterApp')} style={[styles.buttonStyle, { backgroundColor: 'blue' }]}>
                <Text style={styles.textStyle}>Counter App Functional Component</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('ClassCounterScreen')} style={[styles.buttonStyle, { backgroundColor: '#B71C1C' }]}>
                <Text style={styles.textStyle}>Counter App Class Component</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('SecondScreen')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Auejfhk</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff'
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
    buttonMaharjStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        marginTop: 16
    },
})
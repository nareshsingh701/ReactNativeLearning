import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

//https://material.io/design/color/the-color-system.html#tools-for-picking-colors

const Home = (props) => {

    const onPressButton = (screenName) => {
        props.navigation.navigate(screenName)
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('ActivityIndicatorAnkush')} style={[styles.buttonStyle, { backgroundColor: 'red' }]}>
                <Text style={styles.textStyle}>ActivityIndicatorAnkush</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('LoginClassComponent')} style={[styles.buttonStyle, { backgroundColor: 'pink' }]}>
                <Text style={styles.textStyle}>Login Class Component Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('ActivityIndicatorNaresh')} style={[styles.buttonStyle, { backgroundColor: '#e5e' }]}>
                <Text style={styles.textStyle}> ActivityIndicatorNaresh</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('ActivityIndicator1')} style={[styles.buttonStyle, { backgroundColor: 'blue' }]}>
                <Text style={styles.textStyle}> ActivityIndicator1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={[styles.buttonStyle, { backgroundColor: 'pink' }]}>
                <Text style={styles.textStyle}>Login Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Naresh3')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Naresh3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Viewstyle')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Rajput</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Naresh2')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Naresh2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('LearningUI')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Learning UI</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('FirstScreen')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Naresh</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('MyCounterApp')} style={[styles.buttonStyle, { backgroundColor: 'blue' }]}>
                <Text style={styles.textStyle}>Counter App Functional Component</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressButton('ClassCounterScreen')} style={[styles.buttonStyle, { backgroundColor: '#B71C1C' }]}>
                <Text style={styles.textStyle}>Counter App Class Component</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Screen1')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Ankush2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Screens1')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Sugreev</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('BasicLogic1')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Sugreev1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('BasicLogic2')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Sugreev2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Viewraj')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Sugreev3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('ViewAnkush')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Ankush3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('ViewNaresh')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Naresh#</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Viewraj2')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Raj1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Viewraj3')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Raj2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Viewankush1')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>rajput2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Nareshlogin')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Nareshlogin</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('NareshloginSecond')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Nareshlogin1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('NETFLIX')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>NETFLIX</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
        paddingBottom: 50
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
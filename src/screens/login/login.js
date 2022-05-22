import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


const Login = (props) => {

    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [result, setResult] = useState('');
    let isButton = email.length <= 5 || password.length <= 5;

    const onChangeEmail = (value) => {
        changeEmail(value)
    }
    const onChangePassword = (value) => {
        changePassword(value)
    }

    const onPressSignIn = () => {
        const combineEmailAndPassword = email + "    " + password;
        props.navigation.navigate('LoginClassComponent')
        // setResult(combineEmailAndPassword)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Please Enter Email And Password</Text>
            <TextInput
                value={email}
                onChangeText={onChangeEmail}
                style={styles.emailStyle}
                placeholder={"Email"}
                placeholderTextColor={'gray'}
            />
            <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={onChangePassword}
                style={[styles.emailStyle, { marginTop: 25 }]}
                placeholder={"Password"}
                placeholderTextColor={'gray'}
            />
            <TouchableOpacity disabled={isButton} onPress={onPressSignIn} style={styles.loginButton}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.resultStyle}>{result}</Text>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loginText: {
        fontSize: 18,
        color: 'skyblue',
        fontWeight: '500',
        marginTop: 25,
        alignSelf: 'center'
    },
    emailStyle: {
        backgroundColor: 'rgb(108, 62, 140)',
        height: 44,
        marginTop: 120,
        marginHorizontal: 16,
        borderRadius: 6,
        paddingHorizontal: 16,
        color: 'white',
    },
    loginButton: {
        height: 44,
        backgroundColor: 'darkblue',
        marginHorizontal: 100,
        marginTop: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    resultStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 100
    }
})
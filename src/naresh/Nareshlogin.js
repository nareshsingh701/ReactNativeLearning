import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'

const Nareshlogin = (props) => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [result, setResult] = useState('');
    const [Confirmpasswoed, changeConfirm] = useState('');
    const [Username, changeUsername] = useState('');

    let isButton = email.length <= 5 || password.length <= 5 || Confirmpasswoed.length <= 5 || Username.length <= 5;

    const onChangeEmail = (value) => {
        changeEmail(value)
    }
    const onChangePassword = (value) => {
        changePassword(value)
    }
    const onChangeConfirm = (value) => {
        changeConfirm(value)
    }
    const onChangeUsername = (value) => {
        changeUsername(value)
    }
    const onPressSignIn = () => {
        const combineEmailAndPassword = email + "    " + password + "  " + Confirmpasswoed + "  " + Username;
        props.navigation.navigate('NareshloginSecond')

    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.loginText}>Sign up</Text>
                <Text style={styles.loginText2}>WHO YOU ARE ?</Text>
                <Text style={styles.Text1}>cool</Text>
                <Text style={styles.Text2}>STUDENT</Text>
                <Text style={styles.Text3}>HARRY POYTER</Text>
                <View style={styles.View1}>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle1} source={require('../assets/images/boy.png')} />
                    </TouchableOpacity>
                    <View style={styles.View2}>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle2} source={require('../assets/images/girl.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.View3}>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle3} source={require('../assets/images/boy.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput
                    value={Username}
                    onChangeText={onChangeUsername}
                    style={styles.emailStyle}
                    placeholder={"Username"}
                    placeholderTextColor={'gray'}
                />
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
                <TextInput
                    value={Confirmpasswoed}
                    secureTextEntry={false}
                    onChangeText={onChangeConfirm}
                    style={[styles.emailStyle, { marginTop: 25 }]}
                    placeholder={"Confirmpassword "}
                    placeholderTextColor={'gray'}
                />
                <TouchableOpacity disabled={isButton} onPress={onPressSignIn} style={styles.loginButton}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.resultStyle}>{result}</Text>
            </View>
        </ScrollView>
    );
}
export default Nareshlogin;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginText: {
        fontSize: 25,
        fontWeight: '500',
        marginTop: 25,
        alignSelf: 'center'
    },
    loginText2: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 20
    },
    emailStyle: {
        backgroundColor: '#e5ee',
        height: 44,
        marginTop: 30,
        marginHorizontal: 16,
        borderRadius: 6,
        paddingHorizontal: 16,
        color: 'white',
    },
    loginButton: {
        height: 44,
        backgroundColor: 'darkblue',
        marginHorizontal: 100,
        marginTop: 30,
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
        marginTop: 40
    },
    View1: {
        height: 80,
        width: 80,
        marginLeft: 20,
        backgroundColor: 'blue',
        //marginTop: 5,
        borderRadius: 50,
        flexDirection: 'row'
    },
    ImagesStyle1: {
        marginTop: 20,
        marginLeft: 20,
    },
    ImagesStyle2: {
        marginTop: 20,
        marginLeft: 20
    },
    ImagesStyle3: {
        marginTop: 20,
        marginLeft: 20
    },
    Text1: {
        color: 'yellow',
        marginLeft: 40,
        marginTop: 40
    },
    Text2: {
        color: 'green',
        marginLeft: 170
    },
    Text3: {
        marginLeft: 270
    },
    View2: {
        height: 80,
        width: 80,
        backgroundColor: 'blue',
        // marginTop: 5,
        borderRadius: 50,
        marginLeft: 70
    },
    View3: {
        height: 80,
        width: 80,
        marginLeft: 40,
        backgroundColor: 'blue',
        // marginTop: 5,
        borderRadius: 50,
    }
})
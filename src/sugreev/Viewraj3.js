import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'

const Viewraj3 = (props) => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [result, setResult] = useState('');
    let isButton = email.length <= 1 || password.length <= 1;
    const onChangeEmail = (value) => {
        changeEmail(value)
    }
    const onChangePassword = (value) => {
        changePassword(value)
    }

    const onPressSignIn = () => {
        const combineEmailAndPassword = email + "    " + password;
        props.navigation.navigate('Viewraj4')

    }
    return (
        <ImageBackground source={require('../assets/images/brand.jpg')} style={styles.container}>
            <View style={styles.View1}>
                <Text style={styles.Text1}>BEAUX</Text>
                <Text style={styles.Text2}>VOYAGES</Text>
            </View>
            <View style={styles.View2}>
                <View>
                    <TextInput
                        value={email}
                        onChangeText={onChangeEmail}
                        style={styles.emailStyle}
                        placeholder={"Email"}

                    />
                </View>
                <View>
                    <TextInput
                        value={password}
                        secureTextEntry={true}
                        onChangeText={onChangePassword}
                        style={[styles.emailStyle, { marginTop: 25 }]}
                        placeholder={"Password"}

                    />
                    <TouchableOpacity disabled={isButton} onPress={onPressSignIn} style={styles.loginButton}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                </View>

            </View>
            <View>
                <Text style={styles.Text4}>Need help ?</Text>
                <Text style={styles.resultStyle}>{props.result}</Text>
            </View>

        </ImageBackground>
    )
}
export default Viewraj3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View1: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 150

    },
    Text1: {
        fontSize: 40,
        color: '#fff',

    },

    Text2: {
        fontSize: 40,
        marginLeft: 16,
        color: '#fff',
    },
    View2: {
        width: '90%',
        height: 250,
        backgroundColor: '#fff',
        marginTop: 40,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
    },
    emailStyle: {
        // backgroundColor: 'pink',
        height: 44,
        marginHorizontal: 16,
        borderRadius: 6,
        paddingHorizontal: 16,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'grey'
    },


    Text3: {
        fontSize: 20,
        marginLeft: 75,
        marginTop: 5,
        color: '#fff',
        fontWeight: 'bold',

    },
    Text4: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 130,
        marginTop: 40
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginButton: {
        height: 44,
        backgroundColor: '#ff8a80',
        marginHorizontal: 100,
        marginTop: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',

    }
})

import { StyleSheet, Text, View, TouchableOpacity, TextInput, } from 'react-native'
import React from 'react'
import { Component } from 'react/cjs/react.production.min'


class Viewankush1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            result: "",
        }
    }
    onChangeEmail = (value) => {
        this.setState({ email: value })
    }
    onChangePassword = (value) => {
        this.setState({ password: value })
    }
    onPressSignIn = () => {
        const combineEmailAndPassword = this.state.email + "    " + this.state.password;
        this.props.navigation.navigate('ViewAnkush')
        this.setState({ result: combineEmailAndPassword })
    }



    render() {
        return (
            <View style={styles.container}>
                <View  >

                </View>
                <View style={styles.View2} >
                    <Text style={styles.loginText}>English (United Kingdom)</Text>
                </View >
                <View style={styles.container}>
                    <Text style={styles.Text2}>Instagram </Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={this.onChangeEmail}
                        style={styles.emailStyle}
                        placeholder={"Email"}
                        placeholderTextColor={'gray'}
                    />
                    <TextInput
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={this.onChangePassword}
                        style={[styles.emailStyle, { marginTop: 25 }]}
                        placeholder={"Password"}
                        placeholderTextColor={'gray'}
                    />
                    <TouchableOpacity disabled={this.state.email.length <= 1 || this.state.password.length <= 1} onPress={this.onPressSignIn} style={styles.loginButton}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.resultStyle}>{this.state.result}</Text>
                </View>





            </View>

        )
    }
}

export default Viewankush1;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },


    Textstyle1: {
        marginLeft: 50
    },
    loginText: {
        fontSize: 18,
        color: 'skyblue',
        fontWeight: '500',

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

    },

    View2: {
        alignSelf: 'center',
        justifyContent: 'center',

    },
    Text2: {
        fontSize: 40,
        marginTop: 50,
        marginLeft: 100
    }




})
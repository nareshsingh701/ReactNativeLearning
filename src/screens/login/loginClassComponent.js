import Axios from 'axios';
import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


// Site for learning axios    https://medium.com/geekculture/learn-to-use-axios-with-react-ee92829d8ed6

export class LoginClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            result: "",
        }
    }

    //https://jsonplaceholder.typicode.com/
    //API setup https://apidocs.imgur.com/?version=latest

    //Bitcoin API https://api.coindesk.com/v1/bpi/currentprice.json
    //Sample Image https://images.dog.ceo/breeds/pug/n02110958_14549.jpg
    // https://jsonplaceholder.typicode.com/users
    //https://jsonplaceholder.typicode.com/posts
    //https://dog.ceo/api/breeds/list/all

    componentDidMount() {
        console.log('componentDidMount');
        const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
        Axios.get(url).then((response) => {
            const myData = response.data;
            this.setState({ result: myData.msg })
            console.log('Axios response ', response);
        }, (error) => {
            console.log('Axios error ', error);
        })
    }

    onChangeEmail = (value) => {
        this.setState({ email: value })
    }
    onChangePassword = (value) => {
        this.setState({ password: value })
    }
    onPressSignIn = () => {
        const combineEmailAndPassword = this.state.email + "    " + this.state.password;
        this.setState({ result: combineEmailAndPassword })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loginText}>Please Enter Email And Password</Text>
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
                <TouchableOpacity disabled={this.state.email.length <= 5 || this.state.password.length <= 5} onPress={this.onPressSignIn} style={styles.loginButton}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.resultStyle}>{this.state.result}</Text>
            </View>
        )
    }
}

export default LoginClassComponent;


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
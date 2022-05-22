import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

class NETFLIX extends Component {
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
    onChangepassword = (value) => {
        this.setState({ password: value })
    }
    onpressSingIn = () => {
        const combineEmailAndPassword = this.state.email + "  " + this.state.password;
        this.props.navigation.navigate('Screen1')
        this.setState({ result: combineEmailAndPassword })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>NETFLIX</Text>
                <View style={styles.View1}>
                    <TextInput
                        value={this.state.email}
                        onChangeText={this.onChangeEmail}
                        style={[styles.Email]}
                        placeholderTextColor={'#fff'}
                        placeholder={" Email "}
                    />




                </View>
                <View style={styles.View2}>
                    <TextInput
                        value={this.state.password}
                        onChangeText={this.onChangepassword}
                        secureTextEntry={true}
                        style={[styles.TextInput1]}
                        placeholderTextColor={'#fff'}
                        placeholder={"Password"}
                    />
                </View>
                <View style={styles.View3}>
                    <TouchableOpacity disabled={this.state.email.length <= 1 || this.state.password.length <= 1} onPress={this.onpressSingIn} style={styles.View3Button} >
                        <Text style={styles.Text1}>Sign In</Text>
                    </TouchableOpacity>




                </View>
                <View >
                    <Text style={styles.Text2}>Need help? </Text>
                </View>
                <Text style={styles.Text3}>New to Netflix? sign up now.</Text>
                <View>
                    <Text style={styles.Text4}>Sign-in is protected by Google reCAPTCHA to ensure</Text>
                    <Text style={styles.Text5}>You`re not a bot. Learn more.</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.resultStyle}>{this.state.result}</Text>
                </View>
            </View>
        )
    }
}

export default NETFLIX

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    Text: {
        marginLeft: 50,
        marginTop: 20,
        fontSize: 30,
        color: 'red'
    },
    View1: {
        height: 70,
        width: 340,
        backgroundColor: 'gray',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 90,
        borderRadius: 6
    },
    Email: {
        marginLeft: 20,
        fontSize: 15
    },
    TextInput1: {
        marginLeft: 20,
        fontSize: 15
    },
    View2: {
        height: 70,
        width: 340,
        backgroundColor: 'gray',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 6
    },
    View3: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        height: 60,
        width: 340,
        borderRadius: 6,
        marginTop: 40,

    },
    Text1: {
        marginLeft: 140,
        fontSize: 20,
        color: '#fff'

    },
    Text2: {
        marginTop: 30,
        marginLeft: 160,
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'

    },
    Text3: {
        marginTop: 20,
        marginLeft: 70,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'

    },
    Text4: {
        marginTop: 40,
        marginLeft: 14,
        fontSize: 15,
        color: '#fff'
    },
    Text5: {

        marginLeft: 95,
        fontSize: 15,
        color: '#fff'
    },
    resultStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 70



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
    View4: {

    }





})

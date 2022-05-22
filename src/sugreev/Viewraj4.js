import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'


export class Viewraj4 extends Component {
    render() {


        return (
            <ImageBackground source={require('../assets/images/brand2.jpeg')} style={styles.container}>
                <View style={styles.View1}>
                    <Text style={styles.Text1}>BEAUX</Text>
                    <Text style={styles.Text2}>VOYAGES</Text>
                </View>
                <View style={styles.View2}>
                    <TextInput style={styles.email}
                        placeholder={"Email"} />

                    <View>
                        <TextInput style={styles.email}
                            placeholder={"Password"} />
                        <View style={styles.View3}>
                            <TouchableOpacity>
                                <Text style={styles.Text3}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={styles.Text4}>Need help ?</Text>
            </ImageBackground>
        )
    }
}
export default Viewraj4;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View1: {
        alignSelf: 'center',
        marginTop: 150,

    },
    Text1: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 40,
    },
    Text2: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 40,
        marginLeft: 15,
    },
    View2: {
        width: '90%',
        height: 240,
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 90,
        borderRadius: 8,
    },
    email: {
        height: 40,
        borderWidth: 1,
        borderColor: 'red',
        marginTop: 20,
        marginHorizontal: 16,
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    View3: {
        backgroundColor: 'blue',
        height: 50,
        width: '60%',
        marginTop: 40,
        alignSelf: 'center',
        borderRadius: 10,
    },
    Text3: {
        marginTop: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    Text4: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15,
        color: '#fff'
    }
})
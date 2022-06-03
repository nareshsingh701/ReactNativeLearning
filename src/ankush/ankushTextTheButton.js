import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { updateAnkushFields } from '../redux/action/ankushAction';
import { useDispatch, useSelector } from 'react-redux';




export default function () {
    const dispatch = useDispatch();


    return (

        <ScrollView >
            <View style={styles.container}>
                <View style={styles.View}>

                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/best.png.png')} />
                    <View style={styles.Viewone}>
                        <Image resizeMode={'cover'} style={styles.photoStyle} source={require('../assets/images/photo.png.png')} />
                        <View style={styles.Textone}>
                            <Text style={styles.Text}>Florence Ksty</Text>
                            <Text style={styles.Texttwo}>Team Leader</Text>
                        </View>
                        <View style={styles.Viewtwo}>
                            <Text style={styles.Textthree}>Pro</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.Viewthree}>
                            <View style={styles.Viewsix}>
                                <View>
                                    <Text style={styles.Textfour}>Upgrade your storage</Text>
                                    <View style={styles.photoline}>
                                        <Image resizeMode={'cover'} style={styles.line} source={require('../assets/images/bhai.png')} />
                                    </View>
                                </View>
                                <View style={styles.Viewfore}>
                                    <Text style={styles.Textfive}>Upgrade</Text>
                                </View>
                            </View>

                        </View>
                        <View style={styles.screen}>

                        </View>
                    </View>


                </View>
                <View style={styles.Viewseven} >
                    <Image resizeMode={'cover'} style={styles.photoline} source={require('../assets/images/man.png')} />
                    <View>
                        <Text style={styles.TextTop}>Profile & Account</Text>
                        <Text style={styles.viewImage}>Edit your Profile</Text>
                    </View>
                </View>

                <View style={styles.ViewEight}>
                    <Image resizeMode={'cover'} style={styles.photoline} source={require('../assets/images/one.png')} />
                    <View>
                        <Text style={styles.TextTop}>Push-Notifications</Text>
                        <Image resizeMode={'cover'} style={styles.photolineone} source={require('../assets/images/onoff.png')} />
                        <Text style={styles.viewImage}>Set up Push Notifications</Text>
                    </View>
                </View>

                <View style={styles.Viewten}>
                    <Image resizeMode={'cover'} style={styles.photoline} source={require('../assets/images/log.png')} />
                    <View>
                        <Text style={styles.TextTop}>FAQs</Text>
                        <Text style={styles.viewImage}>Frequently Asked Question</Text>
                    </View>
                </View>

                <View style={styles.Viewten}>
                    <Image resizeMode={'cover'} style={styles.photoline} source={require('../assets/images/power.png')} />
                    <View>
                        <Text style={styles.TextTop}>Logout</Text>
                        <Text style={styles.viewImageone}>Want to Logout</Text>
                    </View>
                    <Image resizeMode={'cover'} style={styles.photolinestyle} source={require('../assets/images/Ankushsingh.png')} />
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    
    },
    View: {
        backgroundColor: '#000',
        height: 400,
        width: '100%',
    },
    ImagesStyle: {
        height: 24,
        width: 24,
        marginTop: 15,
        marginLeft: 30
    },
    photoStyle: {
        height: 150,
        width: 150,
        marginLeft: 10,
        marginTop: 20,
    },
    Text: {
        fontSize: 20,
        color:'#fff',
        marginRight:10
    },
    Viewone: {
        flexDirection: 'row',
    },
    Textone: {
        marginTop: 50,
    

    },
    Texttwo: {
        color: '#ffd032',
        fontSize: 15,
    },
    Textthree: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 13,
        fontWeight: 'bold',
    },
    Viewtwo: {
        height: 50,
        width: 80,
        backgroundColor: '#ffd032',
        borderRadius: 10,
        marginTop: 40,
        marginLeft: 10
    },
    Viewthree: {
        height: 130,
        width: 350,
        backgroundColor: 'red',
        borderRadius: 25,
        marginLeft: 20,
    
    },
    Textfour: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20,
        marginTop: 30,
    },
    Viewfore: {
        height: 60,
        width: 120,
        backgroundColor: '#000',
        borderRadius: 10,
        marginLeft: 45,
        marginTop: 30
    },
    Textfive: {
        fontSize: 15,
        color: '#ffd032',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    line: {
        height: 10,
        width: 180,
        borderRadius: 15
    },
    Viewsix: {
        flexDirection: 'row',

    },
    Viewseven: {
        height: 130,
        width: 350,
        borderRadius: 25,
        marginHorizontal: 16,
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    ViewEight: {
        height: 130,
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginHorizontal: 16,
        marginTop: 20,
        flexDirection: 'row',
    },
    Viewnine: {
        height: 130,
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginHorizontal: 16,
        flexDirection: 'row'
    },
    Viewten: {
        height: 130,
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 5
    },
    photoline: {
        width: 50,
        height: 50,
        marginTop: 20,
        marginLeft: 15
    },
    photolinestyle: {
        width: 80,
        height: 80,
        marginTop: 20,
        marginLeft: 65
    },
    TextTop: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
        marginLeft: 20
    },
    viewImage: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold',
        marginLeft: 20
    },
    viewImageone: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10
    },
    photolineone: {
        width: 40,
        height: 22,
        marginLeft: 220
    },
    photolinetwo: {
        height: 54,
        width: 52,
        marginLeft: 225
    },
    screen: {
        backgroundColor: '#E3001A80',
        height: 20,
        width: 300,
        marginLeft: 45,
        borderRadius: 30
    }
})

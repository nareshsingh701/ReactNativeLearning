import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { updateAnkushFields } from '../redux/action/ankushAction';
import { useDispatch, useSelector } from 'react-redux';




export default function () {
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <View style={styles.View}>

                <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/best.png.png')} />
                <Image resizeMode={'cover'} style={styles.photoStyle} source={require('../assets/images/photo.png.png')} />
                <Text style={styles.Text}>Florence Ksty</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        backgroundColor: 'pink',

    },
    View: {
        backgroundColor: '#fff',
        height: 422.79,
        width: 375,
    },

    ImagesStyle: {
        height: 24,
        width: 24,
        marginTop: 45,
        marginLeft: 30 
    },
    photoStyle: {
        height: 59,
        width: 56,
         marginLeft: 30,
          marginTop: 116,
        flexDirection: 'row'
    },
    Text:{
       marginLeft:102,
     
    }


})


import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import { updateNareshFields } from '../redux/action/postAction'
const PostId = () => {
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/nareshsingh.png')} />
                <Image resizeMode={'cover'} style={styles.Image2} source={require('../assets/images/ramsingh.png')} />
            </View>

        </View>
    )
}

export default PostId

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View1: {
        height: 369.01,
        width: 375,
        backgroundColor: '#000119',
        flexDirection: 'row'
    },
    ImagesStyle: {
        marginLeft: 30,
        marginTop: 45,
        height: 24,
        width: 24,
    },
    Image2: {
        width: 43,
        height: 34,
        marginTop: 40,
        marginLeft: 250,
    }

})
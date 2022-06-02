
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import { useDispatch } from 'react-redux'
import { updateSugreevFields } from '../redux/action/userActionOne'
const FunctionRedux = () => {

    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <TouchableOpacity>
                    <Text style={styles.text1}>PRESS ME</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default FunctionRedux;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    text1: {
        fontSize: 20,
        textAlign: 'center',
        color: 'darkblue',
        marginTop: 7
    },
    view1: {
        height: 40,
        width: 150,
        backgroundColor: 'pink',
        marginTop: 20,
        marginLeft: 100,
        borderRadius: 10
    }
})
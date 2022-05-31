import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//Custom Imports
// import { increase, decrease } from './redux/reducers/counterReducers';
import { increase, decrease } from '../ankush/redux/actions/counterAction';

const Button1 = () => {

    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    const onPressClickMe = () => {
        dispatch(increase())
    }
    const onPressGhataDoClickMe = () => {
        dispatch(decrease())
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.counterText}>{value}</Text>
            <TouchableOpacity onPress={onPressClickMe} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>+ press me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressGhataDoClickMe} style={styles.buttonGhataDoStyle}>
                <Text style={styles.textStyle}> - press me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button1;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    buttonStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        marginTop: 200,
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    counterText: {
        color: 'black',
        fontSize: 25,
        fontWeight: '600',
        marginTop: 100
    },
    buttonGhataDoStyle: {
        height: 44,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginTop: 20,
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'



class ViewNaresh extends Component {
    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.container2}></View>
                <Text style={{ fontSize: 35, color: 'red' }}>hello</Text>
                <View style={{ backgroundColor: '#ee5', height: 50, width: '100%' }}></View>
            </View >
        )
    }
}
export default ViewNaresh;

const styles = StyleSheet.create({
    container1: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ee55e5'
    },
    container2: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'blue',
        marginTop: 50
    }

})
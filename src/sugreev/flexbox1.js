import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function flexbox1() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 80, height: 80, backgroundColor: 'red' }}></View>
                <View style={{ width: 80, height: 80, backgroundColor: 'blue' }}></View>
                <View style={{ width: 80, height: 80, backgroundColor: 'green' }}></View>
            </View>
            <View style={{ width: 80, height: 80, backgroundColor: 'pink' }}></View>
            <View style={{ width: 80, height: 80, backgroundColor: 'green' }}></View>
            <View style={{ width: 80, height: 80, backgroundColor: 'black' }}></View>
        </View>
    )
}

const styles = StyleSheet.create({

})

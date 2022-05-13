import { View, Text, SafeAreaView, StyleSheet, } from 'react-native'

import React from 'react'

export default function index10() {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 80, height: 80, backgroundColor: 'blue' }}></View>
                <View style={{ width: 80, height: 80, backgroundColor: 'green' }}></View>
                <View style={{ width: 80, height: 80, backgroundColor: 'red' }}></View>
            </View>
            <View style={{ width: 80, height: 80, backgroundColor: 'pink' }}></View>
            <View style={{ width: 80, height: 80, backgroundColor: 'black' }}></View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

});
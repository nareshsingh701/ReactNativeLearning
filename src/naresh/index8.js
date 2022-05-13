import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function index8() {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.textstyle}>hello</Text>
            <Text style={styles.textstyle}>hello2</Text>
            <Text style={styles.textstyle}>hello3</Text>
            <View style={{ backgroundColor: 'red', width: 50, height: 50 }}></View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    textstyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


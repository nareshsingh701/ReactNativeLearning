import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function stylesheet2() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textstyle}>hello</Text>
            <Text style={styles.textstyle}>hello2</Text>
            <View style={{ backgroundColor: 'blue', width: 50, height: 60 }}></View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    textstyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
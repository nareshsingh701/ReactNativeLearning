import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function making1() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30 }}>hello world</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

        height: 90,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'



    }
});
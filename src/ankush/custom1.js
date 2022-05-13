import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function custom1() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 36 }}>APP Name</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {

        height: 60,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
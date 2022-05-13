import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

export default function image1() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/40.jpg' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/3.jpg' }} style={{ width: 100, height: 100 }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
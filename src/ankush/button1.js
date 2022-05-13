import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function button1() {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => alert('pari')}>
                <Image source={{ uri: ('https://randomuser.me/api/portraits/women/6.jpg') }}
                    style={{ height: 250, width: 250, borderRadius: 160 }}
                />
            </TouchableOpacity>

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
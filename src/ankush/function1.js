import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'

export default function function1() {
    PressImage = () => {
        alert('hello im ankush')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title='bullon'
                onPress={() => this.PressImage()}
            />
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
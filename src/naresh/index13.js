import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function index13() {
    PressImage = () => {
        alert('hello im pari')
    }
    return (
        <View style={styles.container}>
            <Button
                title='button'
                onPress={() => this.PressImage()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
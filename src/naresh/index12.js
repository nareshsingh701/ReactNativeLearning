import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function index12() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => alert('pari')}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/54.jpg' }}
                    style={{ height: 250, width: 250, borderRadius: 160 }}
                />

            </TouchableOpacity>
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
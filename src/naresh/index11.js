import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function index11() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/47.jpg' }}
                style={{ width: 70, height: 70, }}
            />
            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/96.jpg' }}
                style={{ width: 70, height: 70, borderRadius: 50 }} />
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
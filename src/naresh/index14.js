
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function index14() {
    return (
        <View style={styles.container}>
            < Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25, }}>App name</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: '#6710bc',
        alignItems: 'center',
        justifyContent: 'center'

    }
});


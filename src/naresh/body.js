
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function Body() {
    return (
        <SafeAreaView style={styles.container}>
            < Text>Body</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});


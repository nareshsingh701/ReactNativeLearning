import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
export default function Naresh() {

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <View style={styles.container2}>
                    <Text style={{ color: 'white' }}>hello this is blue box</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: 'red',

        alignItems: 'center',
        justifyContent: 'center'
    },

    container2: {
        height: 50,
        width: '100%',
        backgroundColor: 'blue',

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
});
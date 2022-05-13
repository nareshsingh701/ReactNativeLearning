import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function styleseet1() {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.textstyle}>Hello</Text>
            <Text style={styles.textstyle}>Hello 2</Text>
            <Text style={styles.textstyle}>Hello 3</Text>
            <View style={{ backgroundColor: 'red', width: '100%', height: 50 }}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    textstyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
        alignContent: 'center'

    },
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center'
    }
});
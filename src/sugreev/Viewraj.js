import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { Component } from 'react'

class Viewraj extends Component {
    render() {


        return (
            <SafeAreaView style={styles.container1}>
                <ScrollView>
                    <Text style={{ fontSize: 50 }}>hello dear</Text>
                    <Text style={{ fontSize: 55 }}>hello dear</Text>
                    <Text style={{ fontSize: 60 }}>hello dear</Text>
                    <Text style={{ fontSize: 65 }}>hello dear</Text>
                    <Text style={{ fontSize: 70, color: 'red' }}>hello dear</Text>
                    <Text style={{ fontSize: 75 }}>hello dear</Text>
                    <Text style={{ fontSize: 80, color: 'green' }}>hello dear</Text>
                    <Text style={{ fontSize: 85 }}>hello dear</Text>
                    <Text style={{ fontSize: 90 }}>hello dear</Text>
                    <Text style={{ fontSize: 90 }}>hello dear</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Viewraj;
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',

    },
});




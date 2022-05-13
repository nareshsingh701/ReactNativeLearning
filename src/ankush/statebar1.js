import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React, { Component } from 'react'



class Statebar1 extends Component {
    render() {
        return (
            <>

                <SafeAreaView style={styles.container}>


                </SafeAreaView>
            </>
        );
    }
}
export default Statebar1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
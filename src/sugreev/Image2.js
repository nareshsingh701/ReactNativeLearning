import { StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react'

class Image2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/54.jpg' }} style={{ width: 70, height: 70 }} />
                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/22.jpg' }} style={{ width: 90, height: 90, borderRadius: 50 }} />

            </View>
        );
    }
}
export default Image2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
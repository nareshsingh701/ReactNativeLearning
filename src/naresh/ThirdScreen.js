import { View, Text, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'

const androidImage = require('../assets/images/icons8-apple-logo-48.png');
class ThirdScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ size: 10 }} source={androidImage} />
                <Text>ThirdScreen</Text>
            </View>
        );
    }
}
export default ThirdScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e5e'
    }
});
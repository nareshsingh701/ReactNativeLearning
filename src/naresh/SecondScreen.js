import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native'
import React, { Component } from 'react'

const androidImage = require('../assets/images/android_logo.png');
class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25 }}>hi</Text>
                <Image style={{ size: 25 }} source={androidImage} />
                < Button
                    title='go to third screen'
                    onPress={() => this.props.navigation.navigate('ThirdScreen')} style={styles.buttonStyle}

                />
            </View>
        );
    }
}
export default SecondScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },

});

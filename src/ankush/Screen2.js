import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { Component } from 'react'


const androidImage = require('../assets/images/ios.png');
class Screen2 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Screen2</Text>
                <Image style={{ size: 25 }} source={androidImage} />
                <Text>Screen2</Text>
                <Button
                    title='Go TO Screen2'
                    onPress={() => this.props.navigation.navigate('Screen3')} style={styles.buttonStyle}
                />
            </View>
        )
    }
}

export default Screen2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
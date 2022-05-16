import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { Component } from 'react'



const androidImage = require('../assets/images/android_logo.png');
class Screen1 extends Component {





    render() {
        return (
            <View style={styles.container}>
                <Text>Screen1</Text>
                <Image style={{ size: 25 }} source={androidImage} />
                <Text>Screen1</Text>
                <Button
                    title='Go TO Screen1'
                    onPress={() => this.props.navigation.navigate('Screen2')} style={styles.buttonStyle}


                />

            </View>
        )
    }
}

export default Screen1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
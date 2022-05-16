import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { Component } from 'react'


const androidImage = require('../assets/images/icons8-curved-arrow-50.png');
class Screen3 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
                <Image style={{ size: 25 }} source={androidImage} />
                <Text>Screen3</Text>
                <Button
                    title='Go TO Screen3'
                    onPress={() => this.props.navigation.navigate('Image1')} style={styles.buttonStyle}


                />
            </View>
        )
    }
}

export default Screen3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
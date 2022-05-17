import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { Component } from 'react'
const androidImage = require('../assets/images/maharaj.png');
class Screens1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ size: 25 }} source={androidImage} />
                <Button
                    title="go to Screens2"
                    onPress={() => this.props.navigation.navigate('Screens2')} />
            </View>
        )
    }
}
export default Screens1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    }
})
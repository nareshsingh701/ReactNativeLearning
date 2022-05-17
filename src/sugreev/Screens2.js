import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { Component } from 'react'
const androidImage = require('../assets/images/maharaj2.png');
class Screens2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ size: 25 }} source={androidImage} />
                <Button
                    title="go to Screens3"
                    onPress={() => this.props.navigation.navigate('Screens3')} />
            </View>
        )
    }
}
export default Screens2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
})
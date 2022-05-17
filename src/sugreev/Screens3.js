import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { Component } from 'react'
const androidImage = require('../assets/images/ios.png');
class Screens3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>hello dear</Text>
                <Image style={{ size: 25 }} source={androidImage} />
                <Button
                    title="go to Screens3"
                    onPress={() => this.props.navigation.navigate('Screens3')} />
            </View>
        )
    }
}
export default Screens3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
})
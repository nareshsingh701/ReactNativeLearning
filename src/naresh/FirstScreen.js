import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { Component } from 'react'

const androidImage = require('../assets/images/icons8-apple-pay-64.png');
class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ size: 25 }} source={androidImage} />
                <Button
                    title='go to second screen'
                    onPress={() => this.props.navigation.navigate('SecondScreen')} style={styles.buttonStyle}

                />
            </View>
        );
    }
}
export default FirstScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f555'
    }
});

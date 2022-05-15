import { StyleSheet, Text, View, Button } from 'react-native'
import React, { Component } from 'react'


class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
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
        backgroundColor: 'blue'
    }
});

import { View, Text, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'



class Screen2 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Screen2</Text>
                <Button
                    title='Go TO screen1'
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
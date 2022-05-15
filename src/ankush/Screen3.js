import { View, Text, StyleSheet, } from 'react-native'
import React, { Component } from 'react'



class Screen3 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>I am Screen1</Text>
                <Button
                    title='Go TO screen1'
                    onPress={() => this.props.navigation.navigate('image1')} style={styles.buttonStyle}


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
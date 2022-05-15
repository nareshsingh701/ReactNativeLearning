import { View, Text, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'



class Screen1 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Go TO screen1'
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
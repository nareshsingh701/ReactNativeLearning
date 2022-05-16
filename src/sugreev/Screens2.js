import { View, Text, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'

class Screens2 extends Component {
    render() {
        return (
            <View style={styles.container}>
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
        justifyContent: 'center'
    }
})
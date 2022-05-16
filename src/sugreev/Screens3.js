import { View, Text, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'

class Screens3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>hello dear</Text>
                <Button
                    title="go to Screens4"
                    onPress={() => this.props.navigation.navigate('Screens4')} />
            </View>
        )
    }
}
export default Screens3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
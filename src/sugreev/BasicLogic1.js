import { StyleSheet, Text, View, Button } from 'react-native'
import React, { Component } from 'react'

class BasicLogic1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>hello2</Text>
                <Button
                    title="go to BasicLogic2"
                    onPress={() => this.props.navigation.navigate('BasicLogic2')} />
            </View>
        )
    }
}
export default BasicLogic1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
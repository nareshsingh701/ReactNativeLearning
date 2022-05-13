import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function letsUseState1() {
    const [add, setAdd] = useState(0)
    onPress = () => {
        setAdd(add + 2)
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 42 }}>
                {add}
            </Text>
            <Button
                onPress={() => this.onPress()}
                title='Add 2'
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
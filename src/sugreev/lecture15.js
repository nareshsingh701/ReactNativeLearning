import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const Display = (props) => (
    <SafeAreaView>
        <TouchableOpacity
            onPress={() => { props.brother() }}>

            <Text style={{ fontSize: 56 }}>Display me</Text>
        </TouchableOpacity>
    </SafeAreaView>
)

export default Display;
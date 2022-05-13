import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const Displey = (props) => (
    <SafeAreaView>
        <TouchableOpacity
            onPress={() => { props.brother() }}>

            <Text style={{ fontSize: 56 }}>Displey me</Text>
        </TouchableOpacity>
    </SafeAreaView>
)

export default Displey;
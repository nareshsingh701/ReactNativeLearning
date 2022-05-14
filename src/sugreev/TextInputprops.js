import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function TextInputprops() {
  return (
    <View style={styles.container}>
      <TextInput
        style={{ fontSize: 35, width: 300, borderWidth: 3, borderColor: '#ee5e55' }}
        placeholder="Email"
        placeholderTextColor="red" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
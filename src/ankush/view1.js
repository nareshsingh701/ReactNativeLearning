import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'

export default function View1() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={{ color: '#fff' }}>Hello this is blue box</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    height: 70,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
})
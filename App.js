import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { Component } from 'react'
import TextInputwithState from './src/sugreev/TextInputwithState'




class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInputwithState />
      </SafeAreaView>
    )
  }


}



export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
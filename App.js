import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Webview1 from './src/ankush/webview1';


class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        < Webview1 />
      </SafeAreaView>
    )
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
}) 
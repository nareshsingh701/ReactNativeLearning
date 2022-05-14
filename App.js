import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NavigationComponent from './src/navigation/rootnavigations'

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationComponent />
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
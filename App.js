import React from 'react'
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'

//Custom Imports
import store from './src/redux/store';
import NavigationComponent from './src/navigation/rootnavigations'

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationComponent />
      </Provider>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
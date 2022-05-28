import Axios from 'axios';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ActivityIndicator1 extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() { this.getapiData() }
  async getapiData() {
    let resp = await Axios.get('facebook.github.io/react-native/movies.Json')
    console.warn(resp.data.movies)
    this.setState({ data: resp.data.movies })
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.data.length > 0 ?
            <View>
              {
                this.state.data.map((item) =>
                  <Text>{item.title},{item.releaseYear}</Text>)
              }
            </View> : <Text>data is loading...</Text>

        }

      </View>
    )
  }
}

export default ActivityIndicator1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,

  },
  Text1: {
    fontSize: 50
  }

})

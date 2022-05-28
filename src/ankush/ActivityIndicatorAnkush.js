import { Text, View } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios';
class ActivityIndicatorAnkush extends React. Component {

  constructor()
  {
    super()
    this.state={
      data:[]
    }
  } 
  ComponentDidMount()
  {
   this. getapiData()
  }
 async getapiData()
 {
let resp=await axios.get('https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF')
console.log(resp.data)
 }

  render() {
    return (
      <View style={{flex:1,marginTop:70}}>
        {
        this.state.data.length> 0 ?
      <View>
{
  this.state.data.map((item)=>
  <Text style={{fontSize:40}}>{item.title}</Text>)
}
</View>: <Text>data is loading...</Text>
  }

      </View>
    )
  }
}
export default ActivityIndicatorAnkush;
import { Text, View } from 'react-native'
import React from 'react'
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
let resp=await axios.get('https://dog.ceo/api/breeds/list/all')
console.log(resp.data)
this.setState({data:resp.data})
 }

  render() {
    return (
      <View style={{flex:1,marginTop:70}}>
        {
        this.state.data.length> 0 ?
      <View>
{
  this.state.data.map((item)=>
  <Text style={{fontSize:40}}>{item.title},{item.releseYear}</Text>)
}
</View>: <Text>data is loading...</Text>
  }

      </View>
    )
  }
}
export default ActivityIndicatorAnkush;
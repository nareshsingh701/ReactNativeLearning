import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

const ActivityIndicatorNaresh =()=>{
    const [name,onChangeName]=React.useState();

    const [number,onChangeNumber]=React.useState();
    return(
        <View style={styles.container}>
            <TextInput style={styles.Text} 
            placeholder='user name'
            onChangeText={onChangeName}
            value={name}
            
            />
            <TextInput style={styles.Text} 
            placeholder='user number'
            onChangeText={onChangeNumber}
            value={number}
            keyboardType='numeric'
            
            />
        </View>
    )
}

export default ActivityIndicatorNaresh;

const styles=StyleSheet.create({
container:{
    alignItems:'center',
    marginTop:10
    
},
Text:{
    height:40,
    borderWidth:1,
    width:'80%',
    padding:10,
    margin:10

}
})

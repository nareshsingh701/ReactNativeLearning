import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { updateAnkushFields } from '../redux/action/ankushAction';
import { useDispatch, useSelector } from 'react-redux';



const AnkushScreenPhoto = () => {


    const data = [
        {
            FastName: "Ankush",
            LastName: "Singh",
            From: "khaga",
            FullAddress: "Rajpoot Nagar khaga ",
            DateOfBirth: "10-7-2005",
            work: "Study",
        }
    ]
    const renderListData = (listData) => {
        const { item, index } = listData;
        
        return (
            <View>
                <Text style={styles.TextStyle}>{item.FastName}</Text>
                <Text style={styles.TextStyle}>{item.LastName}</Text>
                <Text style={styles.TextStyle}>{item.From}</Text>
                <Text style={styles.TextStyle}>{item.FullAddress}</Text>
                <Text style={styles.TextStyle}>{item.DateOfBirth}</Text>
                <Text style={styles.TextStyle}>{item.work}</Text>
                <Text style={styles.TextStyle}>{item.FastName}</Text>
                <Text style={styles.TextStyle}>{item.LastName}</Text>
                <Text style={styles.TextStyle}>{item.From}</Text>
                <Text style={styles.TextStyle}>{item.FullAddress}</Text>
                <Text style={styles.TextStyle}>{item.DateOfBirth}</Text>
                <Text style={styles.TextStyle}>{item.work}</Text>
                <Text style={styles.TextStyle}>{item.FastName}</Text>
                <Text style={styles.TextStyle}>{item.LastName}</Text>
                <Text style={styles.TextStyle}>{item.From}</Text>
                <Text style={styles.TextStyle}>{item.FullAddress}</Text>
                <Text style={styles.TextStyle}>{item.DateOfBirth}</Text>
                <Text style={styles.TextStyle}>{item.work}</Text>
                

            </View>
    
        )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderListData}
                    style={{ marginTop: 20 }}
                    contentContainerStyle={{ flexGrow: 1 }}
                />
            </View>
        )
        
}


export default AnkushScreenPhoto;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
TextStyle:{
    fontSize:20,
    height:80,
    width:350,
    backgroundColor:'pink',
    padding:25,
   // margin:20,
    marginVertical:10,
fontWeight:'bold',
borderRadius:19,
color:'#000',

},


})
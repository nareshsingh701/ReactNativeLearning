
import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { updateSugreevFields } from '../redux/action/userActionOne'
const FunctionRedux = () => {


    const data = [
        {
            title: " name - Sugreev",
            dateOfBirth: "dateOfBirth - 01/01/1991",
            address: " address - RajPoot Nagar Khaga",
            work: " work - Faltu Ghumna"
        }

    ]
    const renderListData = (listData) => {
        const { item, index } = listData;



        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.dateOfBirth}</Text>
                <Text style={styles.text}>{item.address}</Text>
                <Text style={styles.text}>{item.work}</Text>
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


export default FunctionRedux;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 70,
        width: 345,
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 10,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

    }

})
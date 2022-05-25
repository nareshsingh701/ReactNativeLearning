import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
const ActivityIndicatorNaresh = () => {
    const names = [

        { name: 'naresh' },

        {
            name: 'ankush',
        },
        {
            name: 'sugreev',
        },
        {
            name: 'pravesh',
        },
        {
            name: 'naresh',
        },
        {
            name: 'ankush',
        },
        {
            name: 'sugreev',
        },
        {
            name: 'pravesh',
        },
        {
            name: 'naresh',
        },
        {
            name: 'ankush',
        },
        {
            name: 'sugreev',
        },
        {
            name: 'pravesh',
        },
        {
            name: 'naresh',
        },
        {
            name: 'ankush',
        },
        {
            name: 'sugreev',
        },
        {
            name: 'pravesh',
        },
        {
            name: 'naresh',
        },
        {
            name: 'ankush',
        },
        {
            name: 'sugreev',
        },
        {
            name: 'pravesh',
        },
        {
            name: 'naresh',
        },
        {
            name: 'ankush',
        },
        {
            name: 'sugreev',
        },
        {
            name: 'pravesh',
        },
    ]
    return (
        <FlatList data={names}
            renderItem={({ item }) => {

                return (
                    <Text style={styles.text}>{item.name}</Text>
                );
            }}
        />
    );
};




export default ActivityIndicatorNaresh;
const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        textAlign: 'center',
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted',

    }
})
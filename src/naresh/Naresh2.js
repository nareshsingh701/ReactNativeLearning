import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'

const Naresh2 = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.viewStyle9}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/naresh.png')} />
                    <Text style={styles.TextStyle}>My notes</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.TextStyle1}>Work</Text>
                    <View style={styles.bestStyle}>
                        <Text style={styles.TextStyle2}>6</Text>
                    </View>

                </View>
                <View style={styles.ViewStyle1}>
                    <Text style={styles.TextStyle3}>Today at 13:21</Text>
                    <Text style={styles.TextStyle4}>Remind Andy about Halifax files.</Text>
                    <Text style={styles.TextStyle5}>Make sure they gat send by tonnigh...</Text>

                </View>
                <View style={styles.ViewStyle2}>
                    <Text style={styles.TextStyle6}>Today at 09:27</Text>
                    <Text style={styles.TextStyle7}>Tomorrow 10 AM Interviews with job...</Text>
                    <View style={styles.ViewStyle3}>
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/97.jpg' }} style={{ width: '100%%', height: 170, flexDirection: 'row', borderRadius: 15 }} />
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/39.jpg' }} style={{ width: '100%', height: 170, marginLeft: 30, borderRadius: 15 }} />
                    </View>
                </View>
                <View style={styles.ViewStyle4}>
                    <Text style={styles.TextStyle8}>Today at 13:21</Text>
                    <Text style={styles.TextStyle9}>Check the status of Cube order.In</Text>
                    <Text style={styles.TextStyle10}>danger of being late.</Text>

                </View>

            </View>
        </ScrollView>
    )
}

export default Naresh2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TextStyle: {
        marginLeft: 7,
        fontSize: 20,
        marginTop: 12

    },
    TextStyle1: {
        color: 'red',
        fontSize: 35,
        marginTop: 30,
        marginLeft: 30,
    },
    viewStyle: {
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 16,
        marginTop: 20,
    },

    TextStyle2: {
        color: 'red',
        fontSize: 35,
        marginTop: 18,
        marginLeft: 25
    },
    bestStyle: {
        height: 70,
        width: 70,
        backgroundColor: 'pink',
        marginLeft: 140,
        marginTop: 20,
        borderRadius: 60
    },
    ViewStyle1: {
        height: 120,
        width: '90%',
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 30
    },
    TextStyle3: {
        color: 'red',
        marginLeft: 30,
        marginTop: 10
    },
    TextStyle4: {
        marginLeft: 30,
        marginTop: 30
    },
    TextStyle5: {
        marginLeft: 30
    },
    ViewStyle2: {
        height: 260,
        width: '90%',
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 20,
        borderRadius: 15

    },
    TextStyle6: {
        marginLeft: 30,
        color: 'red',
        marginTop: 10
    },
    TextStyle7: {
        marginLeft: 30,
        marginTop: 10,
    },
    ViewStyle3: {
        flexDirection: 'row',
        height: 170,
        width: '40%',
        backgroundColor: '#fff',
        marginLeft: 20,
        marginTop: 10,

    },
    ViewStyle4: {
        height: 120,
        width: '90%',
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 20

    },
    TextStyle8: {
        color: 'red',
        marginLeft: 30,
        marginTop: 10
    },
    TextStyle9: {
        marginTop: 30,
        marginLeft: 30

    },
    TextStyle10: {
        marginLeft: 30
    },
    ImagesStyle: {
        flexDirection: 'row',
        marginTop: 10
    },
    viewStyle9: {
        flexDirection: 'row',
        marginLeft: 10
    }


});
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const ViewNaresh = () => {
    const showCard = () => {
        return (
            <View style={styles.cardStyle}>

                <Image resizeMode={'cover'} style={styles.ImageStyle} source={require('../assets/images/card_two.png')} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.TextStyle}>PayExim</Text>
            <Text style={{ marginLeft: 50, fontSize: 25 }}>Your daily transaction Partner</Text>


            <View style={styles.TextStyle2}>
                <Text style={styles.bestStyle}>Pay by card</Text>
                <View style={styles.boxStyle}>
                    <Text style={styles.noteStyle}>Add New</Text>
                </View>


            </View>

            <ScrollView horizontal={true}>
                {showCard()}
                {showCard()}
                {showCard()}
                {showCard()}

            </ScrollView>
        </View>
    )
}

export default ViewNaresh

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginBottom: 30
    },
    cardStyle: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 20,
        marginLeft: 20,

    },

    textStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
    },
    ImageStyle: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 100,
        marginBottom: 30,

    },
    TextStyle: {
        width: '100%',
        height: 100,
        fontSize: 70,
        marginLeft: 50,
        marginTop: 70,
    },
    bestStyle: {

        width: 280,
        height: 200,
        marginLeft: 30,
        fontSize: 50,
        marginTop: 80,

    },
    noteStyle: {
        width: 60,
        height: 60,
        marginLeft: 10,
        color: 'red',
        marginTop: 14
    },
    boxStyle: {
        width: 75,
        height: 40,
        backgroundColor: 'pink',
        marginTop: 92,
        borderRadius: 10

    },
    TextStyle2: {
        flexDirection: 'row',

    }


});
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
            <Text style={styles.bestStyle}>Pay by card</Text>

            <View style={styles.boxStyle}>
                <Text style={styles.noteStyle}>Add New</Text>
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
        marginTop: '8%',
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
        width: '80%',
        height: 70,
        marginLeft: 50,
        fontSize: 50,
        marginTop: 80

    },
    noteStyle: {
        width: '50%',
        height: 60,
        marginLeft: '30%',
        color: 'red'
    },
    boxStyle: {
        width: '24%',
        height: 40,
        backgroundColor: 'pink',
        marginLeft: '75%'

    }

});
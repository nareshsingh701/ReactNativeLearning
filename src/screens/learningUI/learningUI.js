import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const LearningUI = () => {

    const showCard = () => {
        return (
            <View style={styles.cardStyle}>
                <Image resizeMode={'cover'} style={styles.imageStyle} source={require('../../assets/images/card_two.png')} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                {showCard()}
                {showCard()}
                {showCard()}
                {showCard()}
            </ScrollView>
        </View>
    )
}

export default LearningUI;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardStyle: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        marginTop: 50,
        borderRadius: 20,
        marginLeft: 20
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    imageStyle: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
    }
})
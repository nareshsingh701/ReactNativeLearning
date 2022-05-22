import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const Viewraj2 = () => {



    return (
        <View style={styles.container}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle1}>My</Text>
                <Text style={styles.textStyle2}>Notes</Text>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle3}>personal</Text>
                <Text style={styles.textStyle4}>4</Text>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle5}>Work</Text>


                <View style={styles.bestStyle}>
                    <Text style={styles.textStyle6}>6</Text>
                </View>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle7}>Ideas</Text>
                <Text style={styles.textStyle8}>2</Text>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle9}>Lists</Text>
                <Text style={styles.textStyle10}>7</Text>
            </View>
            <View style={styles.View2}>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../assets/images/hello1.png')} />


                <View style={styles.Viewone}>
                    <Image resizeMode={'cover'} style={styles.Image2} source={require('../assets/images/icons8-plus-64.png')} />
                </View>
            </View>
            <View style={styles.ViewTwo}>
                <Text style={styles.textStyle11}>Menu</Text>
            </View>
        </View>

    );
}

export default Viewraj2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle1: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'red',
    },
    textStyle2: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 20

    },
    textStyle3: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue',
    },
    textStyle4: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 75,
        marginTop: 3,
    },
    textStyle5: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 12

    },
    textStyle6: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
        marginLeft: 20,
        marginTop: 12,


    },
    textStyle7: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 12,


    },
    textStyle8: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 135,
        marginTop: 12,

    },
    textStyle9: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 12,


    },
    textStyle10: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 150,
        marginTop: 12,

    },
    textStyle11: {

        fontSize: 25,
        height: 70,
        color: 'red',
        marginLeft: 50,



    },
    viewStyle: {
        flexDirection: 'row',
        paddingLeft: 60,
        paddingRight: 16,
        marginTop: 20,
    },
    bestStyle: {

        height: 70,
        width: 70,
        backgroundColor: 'pink',
        marginLeft: 120,
        borderRadius: 80


    },
    Image1: {
        width: 60,
        marginTop: 180,
        height: 60,
        marginLeft: 50,

    },
    Image2: {
        width: 70,
        marginTop: 6,
        height: 70,
        marginLeft: 6

    },
    View2: {
        flexDirection: 'row',
    },
    Viewone: {
        height: 80,
        width: 80,
        backgroundColor: 'red',
        marginTop: 175,
        marginLeft: 155,
        flexDirection: 'row',
        borderRadius: 60

    }
})
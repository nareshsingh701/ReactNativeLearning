import { View, Text, StyleSheet, ScrollView } from 'react-native'
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
            <Text style={styles.textStyle7}>ideas</Text>
            <Text style={styles.textStyle8}>2</Text>
        </View>
    )
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
        marginLeft: 80,
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
        color: '#fff',
        marginLeft: 23,
        marginTop: 12

    },
    textStyle7: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 12

    },
    textStyle8: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue',
        marginLeft: 23,
        marginTop: 12,
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


    }

})
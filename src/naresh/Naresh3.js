import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Naresh3 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.View4}>
                <Image resizeMode={'cover'} style={styles.Image1} source={require('../assets/images/icons8-left-24.png')} />
                <Image resizeMode={'cover'} style={styles.Image2} source={require('../assets/images/xiaomi-3.png')} />
                <Image resizeMode={'cover'} style={styles.Image3} source={require('../assets/images/greater-than.png')} />
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.View5}>
                    <Image resizeMode={'cover'} style={styles.Image4} source={require('../assets/images/Xiaomi-Mi-Max-3.jpg')} />
                    <Text style={styles.Text9}>Xiaomi Mi Max 3         Black</Text>
                    <Text style={styles.Text11}>USD 160</Text>
                    <Text style={styles.Text12}>X 1</Text>
                    <View style={styles.View6}>
                        <Image resizeMode={'cover'} style={styles.Image4} source={require('../assets/images/Xiaomi-Mi-Max-3.jpg')} />
                        <Text style={styles.Text9}>Xiaomi Mi Max 3         Black</Text>
                        <Text style={styles.Text11}>USD 160</Text>
                        <Text style={styles.Text12}>X 1</Text>
                    </View>

                </View>
            </ScrollView>

            <Text style={styles.Text1}>18 Oct,2018 </Text>
            <Text style={styles.Text2}>20:30</Text>
            <View style={styles.View1}>
                <Text style={styles.Text3}>Is there available stock for</Text>
                <Text style={styles.Text4}>Mix 3 in Gold ?</Text>
            </View>
            <View style={styles.View2}>
                <Text style={styles.Text5}>Yes,we have more stock for</Text>
                <Text style={styles.Text6}>Gold available.</Text>
            </View>
            <View style={styles.View3}>
                <Text style={styles.Text7}>Awesome,Thanksl will get a</Text>
                <Text style={styles.Text8}>set soon.</Text>
            </View>
            <View style={styles.View7}>

            </View>

        </View>
    )
}

export default Naresh3

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View4: {
        flexDirection: 'row'
    },
    Text1: {
        marginLeft: 160,

    },
    Text2: {
        marginLeft: 170,

        color: 'grey',

    },
    View1: {
        width: '60%',
        height: 70,
        backgroundColor: 'blue',
        marginLeft: 140,
        marginTop: 20,
        borderRadius: 10
    },
    Text3: {
        marginLeft: 10,
        marginTop: 15,
        color: '#fff'
    },
    Text4: {
        marginLeft: 10,
        marginTop: 8,
        color: '#fff'
    },
    View2: {
        width: '60%',
        height: 70,
        backgroundColor: 'grey',
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 10,

    },
    Text5: {
        marginLeft: 10,
        marginTop: 10,
    },
    Text6: {
        marginLeft: 10,
        marginTop: 10
    },
    View3: {
        width: '60%',
        height: 70,
        backgroundColor: 'blue',
        marginLeft: 130,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 20,
        marginBottom: 200
    },
    View7: {
        width: 40,
        height: 40,
        backgroundColor: 'gray',

    },
    Text7: {
        marginLeft: 10,
        marginTop: 10,
        color: '#fff'
    },
    Text8: {
        marginLeft: 10,
        marginTop: 10,
        color: '#fff'
    },
    Image1: {
        marginTop: 10,
        marginLeft: 13
    },
    Image2: {
        marginLeft: 280,
        marginTop: 10
    },
    Image3: {
        marginTop: 15,
        marginLeft: 10
    },
    View5: {
        width: 280,
        height: 80,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row'
    },
    View6: {
        width: 280,
        height: 80,
        backgroundColor: '#fff',
        marginLeft: 20,
        borderRadius: 10,
        flexDirection: 'row'
    },
    Image4: {
        height: 80,
        width: 80,

    },
    Text9: {
        marginTop: 15,
        fontSize: 15,
        position: 'absolute',
        marginLeft: 90,

    },

    Text11: {
        marginTop: 50,
        color: 'blue',
        marginLeft: 10,
        flexDirection: 'row'
    },
    Text12: {
        marginTop: 50,
        marginLeft: 100
    },

})
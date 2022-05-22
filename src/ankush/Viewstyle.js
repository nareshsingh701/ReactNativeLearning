import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Viewstyle = () => {
    const Images = () => {
        return (
            <View>

                <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/Xiaomi-Mi-Max-3.jpg')} />



            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>

            <Image resizeMode={'cover'} style={styles.Image3} source={require('../assets/images/hello1.png')} />

            <Text style={styles.Text4}>MY Order</Text>

            <View style={styles.text7}>
                <Text style={styles.text6}>ALL</Text>
                <View style={styles.View1}>
                    <Text style={styles.text8}>Paid</Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.text9}>shipped</Text>
                </View>
                <View style={styles.View3}>
                    <Text style={styles.text10}>
                        soping
                    </Text>
                </View>

            </View>


            <Text style={styles.Text5}>Order ID #860368</Text>

            <View >

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    marginTop: 10,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12,


                }} >

                    <View>

                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/icons8-hide-24.png')} />
                    </View>

                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.text3}>Xiaomi Mi Mix 3</Text>
                            <Text style={styles.text2}>usd 160</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: 20 }}>
                            <Text>State Black</Text>
                            <Text>X 1</Text>
                        </View>

                    </View>
                    <Text style={{
                        position: 'absolute',
                        right: 16,
                        bottom: 16,
                        color: '#e5e5e5'

                    }}>Packing</Text>
                </View>
                <View>

                </View>

            </View >
            <View style={styles.Image2}>
                <Text style={{ marginLeft: 120, fontSize: 17, marginTop: 10 }}>Xiaomi Mi Mix 3</Text>
                <Text style={{ color: 'blue', marginLeft: 120, fontSize: 15 }}>usd 160</Text>
                <Text style={{ marginLeft: 120, marginTop: 20 }}>Black</Text>
                <Text style={{ marginLeft: 120 }}>X 1</Text>
                < View style={styles.ImageStyle1}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/Xiaomi-Mi-Max-3.jpg')} />
                </View>
                <Text style={{
                    position: 'absolute',
                    right: 16,
                    bottom: 16,
                    color: '#e5e5e5'

                }}>Packing</Text>

            </View>
            <View style={styles.View4}>
                <Text style={styles.text11}>Massages (2)</Text>
                <View style={styles.text12}>
                    <Text style={styles.View5}>Order Details</Text>
                </View>

            </View>
            <Text style={{ fontSize: 18, marginTop: 25, }}>Order ID #980368</Text>
            <View>





                <View style={styles.Image2}>
                    <Text style={{ marginLeft: 120, fontSize: 17, marginTop: 10 }}>pixel 3</Text>
                    <Text style={{ color: 'blue', marginLeft: 120, fontSize: 15 }}>usd 1200</Text>
                    <Text style={{ marginLeft: 120, marginTop: 20 }}>clearty-whith</Text>
                    <Text style={{ marginLeft: 120 }}>X 1</Text>
                    < View style={styles.ImageStyle1}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/Xiaomi-Mi-Max-3.jpg')} />
                    </View>
                    <Text style={{
                        position: 'absolute',
                        right: 16,
                        bottom: 16,
                        color: '#e5e5e5'

                    }}>Packing</Text>

                </View>
                <View style={styles.View4}>
                    <Text style={styles.text11}>Massages (2)</Text>
                    <View style={styles.text12}>
                        <Text style={styles.View5}>Order Details</Text>
                    </View>
                </View>


            </View>



        </ScrollView >
    )
}

export default Viewstyle

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16


    },
    ImagesStyle: {
        height: 80,
        width: 80,
    },
    ImageStyle1: {
        height: 80,
        width: 80,
        marginLeft: 20,
        position: 'absolute',
        right: 260,
        bottom: 16,


        backgroundColor: 'red'
    },
    Image2: {
        backgroundColor: '#fff',
        height: 120,
        width: 360,
        marginTop: 20,
        borderRadius: 10
    },
    text1: {
        marginLeft: 180,
        marginTop: 5,
        fontSize: 20,




    },
    text2: {
        color: 'blue',
        fontSize: 14,
    },
    text3: {

        fontSize: 17,
    },
    Text4: {
        marginLeft: 30,
        fontSize: 30,
        marginTop: 20,



    },
    Text5: {
        marginTop: 30,
        fontSize: 20,
        marginLeft: 25,

    },
    text6: {
        marginTop: 15, marginLeft: 30,
    },
    text7: {
        height: 40,
        width: 80,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        marginLeft: 10,
        borderRadius: 30,
        marginTop: 20
    },
    text8: {
        // marginTop: 15,
        // marginLeft: 30,

    },
    View1: {
        backgroundColor: '#e5e5',
        height: 40,
        width: 80,
        borderRadius: 30,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text9: {
        marginLeft: 15,
        marginTop: 13
    },
    View2: {
        backgroundColor: '#fff',
        height: 40,
        width: 80,
        marginLeft: 10,
        borderRadius: 30,

    },
    text10: {
        marginLeft: 15,
        marginTop: 13
    },
    View3: {
        backgroundColor: '#fff',
        height: 40,
        width: 80,
        marginLeft: 10,
        borderRadius: 30,

    },
    text11: {
        color: 'blue',

        marginLeft: 30,
        marginTop: 13,
    },
    View4: {
        backgroundColor: '#fff',
        height: 40,
        width: 140,
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row'

    },
    text12: {
        marginLeft: 100,
        borderRadius: 10,
        backgroundColor: '#e5e5ee',


    },
    View5: {

        marginTop: 10,
        height: 40,
        width: 120,
        marginLeft: 20

    },
    Image3: {
        fontSize: 10,
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 20

    },
    Image4: {
        backgroundColor: '#fff',
        height: 120,
        width: 350,
        marginTop: 20,
        borderRadius: 10,
        marginLeft: 10,

    },
})
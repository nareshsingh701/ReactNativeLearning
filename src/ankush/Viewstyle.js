import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Viewstyle = () => {
    const Images = () => {
        return (
            <View style={styles.bestStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/Xiaomi-Mi-Max-3.jpg')} />



            </View>
        )
    }
    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: 'row',
                backgroundColor: 'lightblue',
                borderRadius: 10,
                marginTop: 20,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
                paddingBottom: 12
            }} >
                <View>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/Xiaomi-Mi-Max-3.jpg')} />

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

            <View >

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'lightblue',
                    borderRadius: 10,
                    marginTop: 20,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12,

                }} >
                    <View>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/Xiaomi-Mi-Max-3.jpg')} />

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
            </View>


        </View>
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
    text1: {
        marginLeft: 180,
        marginTop: 50,
        fontSize: 20,
        flexDirection: 'row'



    },
    text2: {
        color: 'blue',
        fontSize: 20,
    },
    text3: {

        fontSize: 25,
    },


})
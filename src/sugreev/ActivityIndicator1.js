

import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {

        flex: 1
    },
    stretch: {
        width: 150,
        height: 120,
        borderRadius: 20,

    },
    stretch1: {
        width: 100,
        height: 80,
        borderRadius: 20,

    },
    View2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginTop: 50,

    },
    View1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60
    },
    View4: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        marginTop: 50,

    },
    View3: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

    }


});

const ActivityIndicator1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <Image
                    style={styles.stretch}
                    source={require('../assets/images/React_Native_Logo.png')}

                />

                <Image
                    style={styles.stretch}
                    source={require('../assets/images/React_Native_Logo.png')}
                />
            </View>


            <View style={styles.View2}>
                <Image
                    style={styles.stretch1}
                    source={require('../assets/images/React_Native_Logo.png')}
                />
                <Image
                    style={styles.stretch1}
                    source={require('../assets/images/React_Native_Logo.png')}
                />

            </View>
            <View style={styles.View3}>
                <Image
                    style={styles.stretch}
                    source={require('../assets/images/React_Native_Logo.png')}

                />

                <Image
                    style={styles.stretch}
                    source={require('../assets/images/React_Native_Logo.png')}
                />
            </View>


            <View style={styles.View4}>
                <Image
                    style={styles.stretch1}
                    source={require('../assets/images/React_Native_Logo.png')}
                />
                <Image
                    style={styles.stretch1}
                    source={require('../assets/images/React_Native_Logo.png')}
                />
            </View>
        </View>
    );
}

export default ActivityIndicator1;
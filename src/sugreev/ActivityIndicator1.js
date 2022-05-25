import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
    <View style={styles.separator}>

    </View>
)

const ActivityIndicator1 = () => (

    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
                the title and onPress handler are required.it is recommended to set accessiblityLabel to help make your app usable by everyone.
            </Text>
            <Button
                title='Press me'
                onPress={() => Alert.alert('Raj is brand')}
            />
        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
                adjust the color in a way that looks standard on each platform.On ios,the color prop controls the color off the text.On Android,the color adjust the background color off the button.
            </Text>
            <Button
                title='Press me'
                onPress={() => Alert.alert('Raj is back')}
            />

        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
                All interaction for the component are disabled.
            </Text>
            <Button
                disabled
                title='Press me'
                onPress={() => Alert.alert('hello')}
            />
        </View>
        <Separator />
        <View >
            <Text style={styles.title} >
                this leyout strategy lets the title define the width of the button.
            </Text>
            <View style={styles.Button}>
                <Button
                    title='Left Button'
                    onPress={() => Alert.alert('hello word')}
                />
                <Button
                    title='Right Button'
                    onPress={() => Alert.alert('Right hello')}
                />
            </View>
        </View>

    </SafeAreaView>

)

export default ActivityIndicator1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'center'

    },
    separator: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey',
        marginVertical: 8

    },
    Button: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20
    }

})
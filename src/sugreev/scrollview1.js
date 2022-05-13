import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function scrollview1() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
                <Text style={{ fontSize: 50 }}>sugreev singh</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
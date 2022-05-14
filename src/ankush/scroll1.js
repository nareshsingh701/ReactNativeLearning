import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

export default function Scroll1() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={{ fontSize: 79 }}> hello world</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 79 }}>hello </Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 69 }}>hello sugreev</Text>
        <Text style={{ fontSize: 69 }}>hello naresh</Text>
        <Text style={{ fontSize: 69 }}>hello ankush</Text>
        <Text style={{ fontSize: 69 }}>hello ankush</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>
        <Text style={{ fontSize: 79 }}>hello world</Text>

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justiyContenr: 'center'
  }
});
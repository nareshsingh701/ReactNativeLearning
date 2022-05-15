import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const URL = 'https://www.google.com/'
class WebView1 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    source={{ uri: URL }}
                    style={{ marginBottom: 24 }} />
            </View>
        );
    }
}

export default WebView1;

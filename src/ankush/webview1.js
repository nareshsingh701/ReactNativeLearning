import { SafeAreaView, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';

const URl = 'https://www.google.com/';


class Webview1 extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <WebView
                    source={{ uri: URl }}
                    style={{ marginBottom: 24 }}
                />
            </SafeAreaView>
        );
    }
}
export default Webview1;

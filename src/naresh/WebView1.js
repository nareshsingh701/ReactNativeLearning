import { View, WebView } from 'react-native'
import React from 'react'
const URL = 'https://www.google.com/'

class WebView1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <WebView
                    source={{ uri: URL }}
                    style={{ marginBottom: 25 }}


                />

            </View>
        )
    }
}
export default WebView1;

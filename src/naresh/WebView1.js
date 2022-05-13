import { View, WebView } from 'react-native'
import React from 'react'

class WebView1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <WebView
                    source={{ uri: 'https://www.google.com/' }}


                />

            </View>
        )
    }
}
export default WebView1;



import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

<FlatList
    ItemSeparatorComponent={
        Platform.OS !== 'android' &&
        (({ highlighted }) => (
            <View
                style={[
                    style.separator,
                    highlighted && { marginLeft: 0 }
                ]}
            />
        ))
    }
    data={[{ title: 'Title Text', key: 'item1' }]}
    renderItem={({ item, index, separators }) => (
        <TouchableHighlight
            key={item.key}
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{ backgroundColor: 'white' }}>
                <Text>{item.title}</Text>
            </View>
        </TouchableHighlight>
    )}
/>
export default ActivityIndicatorAnkush;

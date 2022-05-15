import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import FirstScreen from '../naresh/FirstScreen';
import Scroll1 from '../ankush/scroll1';
import ImageMaharajView from '../sugreev/image1';
import MyCounterApp from '../screens/counter/myCounterApp';
import ClassCounterScreen from '../screens/counter/classCounterScreen';
import SecondScreen from '../naresh/SecondScreen';
import ThirdScreen from '../naresh/ThirdScreen';
import TextInputwithState from '../sugreev/TextInputwithState'
import WebView1 from '../sugreev/WebView1'
import StatusBar1 from '../sugreev/StatusBar1'
import Screen1 from '../ankush/Screen1'
import Screen2 from '../ankush/Screen2';
import Screen3 from '../ankush/Screen3';
import image1 from '../ankush/image1';





const Stack = createNativeStackNavigator();

const NavigationComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen name="Scroll1" component={Scroll1} />
                <Stack.Screen name="ImageMaharajView" component={ImageMaharajView} />
                <Stack.Screen name="MyCounterApp" component={MyCounterApp} />
                <Stack.Screen name="ClassCounterScreen" component={ClassCounterScreen} />
                <Stack.Screen name="SecondScreen" component={SecondScreen} />
                <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
                <Stack.Screen name="TextInputwithState" component={TextInputwithState} />
                <Stack.Screen name="WebView1" component={WebView1} />
                <Stack.Screen name="StatusBar1" component={StatusBar1} />
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="Screen3" component={Screen3} />
                <Stack.Screen name="image1" component={image1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;
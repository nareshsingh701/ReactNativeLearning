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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;
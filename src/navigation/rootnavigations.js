import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/native'
import Home from '../screens/home';
import FirstScreen from '../naresh/FirstScreen';
import Scroll1 from '../ankush/scroll1';
import ImageMaharajView from '../sugreev/Image2';
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
import Image1 from '../ankush/image1';
import Basicpart1 from '../naresh/Basicpart1';
import Screens1 from '../sugreev/Screens1'
import Screens2 from '../sugreev/Screens2'
import Screens3 from '../sugreev/Screens3';
import BasicLogic1 from '../sugreev/BasicLogic1';
import BasicLogic2 from '../sugreev/BasicLogic2';
import Viewraj from '../sugreev/Viewraj';
import ViewAnkush from '../ankush/ViewAnkush';
import ViewNaresh from '../naresh/ViewNaresh';
import LearningUI from '../screens/learningUI/learningUI';
import Viewraj2 from '../sugreev/Viewraj2';
import Viewstyle from '../ankush/Viewstyle'
import Naresh2 from '../naresh/Naresh2';
import Naresh3 from '../naresh/Naresh3';
import Viewraj3 from '../sugreev/Viewraj3';
import Viewankush1 from '../ankush/Viewankush1';
import Login from '../screens/login/login';
import LoginClassComponent from '../screens/login/loginClassComponent';
import Nareshlogin from '../naresh/Nareshlogin';
import NareshloginSecond from '../naresh/NareshloginSecond';
import NETFLIX from '../ankush/NETFLIX';
import Viewraj4 from '../sugreev/Viewraj4';



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
                <Stack.Screen name="Image1" component={Image1} />
                <Stack.Screen name="Basicpart1" component={Basicpart1} />
                <Stack.Screen name="Screens1" component={Screens1} />
                <Stack.Screen name="Screens2" component={Screens2} />
                <Stack.Screen name="Screens3" component={Screens3} />
                <Stack.Screen name="BasicLogic1" component={BasicLogic1} />
                <Stack.Screen name="BasicLogic2" component={BasicLogic2} />
                <Stack.Screen name="Viewraj" component={Viewraj} />
                <Stack.Screen name="ViewAnkush" component={ViewAnkush} />
                <Stack.Screen name="ViewNaresh" component={ViewNaresh} />
                <Stack.Screen name="LearningUI" component={LearningUI} />
                <Stack.Screen name="Viewraj2" component={Viewraj2} />
                <Stack.Screen name="Viewstyle" component={Viewstyle} />
                <Stack.Screen name="Naresh2" component={Naresh2} />
                <Stack.Screen name="Naresh3" component={Naresh3} />
                <Stack.Screen name="Viewraj3" component={Viewraj3} />
                <Stack.Screen name="Viewankush1" component={Viewankush1} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="LoginClassComponent" component={LoginClassComponent} />
                <Stack.Screen name="Nareshlogin" component={Nareshlogin} />
                <Stack.Screen name="NETFLIX" component={NETFLIX} />
                <Stack.Screen name="NareshloginSecond" component={NareshloginSecond} />
                <Stack.Screen name="Viewraj4" component={Viewraj4} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './component/screen/Home';
import SignIn from './component/screen/SignIn';
import SignUp from './component/screen/SignUp';
import Resident_Home from './component/screen/Resident_Home';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
              <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
              <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
              <Stack.Screen name='Resident_Home' component={Resident_Home} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}



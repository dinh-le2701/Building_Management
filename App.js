import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './component/screen/Welcome';
import SignIn from './component/screen/SignIn';
import Home from './component/screen/Home';
import Account from './component/screen/Account';
import Payment from './component/screen/Payment';
import Notification from './component/screen/Notification';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}}/>
              <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
              <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
              <Stack.Screen name = 'Account' component={Account} options={{headerShown: false}}/>
              <Stack.Screen name = 'Payment' component={Payment} options={{headerShown: false}}/>
              <Stack.Screen name = 'Notification' component={Notification} options={{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
  );
}



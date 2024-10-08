import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './component/screen/SignIn';
import Home from './component/screen/Home';
import Account from './component/screen/Account';
import Payment from './component/screen/Payment';
import Notification from './component/screen/Notification';
import Invoice from './component/screen/Invoice';
import Contract from './component/screen/Contract';
import Rules from './component/screen/Rules';
import Reports from './component/screen/Reports';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/> 
              <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
              <Stack.Screen name = 'Account' component={Account} options={{headerShown: false}}/>
              <Stack.Screen name = 'Payment' component={Payment} options={{headerShown: false}}/> 
              <Stack.Screen name = 'Notification' component={Notification} options={{headerShown: false}}/>
              <Stack.Screen name = 'Invoice' component={Invoice} options={{headerShown: false}}/>
              <Stack.Screen name = 'Contract' component={Contract} options={{headerShown: false}}/>
              <Stack.Screen name = 'Rules' component={Rules} options={{headerShown: false}}/>
              <Stack.Screen name = 'Reports' component={Reports} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}



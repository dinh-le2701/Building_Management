import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './component/screen/SignIn';
import Home from './component/screen/Home';
import Infomation from './component/screen/Infomation';
import Payment from './component/screen/Payment';
import Notification from './component/screen/Notification';
import Invoice from './component/screen/Invoice';
import Contract from './component/screen/Contract';
import Rules from './component/screen/Rules';
import Report from './component/screen/Report';
import SaleContract from './component/screen/SaleContract';
import Acount from './component/screen/Acount';
import InvoiceDetail from './component/screen/InvoiceDetail';
import CreateReport from './component/screen/CreateReport';
import Apartment from './component/screen/Apartment';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              {/* <Stack.Screen name= 'SignIn' component={SignIn} options={{headerShown: false}}/>  */}

              <Stack.Screen name= 'Home' component={Home} options={{headerShown: false}}/>
              <Stack.Screen name = 'Infomation' component={Infomation} options={{headerShown: false}}/>
              <Stack.Screen name = 'Payment' component={Payment} options={{headerShown: false}}/> 
              <Stack.Screen name = 'Notification' component={Notification} options={{headerShown: false}}/>
              <Stack.Screen name = 'Invoice' component={Invoice} options={{headerShown: false}}/>
              <Stack.Screen name = 'Contract' component={Contract} options={{headerShown: false}}/>
              <Stack.Screen name = 'SaleContract' component={SaleContract} options={{headerShown: false}}/>
              <Stack.Screen name = 'Rules' component={Rules} options={{headerShown: false}}/>
              <Stack.Screen name = 'Report' component={Report} options={{headerShown: false}}/>
              <Stack.Screen name = 'Acount' component={Acount} options={{headerShown: false}}/> 
              <Stack.Screen name = 'InvoiceDetail' component={InvoiceDetail} options={{headerShown: false}}/> 
              <Stack.Screen name = 'CreateReport' component={CreateReport} options={{headerShown: false}}/>
              <Stack.Screen name = 'Apartment' component={Apartment} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}



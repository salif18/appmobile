import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ButtomTab from '../screens/ButtomTabs/ButtomTab';
import MessageDetail from '../screens/MessagesDetails/MessageDetail';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:true,color:'rgb(0,210,250'}} >
      <Stack.Screen name='Devblog'  component={ButtomTab}  />
      <Stack.Screen name='messageDetails' component={MessageDetail} options={{headerShown:true}} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
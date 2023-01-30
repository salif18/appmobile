import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ButtomTab from '../screens/ButtomTabs/ButtomTab';
import MessageDetail from '../screens/MessagesDetails/MessageDetail';
import Login from '../screens/Login/Login';
import Html from '../screens/Cours/Cours';


const Stack = createNativeStackNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='home'  screenOptions={{headerShown:true}}>
      <Stack.Screen name='home' options={{title:'DevBlog'}}  component={ButtomTab}  />
      <Stack.Screen name='messageDetails' component={MessageDetail} options={{headerShown:true}} />
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='Html' component={Html} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
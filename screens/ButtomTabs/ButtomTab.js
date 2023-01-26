import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home/Home';
import Messages from '../Messages/Messages';
import Profile from '../Profiles/Profile';

const Tab =  createMaterialBottomTabNavigator()

const ButtomTab=()=>{
    return (
        <Tab.Navigator
          initialRouteName="home"
          activeColor="#3345"
          
          barStyle={{ backgroundColor: 'rgb(0, 210, 255)',height:80}}
        >
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color={'#f7f7f7'} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="messages"
            component={Messages}
            options={{
              tabBarLabel: 'Messages',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="message" color={'#f7f7f7'} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="account" color={'#f7f7f7'} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default ButtomTab
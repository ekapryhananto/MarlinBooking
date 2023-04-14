import React from 'react';
import Home from './src/pages/Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ImplementasiLibrary from './src/pages/ImplementasiLibrary';

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Implementasi') {
            iconName = focused ? 'ios-albums' : 'ios-albums-outline';
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Implementasi" component={ImplementasiLibrary} />
    </Tab.Navigator>
  );
};

export default BottomNav;

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../screens/Main';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNavigator>
      <Drawer.Screen name="Main" component={Main} />
    </DrawerNavigator>
  );
};

export default DrawerNavigator;

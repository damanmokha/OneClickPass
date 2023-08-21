import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from '../navigation/DrawerNavigator';
import Main from './Main';

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>He</Text> */}
      <DrawerNavigator>
        <Drawer.Screen name="Main" component={Main} />
      </DrawerNavigator>
    </View>
  );
};

export default Home;

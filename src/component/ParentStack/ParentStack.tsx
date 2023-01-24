import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ParentRegister from '../ParentRegister';
import MapsContainer from '../home/MapsContainer';

export const ParentStack = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='LeaveName' component={ParentRegister} />
        <Stack.Screen name='MapContainer' component={MapsContainer} />
    </Stack.Navigator>
  );
};

export default ParentStack;

const styles = StyleSheet.create({
  container: {}
});

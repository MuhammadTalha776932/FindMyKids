import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ParentRegister from '../ParentRegister';
import MapsContainer from '../home/MapsContainer';

export const ParentStack = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={({ navigation, route }) => ({ header: () => null })}>
      <Stack.Screen name='LeaveName' component={ParentRegister} />
      <Stack.Screen name='MapContainer' component={MapsContainer} />
    </Stack.Navigator>
  );
};

export default ParentStack;

const styles = StyleSheet.create({
  container: {}
});

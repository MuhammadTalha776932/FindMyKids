import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ChildInfo from '../CS_launch_Page/ChildInfo';
import PushGeoLocation from '../CS_launch_Page/PushGeoLocation';

export const ChildStack = ():JSX.Element => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={({ navigation, route }) => ({ header: () => null })}>
        <Stack.Screen name='Child-Details' component={ChildInfo} />
        <Stack.Screen name='GeoLocation' component={PushGeoLocation} />
    </Stack.Navigator>
  );
};

export default ChildStack;

const styles = StyleSheet.create({
  container: {}
});

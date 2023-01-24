import React,{useEffect} from "react";
import {View} from "react-native";
import SplashScreen from "react-native-splash-screen";
// import ParentRegister from "./component/ParentRegister";
import { NavigationContainer } from "@react-navigation/native";
import MapsContainer from "./src/component/home/MapsContainer" ;
import { createStackNavigator} from "@react-navigation/stack";
import {ChooseDevicesScreen} from "./src/component/ChooseDevices/ChooseDevicesScreen"

import ParentRegister from "./src/component/ParentRegister";

function App(){

  const Stack = createStackNavigator();

  useEffect(()=>{
    const unSplashScreen:void = SplashScreen.hide();
    return ()=> unSplashScreen
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="chooseDevices" screenOptions={({navigation,route})=>({header:()=>null})}>
        <Stack.Screen name="chooseDevices" component={ChooseDevicesScreen}/>
        <Stack.Screen  name="LeaveName" component={ParentRegister} />
        <Stack.Screen name="MapContainer" component={MapsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* <View style={{flex:1}}>
  <MapsContainer/>
</View> */}



export default App;

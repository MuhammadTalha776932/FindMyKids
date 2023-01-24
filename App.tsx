import React,{useEffect} from "react";
import {View} from "react-native";
import SplashScreen from "react-native-splash-screen";
// import ParentRegister from "./component/ParentRegister";
import { NavigationContainer } from "@react-navigation/native";
import MapsContainer from "./src/component/home/MapsContainer" ;
import { createStackNavigator } from "@react-navigation/stack";
import {ChooseDevicesScreen} from "./src/component/ChooseDevices/ChooseDevicesScreen"


function App(){

  const Stack = createStackNavigator();

  useEffect(()=>{
    const unSplashScreen:void = SplashScreen.hide();
    return ()=> unSplashScreen
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="chooseDevices" component={ChooseDevicesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* <View style={{flex:1}}>
  <MapsContainer/>
</View> */}



export default App;

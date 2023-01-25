import React,{useEffect} from "react";
import {View} from "react-native";
import SplashScreen from "react-native-splash-screen";
// import ParentRegister from "./component/ParentRegister";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import {ChooseDevicesScreen} from "./src/component/ChooseDevices/ChooseDevicesScreen"
import {ParentStack} from "./src/component/ParentDevice/ParentStack/ParentStack"
import {ChildStack} from "./src/component/ChildDevice/ChildStack/ChildStack"


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
        <Stack.Screen name="Parent" component={ParentStack}/>
        <Stack.Screen name="Child" component={ChildStack}/>
        {/* <Stack.Screen  name="LeaveName" component={ParentRegister} />
        <Stack.Screen name="MapContainer" component={MapsContainer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* <View style={{flex:1}}>
  <MapsContainer/>
</View> */}



export default App;

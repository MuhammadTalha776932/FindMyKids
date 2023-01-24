import React,{useEffect} from "react";
import {View} from "react-native";
import SplashScreen from "react-native-splash-screen";
// import ParentRegister from "./component/ParentRegister";
import { NavigationContainer } from "@react-navigation/native";
import MapsContainer from "./src/component/home/MapsContainer" ;

function App(){

  

  useEffect(()=>{
    const unSplashScreen:void = SplashScreen.hide();
    return ()=> unSplashScreen
  },[])

  return (
    <NavigationContainer>
      <View style={{flex:1}}>
        <MapsContainer/>
      </View>
    </NavigationContainer>
  );
}



export default App;

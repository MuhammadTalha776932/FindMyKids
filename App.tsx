import React,{useEffect} from "react";
import SplashScreen from "react-native-splash-screen";
import {SafeAreaView,View} from "react-native";
import ParentRegister from "./component/ParentRegister";


function App(){
  useEffect(()=>{
    
    const unSplashScreen:void = SplashScreen.hide();
    return ()=> unSplashScreen
  },[])

  return (
    <SafeAreaView>
        <ParentRegister/>
    </SafeAreaView>
  );
}



export default App;

import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  SafeAreaView,

} from 'react-native';
import LaunchPage from './component/index';



function App():JSX.Element{

  React.useEffect(()=>{
    
    const unSplashScreen:void = SplashScreen.hide();
    return ()=> unSplashScreen
  },[])

  return (
    <SafeAreaView>
      <LaunchPage/>
    </SafeAreaView>
  );
}



export default App;

import React,{useEffect} from "react";
import SplashScreen from "react-native-splash-screen";
import {SafeAreaView,View,StyleSheet} from "react-native";
// import ParentRegister from "./component/ParentRegister";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "./APIs_Keys";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

function App(){

  const [state,setState] = React.useState({
    initCords:{
      latitude: 30.7046,
      longitude: 76.7179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    finalCords:{
      latitude: 30.7333,
      longitude: 76.8188,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  })

  const {initCords,finalCords} = state;

  useEffect(()=>{
    
    const unSplashScreen:void = SplashScreen.hide();
    return ()=> unSplashScreen
  },[])

  return (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{      
        latitude: 30.7046,
        longitude: 76.7179,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}

    >
    <MapViewDirections
    origin={initCords}
    destination={finalCords}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="hotpink"
  />
    </MapView>
  </View>
  );
}



export default App;

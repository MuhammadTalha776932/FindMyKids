import React, { useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "../../../APIs_Keys";
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

const MapsContainer = (): JSX.Element => {

  const [state, setState] = React.useState({
    initCords: {
      latitude: 30.7046,
      longitude: 76.7179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    finalCords: {
      latitude: 30.7333,
      longitude: 76.8188,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  })

  const mapsRef = useRef<MapView>(null);
  const { initCords, finalCords } = state;


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <MapView
          ref={mapsRef}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={initCords}
        >
          <Marker title="Start" description="Starting Points" coordinate={initCords} />
          <Marker title="Destinations" description="Finishing Points" coordinate={finalCords} />
          <MapViewDirections
            origin={initCords}
            destination={finalCords}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onReady={result => {
              mapsRef?.current?.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  top: 300,
                  left: 30,
                  bottom: 100
                }
              });
            }}
          />
        </MapView>
      </View>
      <View style={{ flexDirection: "column", width: "100%", backgroundColor: "white" }}>
        <Text style={{ padding: 30, alignSelf: "center", textAlign: "center" }}>Click Here to Enter Destinations</Text>
      </View>
    </View>
  );
}



export default MapsContainer;
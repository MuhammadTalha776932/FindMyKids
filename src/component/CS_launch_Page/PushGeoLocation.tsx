import * as React from 'react';
import Geolocation,{GeoCoordinates} from 'react-native-geolocation-service';
import { Text, View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';

export const PushGeoLocation = () => {

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app needs access to your location ' +
            'so we can show your current location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const [locations, setLocations] = React.useState({

  } as GeoCoordinates)

  const getGeoLocation = async () => {
    try {
      requestLocationPermission();
      Geolocation.getCurrentPosition(
        position => {
          const { coords } = position;

          setLocations({ ...locations,
            longitude: coords.latitude,
            latitude: coords.latitude,
            accuracy: coords.accuracy,
            altitude: coords.altitude,
            heading: coords.heading,
            speed: coords.speed,
            altitudeAccuracy: coords.altitudeAccuracy
          })
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch ({ message }) {
      console.log(message);
    }
  }

  React.useEffect(() => {
    const unsub = getGeoLocation()
    return () => {
      unsub
    }

  }, [])
  return (
    <View style={styles.container}>
      <Text> Current Latitude {locations?.latitude}</Text>
      <Text> Current Longitude {locations?.longitude}</Text>
    </View>
  );
};

export default PushGeoLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

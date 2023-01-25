import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';


export const ChooseDevicesScreen = ():JSX.Element => {
  const navigation = useNavigation();

  const handleParentNavigation = () =>{
    navigation.navigate( "Parent" as never);
  }

  const handleChildNavigation = () =>{
    navigation.navigate("Child" as never);
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Choose the Devices to Step Up</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleParentNavigation}>
          <Text style={styles.buttonText}>Parent Device</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleChildNavigation}>
          <Text style={styles.buttonText}>Child Device</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#2980b9',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  textContainer: {
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ChooseDevicesScreen;

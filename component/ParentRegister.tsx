import React,{useState} from 'react';
import {Text,View,Image, TextInput,SafeAreaView,ScrollView} from 'react-native';
const ImageJPG = require("../src/images/image.jpg");

const ParentRegister = ():JSX.Element=>{
  const [email,setEmail] = useState('');
  return (
  <>
    <SafeAreaView>
    <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={ImageJPG}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Leave your email Here</Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    {/* <Icon name="mail" color="#00716F" size={24}/> */}
                    <TextInput 
                        placeholder="Enter the emails"
                        onChangeText={setEmail}
                        value={email}
                        style={{paddingHorizontal:10}}
                        placeholderTextColor={"gray"}
                    />
                </View>
                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }} onPress={()=>{
                      
                    }}>Already a member</Text>
                </View>
            </View>
    </SafeAreaView>
  </>
  );
};


export default ParentRegister;
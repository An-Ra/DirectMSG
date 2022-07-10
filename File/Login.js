import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert,Image } from "react-native";
import {auth} from './References';

export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const submit=()=>{
      if(email =="" || password=="" ){
        Alert.alert("email dan password harus diisi!")
      }
      else{
        auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login berhasil")
        navigation.navigate("MyDrawer")
      })
      .catch(()=>{
        console.log("Register gagal")
      })
    }
  }
    const regis=()=>{
        navigation.navigate('Registrasi');
    };

    return (
      <View style={styles.container}>
      <View style={styles.posTitle1}>
          <Image
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Log In</Text>
        </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="white"
                  color="white"
                  onChangeText={(value)=>setEmail(value)}
                  value={email} 
                />
            </View>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  onChangeText={(value)=>setPassword(value)}
                  value={password} 
                />
            </View> 
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>submit()}
                >
                  <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.posButton1}>
                <Text style={styles.textRegis}>Don't have an account yet? </Text>
                <TouchableOpacity
                  onPress={()=>regis()}
                ><Text style={styles.textRegis1}>Register</Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 40
    },
    posTitle:{
      alignItems: 'center'
    },
    posTitle1:{
      alignItems: 'center',
      margin : 20
    },
    title:{
      fontSize : 18,
      fontWeight : 'bold',
      color: '#0066ff'
    },
    contInput:{
      backgroundColor:'#0066ff',
      margin: 20,
      padding: 15,
      borderRadius: 15
    },
    posInput:{
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 10,
      paddingLeft : 10,
      paddingRight: 10,
      backgroundColor:'#0066ff'
    },
    input:{
      height : 30,
      borderBottomWidth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color:"white"
    },
    posButton:{
      margin: 20,
      alignItems:'center',
    },
    posButton1:{
      marginLeft: 20,
      marginRight: 20,
      justifyContent:'center',
      flexDirection: 'row'
    },
    button:{
      borderRadius: 5,
      width: 180,
      height: 30,
      alignItems:'center',
      backgroundColor : '#ccffff', 
      justifyContent : 'center'
    },
    textButton:{
      fontWeight: 'bold',
      color: '#0066ff'
    },
    textRegis:{
      color:'white',
    },
    textRegis1:{
      color:'white',
      fontWeight:'bold'
    }
});

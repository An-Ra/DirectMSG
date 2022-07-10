import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from "react-native";
import {auth} from './References'; 

export default function Regis({navigation, Route}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log(email, password)
    
      auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Register berhasil")
        navigation.navigate("LoginScreen")
      })
      .catch(()=>{
        console.log("Register gagal")
      })
  }
    return (
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Registration</Text>
        </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="white"
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
                  onPress={()=>handleSignUp()}
                >
                  <Text style={styles.textButton}>Register</Text>
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
      color: "white"
    },
    posButton:{
      margin: 20,
      alignItems:'center',
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
    }
});

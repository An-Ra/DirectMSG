import React ,{useState,useEffect} from "react";
import { View, Text, StyleSheet, Image,Button,TextInput,Linking,TouchableOpacity } from "react-native";
import {dataRef} from './References';

export default function Biodata({navigation, route}){
const [phoneName, setPhoneName] = useState(""); 
const [phoneCode, setPhoneCode] = useState(""); 
const [phoneNumber, setPhoneNumber] = useState(""); 
const [phoneText, setPhoneText] = useState(""); 
console.log(phoneName);
console.log(phoneCode);
console.log(phoneNumber);
console.log(phoneText);
function sendWAMessage(){
    let newData={
        phoneName: phoneName,
        phoneCode: phoneCode,
        phoneNumber: phoneNumber,
        phoneText:phoneText

   };
   const ref = dataRef.push(newData);
   const key = ref.key;
   dataRef.child(key).update({'key': key})
   navigation.navigate('Portofolio')
  Linking.openURL(`https://wa.me/${phoneCode}${phoneNumber}?text=${phoneText}`);
} 
    return(
      <View style={styles.container}>
        <View style={styles.header}>
        <TextInput
        style={{
            borderWidth: 2,
            borderRadius:5,
            borderColor: 'grey',
            margin: 10,
            height: 50,
            paddingLeft: 10
          }}
          value={phoneName}
          placeholder="Nama Kontak"
          placeholderTextColor="steelblue"
          onChangeText={(phoneName) => setPhoneName(phoneName)}
        />
        <TextInput
        style={{
            borderWidth: 2,
            borderRadius:5,
            borderColor: 'grey',
            margin: 10,
            height: 50,
            paddingLeft: 10
          }}
          value={phoneCode}
          placeholder="Kode Negara"
          placeholderTextColor="steelblue"
          onChangeText={(phoneCode) => setPhoneCode(phoneCode)}
        />
          <TextInput
          value={phoneNumber}
          style={{
            borderWidth: 2,
            borderRadius:5,
            borderColor: 'grey',
            margin: 10,
            height: 50,
            paddingLeft: 10
          }}
          placeholder="Nomor Telephone (tanpa awalan'0')"
          placeholderTextColor="steelblue"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
          <TextInput
          value={phoneText}
          style={{
            borderWidth: 2,
            borderRadius:5,
            borderColor: 'grey',
            margin: 10,
            height: 75,
            paddingLeft: 10
          }}
          placeholder="Pesan"
          placeholderTextColor="steelblue"
          onChangeText={(phoneText) => setPhoneText(phoneText)}
        />

            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>sendWAMessage()}>
                  <Text style={styles.textButton}>Kirim Pesan</Text>
                </TouchableOpacity>
            </View>
              </View>
		    </View>
    )
  }

const styles = StyleSheet.create({
	container:{
		flex:1,
        backgroundColor: 'white',
        flexDirection:'column'
	},
    header:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    }, 
    posButton:{
        margin: 20,
        alignItems:'center',
      },
      button:{
        borderRadius: 5,
        width: 200,
        height: 50,
        alignItems:'center',
        backgroundColor : '#ccffff', 
        justifyContent : 'center'
      },
      textButton:{
        fontWeight: 'bold',
        color: '#0066ff'
      }

})
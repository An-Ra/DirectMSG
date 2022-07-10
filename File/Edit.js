import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity, StyleSheet,Alert } from "react-native";
import {dataRef} from './References';

export default function Edit({navigation, route}){
    const {key, phoneName, phoneNumber} = route.params;
    const [keyUbah, setKey] = useState(key);
    const [newPhoneName, setNewPhoneName] = useState(phoneName);
    const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);

   const ubahData = (keyUbah) => {
        dataRef.child(keyUbah).update({'phoneName':newPhoneName ,
                                       'phoneNumber' : newPhoneNumber});                            
        navigation.navigate('Portofolio');
        alert('Data Berhasil di Ubah');
    };

    const hapusData = (keyUbah) =>{
        dataRef.child(key).remove();
        navigation.navigate('Portofolio');
        alert('Data Berhasil di Hapus');
     };

    return (
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Ubah Data</Text>
        </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholderTextColor="#ffffff"
                  onChangeText={(value)=>setNewPhoneName(value)}
                  value={newPhoneName}
                />
            </View>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholderTextColor="#ffffff"
                  onChangeText={(value)=>setNewPhoneName(value)}
                  value={newPhoneNumber}
                />
            </View>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>ubahData(keyUbah)}
                >
                  <Text style={styles.textButton}>Ubah</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonView1}>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>hapusData(keyUbah)}
                >
                  <Text style={styles.textButton}>Hapus</Text>
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
      color:'#0066ff'
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
      backgroundColor: '#0066ff'
    },
    posButton:{
      margin: 20,
      alignItems:'center'
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
    buttonView1:{
        marginLeft:20,
        marginRight:20
    },
});

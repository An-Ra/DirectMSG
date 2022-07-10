import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity, StyleSheet } from "react-native";
import {dataRef} from './References';

export default function Form({navigation, route}){
    const [skill, setSkill] = useState("Belum Terisi");
    const [level, setLevel] = useState("Belum Terisi");

  const submit = () => {
         let newData={
             skill: skill,
             level: level
        };
        const ref = dataRef.push(newData);
        const key = ref.key;
        dataRef.child(key).update({'key': key})
        navigation.navigate('Portofolio')
    };

    return (
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Tambah Portofolio</Text>
        </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Masukkan skill"
                  placeholderTextColor="#ffffff"
                  onChangeText={(value)=>setSkill(value)}
                  value={skill}
                />
            </View>
            <View style={styles.posInput}>
                 <Picker
                  selectedValue={level}
                  onValueChange={(itemValue, itemIndex) =>setLevel(itemValue)}
                  style={{height:28, placeholderTextColor:"white"}}
                >
                  <Picker.Item label="Level" value="Belum Terisi" />
                  <Picker.Item label="Beginer" value="Beginer" />
                  <Picker.Item label="Middle" value="Middle" />
                  <Picker.Item label="Advance" value="Advance" />
                </Picker>
            </View>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>submit()}
                >
                  <Text style={styles.textButton}>Tambah</Text>
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
    }
});

import React, {useState,useEffect} from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity,Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {dataRef} from './References';

export default function Data({navigation, route}){
  const [dskill, setDskill] = useState([]);
  const [key, setKey] = useState("");
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");

  useEffect(()=> {
        const dataFocus = navigation.addListener('focus', ()=>{
        const listener = dataRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let dskill = Object.values(data);
          setDskill(dskill);
          })})})
    const sendData=(item) => {
        navigation.navigate('MyStack',{
            screen:'Edit',
            params: { key:item.key,
                      phoneName:item.phoneName,
                      phoneNumber:item.phoneNumber}
        })
      }
    
    return(
      <ScrollView>
       <View style={styles.container}>
        
          <View style={styles.posTitle}>
            <Text style={styles.title}>History Pesan Terkirim</Text>
          </View>
          <View style={styles.contFlat}>
            <FlatList
                data={dskill}
                keyExtractor={(item)=>item.key}
                renderItem={({item})=>{
                    return(
                         
                            <View style={styles.contData1}>
                                <View style = {styles.contentTitle1}>
                                    <Text style = {styles.textContentTitle1}> {item.phoneName} </Text>
                                </View>
                                <View style = {styles.contentTitle1}>
                                    <Text style = {styles.textContentTitle1}> 0{item.phoneNumber}
                                    </Text>
                                </View> 
                                
                                <View style = {styles.contentTitle2}>
                                <TouchableOpacity
                            onPress={()=>sendData(item)}> 
                                    <Text style = {styles.textContentTitle2}> Ubah
                                    </Text>
                                    </TouchableOpacity>
                                <TouchableOpacity
                            onPress={()=> {Linking.openURL(`https://wa.me/62${item.phoneNumber}`);}}> 
                                    <Text style = {styles.textContentTitle3}> Kirim
                                    </Text>
                                    </TouchableOpacity>
                                </View> 
                               
                            </View>
                    
                    )
                }}
                />
            </View>
            
      </View>
      </ScrollView>
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
      fontSize : 20,
      marginBottom:20,
      fontWeight : 'bold',
      color: '#0066ff'
    },
    contFlat:{
      paddingTop : 15,
      marginLeft:20,
      marginRight:20,
    },
    contData1:{
      flexDirection:'coloum',
      justifyContent:'space-around',
      marginBottom :10,
      borderWidth: 2,
      borderRadius:5,
      borderColor: 'grey',
      backgroundColor:'lightgrey'
    },
    contentTitle:{
        marginTop:5,
    },
    contentTitle1:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
    },
    contentTitle2:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:5,
    },
    textContentTitle:{
        fontWeight:'bold',
        color: 'white',
        fontSize:15
    },
    textContentTitle1:{
        fontWeight:'bold',
        fontSize:15
    },
    textContentTitle2:{
        fontWeight:'bold',
        color:'red',
        fontSize:15
    },
    textContentTitle3:{
        fontWeight:'bold',
        color:'green',
        fontSize:15
    }
});

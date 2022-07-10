import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from '../File/Login';
import Biodata from '../File/Biodata';
import Form from '../File/Form';
import Data from '../File/Data';
import About from '../File/About';
import Edit from '../File/Edit';
import Regis from '../File/Regis';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="LoginScreen" component={Login}/>
                <Stack.Screen name="Registrasi" component={Regis} options={{headerShown: true, title:"Kembali"}}/> */}
                <Stack.Screen name="MyDrawer" component={MyDrawer}/>
                <Stack.Screen name="MyTab" component={MyTab}/>
                <Stack.Screen name="MyStack" component={MyStack} options={{ title:'Kembali', headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const MyTab=()=>{
    return(
        <Tab.Navigator
           screenOptions={{
            activeTintColor:'#2991FF',
            inactiveTintColor: 'black',
            activeBackgroundColor: '#ccffff',
            labelStyle:{fontSize:13, marginBottom:10},
            style:{
                backgroundColor: 'black',
                height:40
            },
            headerShown: false
            }}
        >
            <Tab.Screen name="Biodata" component={Biodata}
              options={{
                tabBarLabel: 'Biodata',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account-circle" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="Portofolio" component={Data}
              options={{
                tabBarLabel: 'Portofolio',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="book-open" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="Isi Portofolio" component={Form}
               options={{
                tabBarLabel: 'Isi Portofolio',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="border-color" color={color} size={size} />
                ),
              }}
            />
        </Tab.Navigator>
    )
    }

const MyDrawer=()=>(
        <Drawer.Navigator>
            <Drawer.Screen name="Direct Message" component={MyTab} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
)

const MyStack=()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name='Edit' component={Edit} options={{ headerShown: false }}/>
  </Stack.Navigator>
    )
}
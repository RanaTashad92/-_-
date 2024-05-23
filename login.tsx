import React from 'react'
import{View,Text,Pressable,Image,SafeAreaView,ScrollView,TextInput,StyleSheet,Button,Alert} from 'react-native'
import { useState } from 'react'


const Login=({navigation})=>{
    const[email,onChangeEmail]=React.useState();
    const[message,setMessage]=useState('');
    const handlePress=()=>
    {
        Alert.alert('Thanks for subscribing, stay tuned!');
    }

    return(
       
        <ScrollView style={{flex:1,backgroundColor:'#ADD8E6'}}>
         <Image 
         source={require("../Images/college.png")}
         style={{resizeMode:'contain',width:300,height:200,alignSelf:"center",}}/>
         <Text style={{fontSize:22,color:'black',textAlign:'center',fontWeight:'700'}}>Write your Roll Number</Text>
         <TextInput 
         value={email}
         onChangeText={onChangeEmail=>onChangeEmail}
         placeholder='Type your roll number'
         keyboardType='numeric'
         style={{borderWidth:4,backgroundColor:'white',color:'black',marginTop:25,width:350,alignSelf:"center",borderRadius:10,fontSize:18,textAlign:'center'}}/>
         <SafeAreaView style={{flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',}}>
         <Pressable  onPress={() => navigation.navigate('DrawerNavigator') }>
            <Text style={{borderWidth:4, width:250,borderRadius:17,color:'white',backgroundColor:'#333333',textAlign:'center',fontSize:25,marginTop:25,alignSelf:'center'}}>Login</Text>

         </Pressable>
         
         </SafeAreaView>
       
         
         <Text style={{fontSize:22,color:'#000000',textAlign:'center',fontWeight:'bold',backgroundColor:'#FFAC1C',marginTop:295}}>  Shadman 1 Shadman, Lahore, Punjab </Text>

        </ScrollView>
    )
}
export default Login;

import react from 'react'
import{View,Text,Pressable,Image,StyleSheet,ImageBackground} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './login'
const Welcome=({navigation})=>{
    return(
        <View style={{flex:1,backgroundColor:'#FFAC1C'}}>
           <ImageBackground 
           source={require('../Images/college.png')}
           resizeMode='contain'
           style={{flex:1,justifyContent:'center' ,}}
           imageStyle={{opacity:0.3,backgroundColor: 'rgba(0,0,0,0)',height:500}}>
           
            <Text style={{fontSize:28, justifyContent:'center', fontWeight:'bold', textAlign:'center',color:'#000000 '}}>Welcome to Crescent College Shadman!</Text>
            <Pressable onPress={()=> navigation.navigate("Login")}>
<Text style={{borderWidth:3,backgroundColor:'#333333',width:250,textAlign:'center',alignSelf:'center',color:'white',fontSize:27,borderRadius:25,marginTop:200}}>Continue</Text>
            </Pressable>
            </ImageBackground>
            <Text style={{fontSize:22,color:'#000000',textAlign:'center',alignSelf:'center',fontWeight:'bold',backgroundColor:'#FFAC1C'}}>  Shadman 1 Shadman, Lahore, Punjab </Text>
            
           
            
        </View>
    )
}
export default Welcome;

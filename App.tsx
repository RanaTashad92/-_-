import react from 'react'
import{View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import{createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Welcome from './components/welcome'
import Login from './components/login'
import Events from './components/events'
import Contactus from './components/contactus'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator  initialRouteName='Welcome' screenOptions={{headerTitleAlign:'center',headerStyle:{backgroundColor:'#0096FF'}}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Events" screenOptions={{}}>
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name='Contact Us' component={Contactus} />
     
    </Drawer.Navigator>
  );
};

const myApp=()=>
  {
   
    return(
      <View style={{flex:1}}>
      
      <NavigationContainer>
      <StackNavigator />
     
        </NavigationContainer>

  
     
      </View>
    )
  }
  export default myApp;
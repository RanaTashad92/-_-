import React from 'react';
import { View, Text, Image, StyleSheet, SectionList, ScrollView, } from 'react-native';
const Contactus = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../Images/college.png')}
                style={styles.image}
            />
            <Text style={{fontSize:28,color:'black',textAlign:'center',fontWeight:'bold'}}>Contact us at:</Text>
            <Text style={{fontSize:28,color:'black',textAlign:'center',fontWeight:'bold'}}>BOYS CAMPUS</Text>
        <Text style={{fontSize:22,color:'black',textAlign:'center',marginTop:10,}}>Phone: (042) 37421367</Text>
        <Text style={{fontSize:22,color:'black',textAlign:'center',marginTop:10,}}>Email: info@crescentschool.edu.pk</Text>
        <Text style={{fontSize:28,color:'black',textAlign:'center',fontWeight:'bold',marginTop:10}}>Girls Campus</Text>
        <Text style={{fontSize:22,color:'black',textAlign:'center',marginTop:10,}}>Phone: (042) 3596 0725-26</Text>
        <Text style={{fontSize:22,color:'black',textAlign:'center',marginTop:10,}}>Email: info@crescentschool.edu.pk</Text>
        </View>
    )
}
export default Contactus;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        padding: 20,
    },
    image: {
        resizeMode: 'contain',
        width: 300,
        height: 200,
        alignSelf: 'center',
    },
})
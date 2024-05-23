import React from 'react';
import { View, Text, Image, StyleSheet, SectionList ,ScrollView,Pressable} from 'react-native';

const Events = ({navigation}) => {
    const sections = [
        {
            title: 'Cricket',
            data: [
                'Cricket Match - 10:00 AM',
                'Cricket Practice - 4:00 PM',
            ],
        },
        {
            title: 'Football',
            data: [
                'Football Tournament - 12:00 PM',
                'Football Practice - 6:00 PM',
            ],
        },
        {
            title: 'Hockey',
            data: [
                'Hockey Game - 2:00 PM',
            ],
        },
    ];

    return (
        <View style={styles.container}>
            <Image
                source={require('../Images/college.png')}
                style={styles.image}
            />
            <Text style={styles.greeting}>Hello Dear Student!</Text>
            <Text style={styles.heading}>Upcoming Events</Text>
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={styles.eventItem}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                contentContainerStyle={styles.sectionListContent}
            />
            <Pressable onPress={()=> navigation.goBack("Login")}>
<Text style={{borderWidth:3,backgroundColor:'#333333',width:250,textAlign:'center',alignSelf:'center',color:'white',fontSize:25,borderRadius:25,marginTop:10}}>Logout</Text>
            </Pressable>
        </View>
    );
};

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
    greeting: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
    },
    heading: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionListContent: {
        paddingBottom: 20,
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: 'orange',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 10,
        borderRadius: 5,
        textAlign:'center',color:'black'
    },
    eventItem: {
        fontSize: 20,
        color: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 2,
    },
});

export default Events;

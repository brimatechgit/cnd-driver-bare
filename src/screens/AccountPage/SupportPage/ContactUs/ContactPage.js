import React from 'react';
import { View,Text } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const ContactPage = () => {
    return ( 
        <View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 22, fontWeight: '600', fontWeight: 'bold'}}>Contact Us</Text>
            </View>

            <View style={{padding: 15}}>
                <View style={{width: '85%'}}>
                    <Text style={{fontSize: 18, textAlign:'center'}}>Speak directly with a Clickndeliver representative </Text>
                   
                </View>

                <View style={{flexDirection:'row', paddingVertical: 10, alignItems:'center', justifyContent:'center'}}>
                    <Card style={{elevation: 5, padding: 22, borderRadius: 60, margin: 5}}>
                        <Icon name='call' size={22}></Icon>
                    </Card>
                    <Card style={{elevation: 5, padding: 22, borderRadius: 60, margin: 5}}>
                        <MaterialIcons name='email' size={22}></MaterialIcons>
                    </Card>
                </View>

                <View style={{flexDirection:'row', paddingTop: 15}}>
                    <Icon name='md-chatbubbles' size={25}></Icon>
                    <Text style={{fontWeight:'bold', fontSize:22, paddingHorizontal: 10}}>Live Chat</Text>
                </View>
            </View>
        </View>
     );
}
 
export default ContactPage;
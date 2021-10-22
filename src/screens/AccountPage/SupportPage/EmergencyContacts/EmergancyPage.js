import React from 'react';
import { View,Text, Pressable, Image} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';

const EmergencyPage = () => {
    return ( 
        <View style={{flex:1, padding: 15, alignItems:'center', }}>
            <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../../../assets/image/Emergency.png')} />
                <Text style={{paddingLeft:15,fontSize: 22, fontWeight: '600'}}>Emergency Contacts</Text>
            </View>

            <View>
                <View style={{alignItems:'center', paddingTop: 25}}>
                    <Text style={{fontSize: 18}}>Contact the local authorities</Text>
                    <Text style={{fontSize: 12}}>Share your trip Information with the authority</Text>
                </View>


                <View>
                    <Text style={{fontSize: 12, paddingVertical: 15}}>Trip information:</Text>


                    <View style={{flexDirection:'row'}}>
                        <Card style={{borderRadius: 60, marginHorizontal: 10}}><Icon name='car' size={25} style={{padding:10}}></Icon></Card>
                        <View style={{flexDirection:'row', justifyContent:'space-between', width: '75%', alignItems:'center'}}>
                            <View>
                                <Text>453 Unicon Villy</Text>
                                <Text style={{fontWeight:'bold'}}>Cnd-Bike | SNH 55GP</Text>
                            </View>

                            <Icon name='chevron-forward-outline' size={25}></Icon>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',  marginVertical: 10}}>
                        <Card style={{borderRadius: 60, marginHorizontal: 10, width: 45, height: 45, alignItems: 'center', justifyContent: 'center',}}><Octicons name='primitive-dot' size={25} style={{top:10}} color='teal'></Octicons></Card>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                                <Text>Current Location</Text>
                                <Text style={{fontWeight:'bold'}}>Jetline West</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            

            <View style={{justifyContent:'center', alignItems:'center'}}>


                

                <View style={{justifyContent: 'center',alignItems:'center', width: 300, paddingVertical: 10, elevation:5}}>
                    <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                        <Text style={{color: 'white', fontSize: 20}}>Dial 10111</Text>
                        <Icon name='chevron-forward-outline' size={18} color='white'></Icon>
                    </Pressable>
                </View>
                <View style={{justifyContent: 'center',alignItems:'center', width: 300, paddingVertical: 10, elevation: 45}}>
                    <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                        <Text style={{color: 'white', fontSize: 20}}>Dial 10177</Text>
                        <Icon name='chevron-forward-outline' size={18} color='white'></Icon>
                    </Pressable>
                </View>
            </View>
        </View>
     );
}
 
export default EmergencyPage;
import React from 'react';
import styles from './styles';
import { View, Text, TextInput, ScrollView, Pressable, Image } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';
import DropDownPicker from "react-native-custom-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles';


const ManageVehiclesPage = () => {

    const [text, onChangeText] = React.useState("");
    const [resAdr, onChangeResAdr] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [sname, onChangeSname] = React.useState("");
    const [moNumber, onChangeNumber] = React.useState(null);
    const [IdNumber, onChangeId] = React.useState(null);
    const [checked, setChecked] = React.useState('No');

    

    return ( 
        <View style={{
            overflow: 'hidden', paddingBottom: 5,
            elevation: 5,
            alignItems:'center'
        }}>
            <View style={styles.container}>

            <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
            <Image 
style={{width: 45, height:45, }}
  resizeMode = 'contain'
source={require('../../../../assets/image/ManageVehicle.png')} />
                <Text style={{paddingLeft:15, fontSize: 22, fontWeight: '600'}}>Manage Vehicle</Text>
            </View>
                <View>
                        
                        <View style={{position: 'relative', top: 0, left:0}}>
                                
                                <View style={{justifyContent: 'center', top: 30}}>
                                
                                <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder='Make'
                            
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeSname}
                            value={sname}
                            placeholder='Model'
                            
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder='Year'
                            
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={moNumber}
                            placeholder='License Plate'
                            keyboardType="numeric"
                            
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeResAdr}
                            value={resAdr}
                            placeholder='Colour'
                            
                            
                        />
                    </View>



                                </View>


                       

  
                                
                            </View>                     
                        </View>     
                

                <View style={{paddingTop: 25}}>
                    
                        
                        <View style={{position: 'relative', top: 0, left:0, }}>
                            
                                <View style={{justifyContent: 'center', top: 30}}>
                                
                                
                   

                                    <View style={styles.list}>
                                        <Text style={{fontSize:13}}>Added Vehicles:</Text>
                            
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
                                        <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../../../assets/image/CnDBike.png')} />
                                            <View style={{flexDirection:'row', right: '10%', justifyContent: 'center', alignItems:'center'}}>
                                                <Text style={{fontWeight:'700', fontSize:17, color:'teal', letterSpacing:1.3}}>FGL FF GP</Text>

                                            </View>
                                                <MIcon name='edit' size={25}></MIcon>
                                            
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
                                        <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../../../assets/image/CnDMotor.png')} />
                                            <View style={{flexDirection:'row', right: '10%', justifyContent: 'center', alignItems:'center'}}>
                                               
                                                    <Text style={{fontWeight:'700', fontSize:17, color:'teal', letterSpacing:1.3}}>FGL FF GP</Text>
                                                

                                            </View>
                                                <MIcon name='edit' size={25}></MIcon>
                                            
                                        </View>
                                    
                                    
                                    </View>
                                </View>
                                
                            </View>                     
                        </View>
            <View style={{justifyContent: 'center',alignItems:'center', paddingVertical: 35}}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>Update</Text>
                </Pressable>
            </View>
            </View>
        </View>
     );
}
 
export default ManageVehiclesPage;
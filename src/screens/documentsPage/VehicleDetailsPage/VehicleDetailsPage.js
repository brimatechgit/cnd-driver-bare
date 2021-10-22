import React from 'react';
import styles from './styles';
import { View, Text, TextInput, ScrollView, Pressable, Image } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';
import Modal from "react-native-modal";
import DropDownPicker from "react-native-custom-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles';


const VehicleDetailsPage = (props) => {

    const [text, onChangeText] = React.useState("");
    const [resAdr, onChangeResAdr] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [sname, onChangeSname] = React.useState("");
    const [moNumber, onChangeNumber] = React.useState(null);
    const [IdNumber, onChangeId] = React.useState(null);
    const [checked, setChecked] = React.useState('No');

    const [isModalVisible, setModalVisible] = React.useState(false);
    const [isModalVisibleMotor, setModalVisibleMotor] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const toggleModalMotor = () => {
        setModalVisible(!isModalVisibleMotor);
    }

    

    return ( 
        <View style={{
            overflow: 'hidden', paddingBottom: 5,
            elevation: 5,
            alignItems:'center'
        }}>
            <View style={styles.container}>
                <View>
                        
                        <View style={{position: 'relative', top: 0, left:0}}>
                                <Card style={{height: 380,padding:5, elevation: 10, marginTop: 35, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
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

                    <View style={styles.rowView}>
                        <Text style={styles.radioText}>Vehicle Category</Text>
                    <View style={styles.rowView}>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Image 
style={{height:35, width:35 }}
  resizeMode = 'contain'
source={require('../../../assets/image/CnDBike.png')} />
                        
                        
                        <View style={{right: '55%'}}>
                            <Text style={{fontSize: 15}}>CnD-Bike</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontSize: 9}}>Small Parcels</Text>
                            </View>
                        </View>
                            <RadioButton
                                value="Yes"
                                status={ checked === 'Yes' ? 'checked' : 'unchecked' }
                                onPress={() => {setChecked('Yes'), setModalVisible(true)}}
                            />
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        
                        
                        <Image 
style={{height:35, width:35 }}
  resizeMode = 'contain'
source={require('../../../assets/image/CnDMotor.png')} />
                        
                        
                        <View style={{}}>
                            <Text style={{fontSize: 15}}>CnD-Motor</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontSize: 9}}>Small & Medium Parcels</Text>
                            </View>
                        </View>
                        <RadioButton
                            value="No"
                            status={ checked === 'No' ? 'checked' : 'unchecked' }
                            onPress={() => {setChecked('No'), setModalVisibleMotor(true)}}
                        />
                        </View>
                        </View>
                </View>


                                </View>


                       

  
                                </Card>
                            </View>                     
                        </View>     
                <View style={styles.detailsTextCard}>
                        <Text style={{fontSize: 22, paddingRight: 10}}>Add Another Vehicle</Text>
                        <View style={styles.iconCircle}><Pressable onPress={console.log('here')}><Text><Icon name="plus" size={20} color="black" /></Text></Pressable></View>
                    </View>

                <View style={{bottom: 25}}>
                    
                        
                        <View style={{position: 'relative', top: 0, left:0, }}>
                            
                                <Card style={{height: '58%',padding:5, elevation: 10, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                                <View style={{justifyContent: 'center', top: 30}}>
                                
                                
                   

                                    <View style={styles.list}>
                                        <Text style={{fontSize:13}}>Added Vehicles:</Text>
                            
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
                                        <Image 
style={{height:35, width:35 }}
  resizeMode = 'contain'
source={require('../../../assets/image/CnDBike.png')} />
                                            
                                            
                                            <View style={{flexDirection:'row', right: '10%', justifyContent: 'center'}}>
                                                <Text style={{justifyContent:'center', top:'5%'}}>Vehicle 1</Text>
                                                <Card style={{elevation: 5, borderRadius: 50, justifyContent:'center', padding:5, left:'20%'}}>
                                                    <Text>FGL FF GP</Text>
                                                </Card>

                                            </View>
                                                <MIcon name='edit' size={25}></MIcon>
                                            
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
                                        <Image 
style={{height:35, width:35 }}
  resizeMode = 'contain'
source={require('../../../assets/image/CnDBike.png')} />
                                            
                                            
                                            
                                            <View style={{flexDirection:'row', right: '10%', justifyContent: 'center'}}>
                                                <Text style={{justifyContent:'center', top:'5%'}}>Vehicle 2</Text>
                                                <Card style={{elevation: 5, borderRadius: 50, justifyContent:'center', padding:5, left:'20%'}}>
                                                    <Text>FGL FF GP</Text>
                                                </Card>

                                            </View>
                                                <MIcon name='edit' size={25}></MIcon>
                                            
                                        </View>
                                    
                                    
                                    </View>
                                </View>
                                </Card>
                            </View>                     
                        </View>
            </View>
            <View style={{justifyContent: 'center',alignItems:'center', position:'absolute', top: '71%'}}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View>

            <View style={styles.main}>
                <View style={styles.textCard}><Text style={{fontSize: 22, paddingLeft: 10}}>Vehicle Details</Text></View>
                <View style={styles.numCircle}><Text style={{fontSize: 25, color: 'white'}}>3</Text></View>
            </View>

            <Modal isVisible={isModalVisible}
                            hasBackdrop={false}
                        >
                            <View style={{
                                left: '10%',
                                height: 150,
                                width: 250,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#ccc',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>
                                <Pressable onPress={toggleModal} style={{position:'absolute', top: '5%', right: '4%'}}>
                                        <Icon name='close'  size={30}></Icon>
                                </Pressable>
                                <View style={{padding: 10, alignItems:'center'}}>
                                    <Text>CnD-Bike Dimensions</Text>
                                    <View style={{height:15}}></View>
                                    <Text style={{fontWeight:'bold', letterSpacing:0.9}}>53x29x56 | 0 - 20KGs</Text>
                                </View> 

                            </View>


                    
                    </Modal>
            <Modal isVisible={isModalVisibleMotor}
                            hasBackdrop={false}
                        >
                            <View style={{
                                left: '10%',
                                height: 150,
                                width: 250,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#ccc',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>
                                <Pressable onPress={() => setModalVisibleMotor(false)} style={{position:'absolute', top: '5%', right: '4%'}}>
                                        <Icon name='close'  size={30}></Icon>
                                </Pressable>

                                
                                <View style={{padding: 10, alignItems:'center'}}>
                                    <Text>CnD-Motor Dimensions</Text>
                                    <View style={{height:15}}></View>
                                    <Text style={{fontWeight:'bold', letterSpacing:0.9}}>106x58x112 | 0 - 50KGs</Text>
                                </View> 

                            </View>


                    
                    </Modal>


        </View>
     );
}
 
export default VehicleDetailsPage;
import React, {useState} from 'react';
import styles from './styles';
import { View, Text, TextInput, ScrollView, Pressable, Image } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';
import Modal from "react-native-modal";
import DropDownPicker from "react-native-custom-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { Button, Overlay } from 'react-native-elements';
// import styles from './styles';



const VehicleDetailsPage = (props) => {

    let carsAdded = 0;

    let carArray = [{
        id: 0,
        type: 'Cnd-Motor',
        registration: 'FGL FF GP',
        make: 'hondai',
        model: '2016',
        colour: 'red',
    }] ;

    const [myArray, updateMyArray] = useState([]);

    const [make, onChangeMake] = React.useState("");
    const [year, onChangeYear] = React.useState("");
    const [colour, onChangeColour] = React.useState("");
    const [model, onChangeModel] = React.useState("");
    const [registration, onChangeNumber] = React.useState(null);
    const [IdNumber, onChangeId] = React.useState(null);
    const [checked, setChecked] = React.useState('No');

    
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const toggleOverlay2 = () => {
        setVisible(!visible2);
    };

    const [isModalVisible, setModalVisible] = React.useState(false);
    const [isModalVisibleMotor, setModalVisibleMotor] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const toggleModalMotor = () => {
        setModalVisible(!isModalVisibleMotor);
    }


    const pushToList = () => {
        ++carsAdded;
        updateMyArray( arr => [...arr,{
            id: carsAdded,
            type: checked,
            registration: registration,
            make: make,
            model: model,
            colour: colour,
        }])

        onChangeColour('')

        console.log(myArray);
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
                            onChangeText={onChangeMake}
                            value={make}
                            placeholder='Make'
                            
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeModel}
                            value={model}
                            placeholder='Model'
                            
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeYear}
                            value={year}
                            placeholder='Year'
                            
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={registration}
                            placeholder='License Plate'
                            
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeColour}
                            value={colour}
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
                                value="CnD-Bike"
                                status={ checked === 'CnD-Bike' ? 'checked' : 'unchecked' }
                                onPress={() => {setChecked('CnD-Bike'), setVisible(true)}}
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
                            value="CnD-Motor"
                            status={ checked === 'CnD-Motor' ? 'checked' : 'unchecked' }
                            onPress={() => {setChecked('CnD-Motor'), setVisible(true)}}
                        />
                        </View>
                        </View>
                </View>


                                </View>


                       

  
                                </Card>
                            </View>                     
                        </View>     
                <View onPress={pushToList} style={styles.detailsTextCard}>
                        <Text style={{fontSize: 22, paddingRight: 10}}>Add Another Vehicle</Text>
                        <View style={styles.iconCircle}><Pressable onPress={pushToList}><Text><Icon name="plus" size={20} color="black" /></Text></Pressable></View>
                    </View>

                <View style={{bottom: 25}}>
                    
                        
                        <View style={{position: 'relative', top: 0, left:0, }}>
                            
                                <Card style={{height: '58%',padding:5, elevation: 10, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                                <View style={{justifyContent: 'center', top: 30}}>
                                
                                
                   

                                    <View style={styles.list}>

                                        <Text style={{fontSize:13}}>Added Vehicles:</Text>
                                        {/* have a map list displaying all cars */}

                                        { myArray && myArray.length > 1 ?  <View>{
                                            myArray.map((car) => 
                                            <View style={styles.carListItem}>
                                                {car.type == 'Cnd-Bike' ? <Image 
                                                style={{height:35, width:35 }}
                                                resizeMode = 'contain'
                                                source={require('../../../assets/image/CnDBike.png')} /> 
                                                : <Image 
                                                style={{height:35, width:35 }}
                                                resizeMode = 'contain'
                                                source={require('../../../assets/image/CnDMotor.png')} />  }
                                                <View style={{flexDirection:'row', right: '10%', justifyContent: 'center'}}>
                                                    <Text style={{justifyContent:'center', top:'5%'}}>{car.make}</Text>
                                                    
                                                    <Card style={{elevation: 5, borderRadius: 50, justifyContent:'center', padding:5, left:'20%'}}>
                                                        <Text>{car.registration}</Text>
                                                    </Card>
                                                </View>
                                                <MIcon name='edit' size={25}></MIcon>
                                            </View> ) }
                                        </View>: <Text></Text> }
                                    </View>
                                </View>
                                </Card>
                            </View>                     
                        </View>
            </View>
            <View style={{justifyContent: 'center',alignItems:'center', position:'absolute', top: '71%'}}>
                <Pressable style={styles.button} onPress={() => 
                    // add to db and pop 
                    props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View>

            <View style={styles.main}>
                <View style={styles.textCard}><Text style={{fontSize: 22, paddingLeft: 10}}>Vehicle Details</Text></View>
                <View style={styles.numCircle}><Text style={{fontSize: 25, color: 'white'}}>3</Text></View>
            </View>
            

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{borderRadius:25}}>
                    {checked == 'CnD-Bike' ? 
                     <View style={{padding: 10, alignItems:'center'}}>
                        <Text>CnD-Bike Dimensions</Text>
                        <View style={{height:15}}></View>
                        <Text style={{fontWeight:'bold', letterSpacing:0.9}}>53x29x56 | 0 - 20KGs</Text>
                    </View>  
                    :   <View style={{padding: 10, alignItems:'center'}}>
                            <Text>CnD-Motor Dimensions</Text>
                            <View style={{height:15}}></View>
                            <Text style={{fontWeight:'bold', letterSpacing:0.9}}>106x58x112 | 0 - 50KGs</Text>
                        </View>  
                }
            </Overlay>
            

            


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
            {/* <Modal isVisible={isModalVisibleMotor}
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


                    
                    </Modal> */}


        </View>
     );
}
 
export default VehicleDetailsPage;
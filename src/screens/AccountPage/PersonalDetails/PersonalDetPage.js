import React, {useState} from 'react';
import { View, Text, TextInput, Pressable,Image } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import ModalTester from '../../../components/DetailsCard/ResAddress/DetailsClass';


const PersonalPage = () => {

    const [text, onChangeText] = React.useState("");
    const [resAdr, onChangeResAdr] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [sname, onChangeSname] = React.useState("");
    const [moNumber, onChangeNumber] = React.useState('');
    const [IdNumber, onChangeId] = React.useState('');
    const [modalState, onChangeModalState] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("Complex");

    

    const [placeVal, setPlaceVals] = useState('Apartment Name & unit No');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: 'Complex / Estate', value: 'Complex'},
        {label: 'Apartment', value: 'Apartment'},
        {label: 'House', value: 'House'},
        {label: 'Office', value: 'Office'},
        {label: 'Hotel/B&B', value: 'Hotel/B&B'}
      ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [complex, onChangeComplex] = React.useState('');
    const [streetName, onChangeStreetName] = React.useState('');

    const changeVals = () => {
        if(value == 'Complex'){
            setPlaceVals('Complex Name & unit No');
        } else if( value == 'Apartment') {
            setPlaceVals('Apartment Name & unit No');
        } else if(value == 'Office') {
            setPlaceVals('Company name');
        } else if(value == 'Hotel/B&B') {
            setPlaceVals('Hotel name & room no');
        }
      }
    return ( 
        <View style={styles.container}>
            <View style={{alignItems:'center', flexDirection: 'row', left: '10%'}}>
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../../assets/image/AccountSettings.png')} />
                <Text style={{paddingLeft:15,fontSize: 22, fontWeight: '600'}}>Personal Details</Text>
            </View>
            <View>
                        
                    <View style={{position: 'relative', top: 0, left:0}}>
                            <Card style={{height: 250,padding:5, elevation: 10, marginTop: 35, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                            <View style={{justifyContent: 'center', top: 30}}>
                            
                            
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeText}
                                    value={Text}
                                    placeholder='Name'  
                                />
                                <TextInput
                                    style={styles.input}
                                    onChange={onChangeSname}
                                    value={sname}
                                    placeholder='Surname'  
                                />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder='Email'  
                            />
                                <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={moNumber}
                                placeholder='Mobile number'  
                            />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeId}
                                value={IdNumber}
                                placeholder='ID/Passport'  
                            />
                            </View></View>
                            </Card>
                        </View>                     
                    </View> 
            
            <View>
                
                <Card style={{height: 330,padding:15, elevation: 5, marginTop: 10, borderRadius: 25,  justifyContent: 'center'}}>
                    <View><Text style={{fontSize: 23, justifyContent: 'center',
        padding: 5}}>Residential Details</Text></View>

                    <View style={styles.form}>
                    <View>
                            <Text style={{fontSize: 15, padding: 10}}>Building Type</Text>
                            

                            <DropDownPicker
                            dropDownDirection={'BOTTOM'}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder='Apartment'
                                style={styles.dropdown}
                                onChangeValue={changeVals}
                                />

                        </View>
                        <View>

                        <View >
                            {

                                (value != 'House') ? <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeComplex}
                                    value={complex}
                                    placeholder={placeVal}
                                /> : null
                                
                            }

                        </View>

                        <View>
                            {/* <Text>Street Name</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetName}
                                value={streetName}
                                placeholder='Street Name & Street no'  
                            />

                        </View>

                        {/* <View >
                            {/* //should navigate to google search page 
                            {/* <Text>Address</Text> 
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetNumber}
                                value={streetNumber}
                                placeholder='Street No'  
                            />
                        </View> */}
                    


                        </View>
                        {/* <ModalTester title={value}></ModalTester> */}
                    </View>
                </Card>
                
            </View>
            {/* have an error wen fields are empty */}
            {/* <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 5,}}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View> */}


        </View>
     );
}
 
export default PersonalPage;
import React, {useState, KeyboardAvoidingView} from 'react';
import { View, Text, TextInput, Pressable, Modal, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles';

const DetailsCard = props => {

    const [text, onChangeText] = React.useState("");
    const [resAdr, onChangeResAdr] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [sname, onChangeSname] = React.useState("");
    const [moNumber, onChangeNumber] = React.useState('');
    const [IdNumber, onChangeId] = React.useState('');
    const [modalState, onChangeModalState] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("Complex");

    


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: 'Complex / Estate', value: 'Complex'},
        {label: 'Apartment', value: 'Apartment'},
        {label: 'Home', value: 'Home'}
      ]);

    const [modalVisible, setModalVisible] = useState(false);




    return ( 
        
         
        <View style={styles.container}>
           
                
                        
                    <View style={{top: 0, left:0}}>
                            <Card style={{height: 400,padding:5, elevation: 4, marginTop: 35, borderRadius: 25,  justifyContent: 'center'}}>
                            <View style={{justifyContent: 'center', top: 40, textAlign: 'center'}}>
                            
                            
                            
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeText}
                                    value={Text}
                                    placeholder='Account Name'  
                                />
                                <TextInput
                                    style={styles.input}
                                    onChange={onChangeSname}
                                    value={sname}
                                    placeholder='Account Number'  
                                />
                            
                            
                                <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder='Account Type'  
                            />
                                <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={moNumber}
                                placeholder='Branch Code'  
                            />
                            
                            
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeId}
                                value={IdNumber}
                                placeholder='Branch Name'  
                            />
                            </View>
                            </Card>
                        </View> 
            
            
            {/* have an error wen fields are empty */}
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, bottom: 25 }}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View>

            <View style={styles.main}>
                <View style={styles.textCard}><Text style={{fontSize: 22, paddingLeft: 10}}>Banking Details</Text></View>
                <View style={styles.numCircle}><Text style={{fontSize: 25, color: 'white'}}>2</Text></View>
            </View>


        </View>
        
        
     );
}
 
export default DetailsCard;
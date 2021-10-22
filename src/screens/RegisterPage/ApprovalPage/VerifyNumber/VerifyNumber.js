import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, CheckBox } from 'react-native';
import {Card} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import RegistrationVerification from './RegistrationVerification/RegistrationVerification';
import TermsPage from '../../../TermsPage/TermsPage';

const VerifyNumber = props => {

    const [mobile, onChangeMobile] = React.useState();
    const [isSelected, setSelection] = useState(false);


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: '+27', value: '+27'},
        {label: '+36', value: '+36'},
        {label: '+28', value: '+28'}
      ]);

    return ( 
        <View style={{flex:1, padding: 20}}>
            <View>
                <Text style={styles.text}>Verify your numbers.</Text>

                <View style={{height: 10}}></View>
                <Text style={{fontSize: 12,  width: 200, color:'teal'}}>
                    We will send an SMS with a code to 
                    varify your mobile number
                </Text>
            </View>
            <View style={{height: 15}}></View>

            <Card style={{elevation: 5, borderRadius: 25}}>
            <View style={{flexDirection: 'row'}}>

            <DropDownPicker
                            style={{width: 80, borderWidth: 0, borderRadius: 25}}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder='+27'
                                />
            <TextInput
                                    style={{borderBottomColor: 'teal',
                                    borderWidth: 0,
                                    width: 100,
                                    paddingBottom: 5,
                                    margin: 10,
                                right: 250}}
                                    onChange={onChangeMobile}
                                    value={mobile}
                                    placeholder='Mobile' 
                                    placeholderTextColor='teal'
                                    keyboardType='number-pad' 
                                />
            </View>
            </Card>

            <View style={{height: 15}}></View>

            <View style={{ flexDirection: 'row', alignItems:'center'}}>
             {/* I agree to the Terms & Conditions and Privacy Policy */}
             <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={{alignSelf: 'center',}}
                />
             <Text style={{fontSize:12, bottom: 3}}>I agree to the <Pressable onPress={() => props.navigation.navigate(TermsPage)}><Text style={{fontSize:12, color: 'teal', top: 3}}>Terms & Conditions and Privacy Policy</Text></Pressable></Text>
            </View>
            <View style={{height: 15}}></View>
            <View >
                <Text style={{fontSize: 17, color: 'teal'}}>Or sign in with Socials</Text>
                <View style={{flexDirection: 'row'}}>
                    {/* Add Social icons here */}
                    <IconIonic name='logo-google' color='tomato' size={25} style={{padding: 5}}></IconIonic>
                    <IconIonic name='logo-facebook' color='royalblue' size={25} style={{padding: 5}}></IconIonic>
                    
                </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, }}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(RegistrationVerification)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View>
        </View>
     );
}
 
export default VerifyNumber;
import React, {useState} from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../components/Button/Button';
import TermsAndCo from '../../components/TermsAndC/TermsAndC';
import TermsPage from '../AccountPage/SupportPage/TermsPage/TermsPage';
import LoginPage from '../LoginPage/LoginPage';
import LoginTerms from '../LoginPage/loginTerms/loginTerms';
import styles from './styles';

const RegisterPage = props => {

    const [number, onChangeNumber] = React.useState('');
    const [sname, onChangeSname] = React.useState('');
    const [fname, onChangeFname] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: '+27', value: '+27'},
        {label: '+36', value: '+36'},
        {label: '+28', value: '+28'}
      ]);

    return ( 
        <View style={{flex: 1, padding: 15,}}>
            <Text style={{fontSize:22}}>Register</Text>
            <View style={{height: 50}}></View>
            <View>
            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeFname}
                                    value={fname}
                                    placeholder='Name'
                                />
                                <TextInput
                                    style={styles.input}
                                    onChange={onChangeSname}
                                    value={sname}
                                    placeholder='Surname' 
                                />
                </View>
                <View style={{height: 50}}></View>

                <View style={{paddingBottom: 25}}>
                <TextInput
                                    style={styles.inputLong}
                                    onChangeText={onChangeEmail}
                                    value={email}
                                    placeholder='Email' 
                                />
                                <View style={{height: 50}}></View>
                                <TextInput
                                    style={styles.inputLong}
                                    onChange={onChangePassword}
                                    value={password}
                                    secureTextEntry
                                    placeholder='Password' 
                                />

                </View>
                <View style={{height: 20}}></View>
        <View style={{flexDirection: 'row', }}>                            
                            <DropDownPicker
                            style={{width: 100}}
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
                                    borderBottomWidth: 1,
                                    width: 180,
                                    right: 200,
                                    paddingBottom: 5,
                                    margin: 10,
                                    justifyContent: 'flex-start'}}
                                    onChange={onChangeNumber}
                                    value={number}
                                    placeholder='Mobile' 
                                    keyboardType='number-pad' 
                                />
                        </View>
                        <View style={{height: 50}}></View>

                <View style={{ justifyContent:'center', alignItems: 'center',}}>
                    <Text style={{textAlign: 'center'}}>By clicking sign up you agree to our <Pressable onPress={() => props.navigation.navigate(LoginTerms)}><Text style={{color: 'teal', textAlign: 'center'}}>Terms and Conditions</Text></Pressable></Text>
                </View>

                <View style={{height: 15}}></View>

                {/* <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250,left: 30 }}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(ApprovalPage)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Register</Text>
                        </Pressable>
                    </View> */}

                    <View style={{alignItems:'center'}}>
                        <Button text='Register' navPage='DocumentsPage' navigation={props.navigation} ></Button>
                    </View>

                    <View style={{height: 15}}></View>
                    <View style={{ justifyContent:'center', alignItems: 'center',}}>
                    <Text style={{textAlign: 'center', fontWeight:'bold'}}>Already have an account? 
                        <Pressable onPress={() => props.navigation.navigate(LoginPage)}><Text style={{color: 'teal', top: 4 }}> Sign In</Text></Pressable></Text>
                </View>


            </View>
        </View>
     );
}
 
export default RegisterPage;
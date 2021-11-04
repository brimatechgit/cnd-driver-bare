import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';
import TermsAndCo from '../../components/TermsAndC/TermsAndC';
import TermsPage from '../AccountPage/SupportPage/TermsPage/TermsPage';
import LoginPage from '../LoginPage/LoginPage';
import LoginTerms from '../LoginPage/loginTerms/loginTerms';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';

const RegisterPage = props => {

    const [number, onChangeNumber] = React.useState();
    const [sname, onChangeSname] = React.useState('');
    const [fname, onChangeFname] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: '+27', value: '+27'},
        {label: '+36', value: '+36'},
        {label: '+28', value: '+28'}
      ]);


    function createUser () {
        // if (sname != '' && number != '' && fname != '' && email != '' && password != '') {
            //creates users with passw and email
                auth()
                .createUserWithEmailAndPassword(email.toString(), password.toString())
                .then(() => {
                console.log('User account created & signed in!');
                //add user to user collection
                        firestore()
                        .collection('drivers')
                        .add({
                        name: fname.toString(),
                        surname: sname.toString(),
                        email: email.toString(),
                        phone: number,
                        }).then((res) =>{
                            firestore().collection('users').doc(res.id).update({
                                id: res.id,
                            })

                            props.navigation.navigate('DocumentsPage')
                        })
                    })
                .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
                });
        // }

    //     auth()
    //   .createUserWithEmailAndPassword(email.toString(), password.toString())
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //     firestore()
    //   .collection('users')
    //   .add({
    //     name: 'Ada Auth 2',
    //     email: 'jane2.doe@example.com',
    //   }).then((res) => {
    //     console.log(res.id)
    //   })
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });

    }

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
                                    onChangeText={onChangeSname}
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
                                    onChangeText={onChangePassword}
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
                                    style={{
                                        borderBottomWidth: 1,
                                        width: 180,
                                        right: 200,
                                        paddingBottom: 5,
                                        margin: 10,
                                        justifyContent: 'flex-start'
                                    }}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholder='Mobile' 
                                    keyboardType='number-pad' 
                                />
                        </View>
                        <View style={{height: 50}}></View>

                <View style={{ justifyContent:'center', alignItems: 'center',}}>
                    <Text style={{textAlign: 'center'}}>By clicking sign up you agree to our <Pressable onPress={() => props.navigation.navigate('LoginTerms')}><Text style={{color: 'teal', textAlign: 'center'}}>Terms and Conditions</Text></Pressable></Text>
                </View>

                <View style={{height: 15}}></View>

                {/* <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250,left: 30 }}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(ApprovalPage)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Register</Text>
                        </Pressable>
                    </View> */}

                    <View style={{alignItems:'center', }}>
                        {/* <Button text='Register' navPage='DocumentsPage' navigation={props.navigation} ></Button> */}
                        <Button title='Register' titleStyle={{color:'black'}} type='outline' buttonStyle={{borderRadius: 25, borderColor:'black',backgroundColor:'white', width: Dimensions.get('screen').width - 140 }} onPress={() => createUser()}></Button>
                    </View>

                    <View style={{height: 15}}></View>
                    <View style={{ justifyContent:'center', alignItems: 'center',}}>
                    <Text style={{textAlign: 'center', fontWeight:'bold'}}>Already have an account? 
                        <Pressable onPress={() => props.navigation.navigate('LoginPage')}><Text style={{color: 'teal', top: 4 }}> Sign In</Text></Pressable></Text>
                </View>


            </View>
        </View>
     );
}
 
export default RegisterPage;
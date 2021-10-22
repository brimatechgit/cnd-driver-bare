import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Card from 'react-native-paper';
import Button from '../../components/Button/Button';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import styles from './styles';

const LandingPage = props => {
    return ( 
        <View style={{flex: 1, alignItems:'center', padding:20}}>
            <View style={{height: '80%', alignItems: 'center', justifyContent: 'center'}}>
            <Image 
style={{flex: 1, width:250}}
  resizeMode = 'contain'
source={require('../../assets/image/landingLogo.png')} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center'}}>

                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Welcome To the Drivers App</Text>
            </View>

            <View style={{flexDirection:'row', }}>

                    <Button text='Sign In' navPage='LoginPage' navigation={props.navigation} ></Button>
                    <Button text='Register' navPage='RegisterPage' navigation={props.navigation} ></Button>

            </View>
        </View>
     );
}
 
export default LandingPage;
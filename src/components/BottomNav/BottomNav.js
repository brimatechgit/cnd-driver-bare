import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions,Image } from 'react-native';
import styles from './styles'
import Modal from "react-native-modal";
import { IconButton } from 'react-native-paper';
import { Button, Overlay } from 'react-native-elements';
import { Switch } from 'react-native-switch';
import {LogBox} from 'react-native';

const BottomNav = () => {

  


    
LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`']);

    const [switchValue, setSwitchValue] = useState(false);
    const [colorValue, setColorValue] = useState('black');
    const [statusValue, setStatusValue] = useState("You're Offline!");

    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
      setVisible(!visible);
    };

    const toggleSwitch = (value) => {
      //To handle switch toggle
      setSwitchValue(value);
    
    if(value){
        setStatusValue('Your Online!')
        setColorValue('#3e7fc1')

    } else {
        setStatusValue("You're Offline!")
        setColorValue('black')
    }
      //State changes according to switch
    };

    useEffect(() => {
      setTimeout(() => {
          setVisible(true)
      }, 6000);
    }, []);

    return ( 
        <View style={styles.container}>
           
        <View style={{bottom: '45%', flexDirection: 'row'}}>
          <View style={{width: '70%'}}>
            <Text style={{fontSize: 25,
                left: 25,
                color: colorValue
                }}>{statusValue}
          </Text>
          </View>

           <View style={{left: '7%'}}>

            <Switch
              value={switchValue}
              onValueChange={toggleSwitch}
              backgroundActive={'#3770b7'}
              backgroundInactive={'gray'}
              circleActiveColor={'#3e7fc1'}
              circleInActiveColor={'#000000'}/>

           </View>
          
        </View>
        
         {/*ADD MODAL HERE  */}

         <Modal isVisible={visible}
                            hasBackdrop={false}
                            style
                        >

                  

                          
                            <View style={{
                                top:Dimensions.get('window').height - 300,
                                height: 300,
                                width: Dimensions.get('window').width - 45,
                                
                                position: 'absolute',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>
                                

                                <View style={{flexDirection:'row'}}>
                                  <Text style={styles.text}>CnD-Bike</Text>
                                  <Image
                                  source={require("../../assets/image/Loading.png")}
                                  style={{
                                    width: Dimensions.get('screen').width - 85,
                                    height: Dimensions.get('screen').width - 300,
                                    resizeMode: "contain",
                                    position:'absolute',
                                    top:-50
                                  }}
                                />
                                </View>
                
                                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', paddingTop:35}}>
                                    
                                    {/* use google geolocation to get km and duration of trip */}
                                    <Text style={styles.text}>3 mins</Text>
                                    <Text style={styles.text}> | </Text>
                                    <Text style={styles.text}>1.5 KM</Text>

                                </View>

                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                  {/* pickup location */}
                                  <Text style={[styles.text, {paddingVertical:15}]}> 340 Rage Road Jetpark</Text>

                                  <View style={{flexDirection:'row'}}>

                                      {/* on accept navigate to navigation page */}
                                    <Button title='Accept'  buttonStyle={{marginVertical:10, marginHorizontal:10, borderRadius:25, borderWidth:1, borderColor:'black', backgroundColor: 'transparent'}} titleStyle={{color:'black'}}></Button>

                                    {/* on decline, close modal and look for other requests */}
                                    <Button title='Decline' onPress={toggleModal} buttonStyle={{marginVertical:10, marginHorizontal:10, borderRadius:25, borderWidth:1, borderColor:'black', backgroundColor: 'transparent'}} titleStyle={{color:'black'}}></Button>
                                  </View>
                                </View>

                                    

                            </View>


                    
                    </Modal>
            
        </View>
     );
}
 
export default BottomNav;
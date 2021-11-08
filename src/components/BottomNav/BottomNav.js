import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions,Image } from 'react-native';
import styles from './styles'
import Modal from "react-native-modal";
import { IconButton } from 'react-native-paper';
import { Button, Overlay } from 'react-native-elements';
import { Switch } from 'react-native-switch';
import {LogBox} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Geocoder from 'react-native-geocoding';
import GetLocation from 'react-native-get-location'


Geocoder.init("AIzaSyCoKIwMwV8DlLQI4Rgdm7qzGVI7ZkuTU9c"); // use a valid API key

const BottomNav = ({navigation}) => {

  


    
LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`']);


    const [docData, setDocData] = useState('')
    const [pickupData, setPickUpData] = useState()
    const [dropoffData, setDropOffData] = useState()
    const [docID, setDocID] = useState('')

    const [switchValue, setSwitchValue] = useState(false);
    const [colorValue, setColorValue] = useState('black');
    const [statusValue, setStatusValue] = useState("You're Offline!");

    const [currLoc, setCurrLoc] = useState(0);
    const [currLong, setCurrLong] = useState(0);

    const [address, setAddress] = useState();

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
        // goOnline(value)
    } else {
        setStatusValue("You're Offline!")
        setColorValue('black')
        
    }   
      //State changes according to switch
    };


    // function onResult(QuerySnapshot) {
    //   console.log('Got Users collection result.');
    //   console.log('Got Users ' + QuerySnapshot);
    //   // setVisible(true)


    //   for(var i in QuerySnapshot){
    //     console.log(QuerySnapshot)
    //   }
    
    // }
    
    // function onError(error) {
    //   console.error(error);
    // }

  //   function goOnline(value) {
  //      useEffect(() => {

  //       const subscriber = firestore().collection('requests').where('reqstatus', '==', 'Paid').get().then( res => {
  //           console.log(res)
  //       });
  //     // Stop listening for updates when no longer required
  //   return () => subscriber();
  // }, [value]);
  //   }

    // firestore().collection('requests').where('reqstatus', '==', 'Paid').onSnapshot(onResult, onError);

    // useEffect(() => {


    //   firestore().collection('requests').where('reqstatus', '==', 'Paid').get().then( res => {
    //     res.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //       // console.log(doc.id, " => ", doc.data());
    //       // console.log(doc.data()['pickup']['lat'])
    //       // setPickUpData(doc.data()['pickup'])
    //       // setDropOffData(doc.data()['dropoff'])


    //       // Search by geo-location (reverse geo-code)
    //       Geocoder.from({lat : pickupData['lat'], lng : pickupData['lng']})
    //       .then(json => {
    //               var addressComponent0 = json.results[0].address_components[0]['long_name'];
    //               var addressComponent1 = json.results[0].address_components[1]['long_name'];
    //               var addressComponent2 = json.results[0].address_components[2]['long_name'];
    //         setAddress(addressComponent0 +" "+ addressComponent1 + " " + addressComponent2)

    //         setVisible(true)
    //       })
    //       .catch(error => console.warn(error));
          
    //   });
    // });


    

    

      // setTimeout(() => {
      //     setVisible(true)
      // }, 52000);


    // }, [switchValue]);

    


    const MINUTE_MS = 9000;

useEffect(() => {
  const interval = setInterval(() => {
    firestore().collection('requests').where('reqstatus', '==', 'Paid').get().then( res => {
          res.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            // console.log(doc.id, " => ", doc.data());
            // console.log(doc.data()['pickup']['lat'])
            setPickUpData(doc.data()['pickup'])
            setDocID(doc.id)
            setDropOffData(doc.data()['dropoff'])
  
            console.log(doc.data()['pickup']['lat'])
            // Search by geo-location (reverse geo-code)
            Geocoder.from({lat : doc.data()['pickup']['lat'], lng : doc.data()['pickup']['lng']})
            .then(json => {
                    var addressComponent0 = json.results[0].address_components[0]['long_name'];
                    var addressComponent1 = json.results[0].address_components[1]['long_name'];
                    var addressComponent2 = json.results[0].address_components[2]['long_name'];
              setAddress(addressComponent0 +" "+ addressComponent1 + " " + addressComponent2)
  
              setVisible(true)
            })
            .catch(error => console.warn(error));
            
        });
      });
  }, MINUTE_MS);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [])



  const onAccept = () => {

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
    .then(location => {
        setCurrLoc(location.latitude );
        setCurrLong(location.longitude );
        console.log(currLoc + ' ' + currLong)
        console.log(location);


        firestore()
          .collection('requests')
          .doc(docID)
          .update({
            reqstatus: 'Accepted',
            driverID: '0HT5FvsQQo5JKfgRy9dU',
            driverLocation: [location.latitude, location.longitude]
          })
          .then(() => {
            console.log('req collec updated!');
            navigation.navigate('NavigationPage', {
              pickup: pickupData,
              dropoff: dropoffData,
              userLocation: [location.latitude, location.longitude],
              docID: docID,
            })
          });
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })

   

    console.log(docID)
    // navigation.navigate('NavigationPage')
  }

    


    // console.log('order req ' + docData['lat'])

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
                                  <Text style={[styles.text, {paddingVertical:15}]}>{address}</Text>

                                  <View style={{flexDirection:'row'}}>

                                      {/* on accept navigate to navigation page */}
                                    <Button title='Accept' onPress={onAccept }  buttonStyle={{marginVertical:10, marginHorizontal:10, borderRadius:25, borderWidth:1, borderColor:'black', backgroundColor: 'transparent'}} titleStyle={{color:'black'}}></Button>

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
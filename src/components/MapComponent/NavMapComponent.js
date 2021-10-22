import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity,Text, Pressable } from 'react-native';
import MapboxNavigation from '@homee/react-native-mapbox-navigation';
import styles from './styles';
import Modal from "react-native-modal";
import { Card } from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';



//map navigation, caled after the driver has accepted an order
//should get long and latitude values from db, and navigate the driver accordingly


export const NavMapComponent = () => {

    //locations should be dynamic
    const UserLocation = [28.225375324978117, -26.16299249170051]; // [longitude, latitude]
    const DestinationLocation = [28.429375324978117, -26.29299249170051,]; // [longitude, latitude]
    const StartLocation = UserLocation;
    const CenterCoordinate = UserLocation;
    const [isModalVisibleSOS, setModalVisibleSOS] = useState(false);

    const toggleModalSOS = () => {
        setModalVisibleSOS(!isModalVisibleSOS, );
    
      
      };

  return (
    <View style={{height: Dimensions.get('window').height -  45,}}>
      <MapboxNavigation
      
        origin={UserLocation}
        destination={DestinationLocation}
        shouldSimulateRoute
        showsEndOfRouteFeedback
        onLocationChange={(event) => {

            //push these updates to db
          const { latitude, longitude } = event.nativeEvent;
        }}
        onRouteProgressChange={(event) => {
          const {
            distanceTraveled,
            durationRemaining,
            fractionTraveled,
            distanceRemaining,
          } = event.nativeEvent;
        }}
        onError={(event) => {
          const { message } = event.nativeEvent;
        }}
        onCancelNavigation={() => {
          // User tapped the "X" cancel button in the nav UI
          // or canceled via the OS system tray on android.
          // Do whatever you need to here.
        }}
        onArrive={() => {
          // Called when you arrive at the destination.
        }}
      />

{/* <TouchableOpacity style={styles.overlay} >
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../assets/image/MENU.png')} />
            </TouchableOpacity> */}
            
            <TouchableOpacity onPress={() => setModalVisibleSOS(true)} style={styles.overlay2}>
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../assets/image/SOS.png')} />
            </TouchableOpacity>


            <Modal isVisible={isModalVisibleSOS}
              hasBackdrop={false}
              onModalClose={toggleModalSOS}
            >
              <View style={{
                left: '2%',
                height: '50%',
                width: '95%',
                alignItems: 'center',
                borderColor: '#ccc',
                borderWidth: 1,
                borderStyle: 'solid',
                backgroundColor: 'white',
                elevation: 20,
                padding: 2,
                borderRadius: 25,
              }}> 

<View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 22, fontWeight: '600'}}>Emergency Contacts</Text>
            </View>

            <View>
                <View style={{alignItems:'center', paddingTop: 25}}>
                    <Text style={{fontSize: 18}}>Contact the local authorities</Text>
                    <Text style={{fontSize: 12}}>Share your trip Information with the authority</Text>
                </View>


                <View>
                    <Text style={{fontSize: 12, paddingVertical: 15}}>Trip information:</Text>


                    <View style={{flexDirection:'row'}}>
                        <Card style={{borderRadius: 60, marginHorizontal: 10}}><Icon name='car' size={25} style={{padding:10}}></Icon></Card>
                        <View style={{flexDirection:'row', justifyContent:'space-between', width: '75%', alignItems:'center'}}>
                            <View>
                                <Text>453 Unicon Villy</Text>
                                <Text style={{fontWeight:'bold'}}>Cnd-Bike | SNH 55GP</Text>
                            </View>

                            <Icon name='chevron-forward-outline' size={25}></Icon>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',  marginVertical: 10}}>
                        <Card style={{borderRadius: 60, marginHorizontal: 10, width: 45, height: 45, alignItems: 'center', justifyContent: 'center',}}><Octicons name='primitive-dot' size={25} style={{top:10}} color='teal'></Octicons></Card>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                                <Text>Current Location</Text>
                                <Text style={{fontWeight:'bold'}}>Jetline West</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            

            <View style={{justifyContent:'center', alignItems:'center'}}>


                

                <View style={{justifyContent: 'center',alignItems:'center', width: 300, paddingVertical: 10, elevation:5}}>
                    <Pressable style={styles.button} onPress={() => setModalVisibleSOS(false)}>
                        <Text style={{color: 'white', fontSize: 20}}>Dial 10111</Text>
                        <Icon name='chevron-forward-outline' size={18} color='white'></Icon>
                    </Pressable>
                </View>

                </View>

                </View>

            </View>


</Modal>

    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     height: Dimensions.get('window').height -  45,
//   },
// });
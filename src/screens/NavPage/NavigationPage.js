import React from 'react'
import { View, Text } from 'react-native'
import { NavMapComponent } from '../../components/MapComponent/NavMapComponent';
import firestore from '@react-native-firebase/firestore';

const NavigationPage = ({navigation,route, }) => {

  const {pickup, dropoff, userLocation, docID} = route.params
   
    return ( 
        <View >

          
          <NavMapComponent navigation={navigation}  pickup={pickup} dropoff={dropoff} docID={docID} userLocation={userLocation}> </NavMapComponent>
          {/* <NavMapComponent navigation={navigation} pickup={pickup} dropoff={dropoff} userLocation={userLocation} docID={docID}> </NavMapComponent> */}
          {/* <MapComponent navigation={navigation}> </MapComponent> */}
          {/* <BottomNav navigation={navigation}> </BottomNav> */}
        </View>
     );
}

export default NavigationPage

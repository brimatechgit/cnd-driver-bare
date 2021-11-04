import React from 'react'
import { View, Text } from 'react-native'
import { NavMapComponent } from '../../components/MapComponent/NavMapComponent';

const NavigationPage = ({navigation}) => {
   
    return ( 
        <View >

          
          <NavMapComponent navigation={navigation}> </NavMapComponent>
          {/* <MapComponent navigation={navigation}> </MapComponent> */}
          {/* <BottomNav navigation={navigation}> </BottomNav> */}
        </View>
     );
}

export default NavigationPage

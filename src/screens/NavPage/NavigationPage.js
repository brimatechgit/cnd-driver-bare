import React from 'react'
import { View, Text } from 'react-native'

const NavigationPage = () => {
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    return ( 
        <View >
          
          <NavMapComponent navigation={navigation}> </NavMapComponent>
          {/* <MapComponent navigation={navigation}> </MapComponent> */}
          {/* <BottomNav navigation={navigation}> </BottomNav> */}
        </View>
     );
}

export default NavigationPage

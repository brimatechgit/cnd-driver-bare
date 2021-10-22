import React, {useState} from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import BottomNav from '../../components/BottomNav/BottomNav';
import Modal from "react-native-modal";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import AccountPage from '../AccountPage/AccountPage';
import SupportPage from '../AccountPage/SupportPage/SupportPage';
import AccountSettings from '../AccountPage/AccountSettings/AccountSettings';
import MapComponent from '../../components/MapComponent/MapComponent';
import { NavMapComponent } from '../../components/MapComponent/NavMapComponent';


const HomePage = ({navigation}) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    return ( 
        <View >
          
          {/* <NavMapComponent navigation={navigation}> </NavMapComponent> */}
          <MapComponent navigation={navigation}> </MapComponent>
          <BottomNav navigation={navigation}> </BottomNav>
        </View>
     );
}
 
export default HomePage;
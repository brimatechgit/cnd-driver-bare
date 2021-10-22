import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import PoliciesPage from './PoliciesPage/PoliciesPage';
import TermsPage from './TermsPage/TermsPage';
import ContactPage from './ContactUs/ContactPage';
import Modal from "react-native-modal";
import HomePage from '../../HomePage/HomePage';
import LandingPage from '../../LandingPage/LandingPage';


const SupportPage = (props) => {

    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return ( 
        <View>

        
        <View>
            <Text style={styles.textHeader}>Support</Text>
            <View>

                
{/* 
                    <Pressable onPress={() => props.navigation.navigate(PoliciesPage)} style={{flexDirection: 'row'}}>

                        <View style={styles.leadIcon}><MIcon name="privacy-tip" size={30}></MIcon></View>
                            <View style={styles.textContainer}>

                            <Text style={{fontSize: 22}}>Policies</Text>
                            </View>

                            
                    </Pressable> */}
           
                <Pressable onPress={() => props.navigation.navigate(PoliciesPage)} style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="md-document-attach" size={30}></Icon></View>
                    
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                    <Text style={styles.text}>Policies</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    </View>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate(TermsPage)} style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="md-document-attach" size={30}></Icon></View>
                    
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                    <Text style={styles.text}>Terms and Conditions</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    </View>
                </Pressable>


                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><MIcon name="contact-phone" size={30}></MIcon></View>
                    
                    <Pressable onPress={() => props.navigation.navigate(ContactPage)} style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                        <Text style={styles.text}>Contact Us</Text>
                        <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    </Pressable>
                </View>
                <Text style={styles.textHeader}>Other</Text>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><MIcon name="logout" size={30} color='red'></MIcon></View>
                    
                    <Pressable onPress={toggleModal} style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                        <Text style={styles.text}>Logout</Text>
                        <View style={styles.trailIcon} ><Icon name="chevron-forward" size={20}></Icon></View>
                    </Pressable>
                </View>
            </View>
        </View>



        <Modal isVisible={isModalVisible}
                            hasBackdrop={false}
                        >
                            <View style={{
                                left: 10,
                                height: 150,
                                width: 300,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#ccc',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>
                                <View style={{padding: 10, alignItems:'center', width:'75%'}}>
                                    <Text style={{fontSize: 18, fontWeight:'500',  color:'red', textAlign:'center'}}>Are you sure you want to Log out?</Text>

                                
                                
                                </View>

                                <View style={{flexDirection:'row'}}>

                                    <TouchableOpacity onPress={toggleModal} style={[styles.button, {margin:5}]}>
                        
                                        <Text style={{color: 'teal', fontSize: 15}}>No</Text>
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {props.navigation.navigate(LandingPage),  setModalVisible(false)}} style={[styles.button, {margin:5, borderColor:'red'}]}>
                        
                                        <Text style={{color: 'red', fontSize: 15}}>Yes, Log out</Text>
                                    
                                    </TouchableOpacity>
                                </View>

                            </View>


                    
                    </Modal>
    </View>
 
     );
}
 
export default SupportPage;
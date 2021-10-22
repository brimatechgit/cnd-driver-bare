import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import styles from './styles';
import { Card } from 'react-native-paper';
import ManageDocsPage from '../../screens/AccountPage/DrawerPages/ManageDocs/ManageDocs';
import BankDetailsPage from '../../screens/AccountPage/DrawerPages/BankDetails/BankDetails';
import ChangePassword from '../../screens/AccountPage/DrawerPages/ChangePassw/ChangePassword';



function CustomDrawerContent(props) {
    const width = useWindowDimensions().width * 0.3;
  
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.menuContainer}>
  
          <View style={{height:'55%', alignItems: 'center'}}>
            <View style={{borderRadius: 50, backgroundColor: 'black', padding: 10}}><Icon name='person' size={65} color='white'></Icon></View>
  
            <View style={{padding: 14, alignItems: 'center'}}>
              <Text>Name and Surname</Text>
              <Text style={{fontSize: 10}}>gmail Account | Mobile</Text>
            </View>
  
              <View style={{flexDirection:'row'}}>
                <Icon name='directions-car' size={45}></Icon>
                <View style={{paddingLeft: 10}}>
                  <Text style={{fontSize: 10}}>Number of Trips</Text>
                  <Text >13 Trips</Text>
                </View>
              </View>
          </View>
          <View
            style={[
              styles.menuItemsCard,
              {  width: '100%'},
            ]}>
                <View style={{margin: 5}}>
                    <Card style={{borderRadius: 50, elevation: 4}}>
                        <MIcon name='file-document' size={35} style={{padding: 5}}></MIcon>
                    </Card>
                </View>
                <Pressable onPress={() => props.navigation.navigate(ManageDocsPage)} style={{flexDirection: 'row', justifyContent:'space-between', width: '75%'}}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '100', paddingLeft: 10}}>Documents</Text>
                    <Icon name='keyboard-arrow-right' size={25}></Icon>
                </Pressable>
          </View>
          <View
            style={[
              styles.menuItemsCard,
              {  width: '100%' },
            ]}>
                <View style={{margin: 5}}>
                    <Card style={{borderRadius: 50, elevation: 4}}>
                        <MIcon name='bank' size={35} style={{padding: 5}}></MIcon>
                    </Card>
                </View>
                <Pressable onPress={() => props.navigation.navigate(BankDetailsPage)} style={{flexDirection: 'row', justifyContent:'space-between', width: '75%'}}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '100', paddingLeft: 10}}>Payment</Text>
                    <Icon name='keyboard-arrow-right' size={25}></Icon>
                </Pressable>
          </View>
          <View
            style={[
              styles.menuItemsCard,
              {  width: '100%',  },
            ]}>
                <View style={{margin: 5}}>
                    <Card style={{borderRadius: 50, elevation: 4}}>
                        <MIcon name='key-variant' size={35} style={{padding: 5}}></MIcon>
                    </Card>
                </View>
                <Pressable onPress={() => props.navigation.navigate(ChangePassword)}  style={{flexDirection: 'row', justifyContent:'space-between', width: '75%'}}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '100', paddingLeft: 10}}>Change Password</Text>
                    <Icon name='keyboard-arrow-right' size={25}></Icon>
                </Pressable>
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }


  export default CustomDrawerContent;
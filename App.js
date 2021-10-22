import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigationBar from './CustomNavBar';
import DocumentsPage from './src/screens/documentsPage/DocumentsPage';
import PersonalDetailsPage from './src/screens/documentsPage/PersonalDetailsPage/PersonalDetails';
import FicaDocsPage from './src/screens/documentsPage/FicaDocsPage/FicaDocsPage';
import VehicleDetailsPage from './src/screens/documentsPage/VehicleDetailsPage/VehicleDetailsPage';
import BankingPage from './src/screens/documentsPage/BankingPage/BankingPage';
import ModalTester from './src/components/DetailsCard/ResAddress/DetailsClass';
import HomePage from './src/screens/HomePage/HomePage';
import ApprovalPage from './src/screens/documentsPage/ApprovalPage/ApprovalPage';
import AccountPage from './src/screens/AccountPage/AccountPage';
import AccountSettings from './src/screens/AccountPage/AccountSettings/AccountSettings';
import SupportPage from './src/screens/AccountPage/SupportPage/SupportPage';
import CndTerms from './src/screens/documentsPage/CndTerms/CndTerms';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import CustomDrawerContent from './src/components/customDrawerCompo/CustomDrawer';
import ManageDocsPage from './src/screens/AccountPage/DrawerPages/ManageDocs/ManageDocs';
import BankDetailsPage from './src/screens/AccountPage/DrawerPages/BankDetails/BankDetails';
import ChangePassword from './src/screens/AccountPage/DrawerPages/ChangePassw/ChangePassword';
import SplashPage from './src/screens/LandingPage/splashScreen/splashPage';
import LandingPage from './src/screens/LandingPage/LandingPage';
import LoginPage from './src/screens/LoginPage/LoginPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import Verification from './src/screens/LoginPage/Verification/Verification';
import PoliciesPage from './src/screens/AccountPage/SupportPage/PoliciesPage/PoliciesPage';
import TermsAndCo from './src/components/TermsAndC/TermsAndC';
import TermsPage from './src/screens/AccountPage/SupportPage/TermsPage/TermsPage';
import ContactPage from './src/screens/AccountPage/SupportPage/ContactUs/ContactPage';
import ManageVehiclesPage from './src/screens/AccountPage/SupportPage/ManageVehicles/ManageVehiclePage';
import EmergencyPage from './src/screens/AccountPage/SupportPage/EmergencyContacts/EmergancyPage';
import PersonalPage from './src/screens/AccountPage/PersonalDetails/PersonalDetPage';
import LoginTerms from './src/screens/LoginPage/loginTerms/loginTerms';
import BookingsPage from './src/screens/AccountPage/SupportPage/Bookings/BookingsPage';
import BookingsSummary from './src/screens/AccountPage/SupportPage/Bookings/HistorySummary';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();




function UserDrawerPage() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen options={{headerShown: false}} name="HomePage" component={HomePage} />
      <Drawer.Screen options={{headerShown: false}} name="ManageDocsPage" component={ManageDocsPage} />
      <Drawer.Screen options={{headerShown: false}} name="BankDetailsPage" component={BankDetailsPage} />
      <Drawer.Screen options={{headerShown: false}} name="ChangePassword" component={ChangePassword} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="SplashPage"
       screenOptions={{
        header: CustomNavigationBar,
      }}
      >
        <Stack.Screen name="Home" component={UserDrawerPage} />
        <Stack.Screen options={{headerShown: false}} name="SplashPage"  component={SplashPage} />
        <Stack.Screen options={{headerShown: false}} name="LandingPage"  component={LandingPage} />
        <Stack.Screen name="LoginPage"  component={LoginPage} />
        <Stack.Screen name="RegisterPage"  component={RegisterPage} />
        <Stack.Screen name="Verification"  component={Verification} />
        <Stack.Screen  name="DocumentsPage" component={DocumentsPage} />
        <Stack.Screen  name="PersonalDetailsPage" component={PersonalDetailsPage} />
        <Stack.Screen  name="VehicleDetailsPage" component={VehicleDetailsPage} />
        <Stack.Screen  name="FicaDocsPage" component={FicaDocsPage} />
        <Stack.Screen  name="BankingPage" component={BankingPage} />
        <Stack.Screen  name="ApprovalPage" component={ApprovalPage} />
        <Stack.Screen  name="SupportPage" component={SupportPage} />
        <Stack.Screen name="PoliciesPage" component={PoliciesPage} />
        <Stack.Screen name="TermsAndCo" component={TermsAndCo} />
        <Stack.Screen name="TermsPage" component={TermsPage} />
        <Stack.Screen name="ContactPage" component={ContactPage} />
        <Stack.Screen name="PersonalPage" component={PersonalPage} />
        <Stack.Screen name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen name="ManageVehiclesPage" component={ManageVehiclesPage} />
        <Stack.Screen name="LoginTerms" component={LoginTerms} />
        <Stack.Screen name="EmergencyPage" component={EmergencyPage} />
        <Stack.Screen  name="AccountSettings" component={AccountSettings} />
        <Stack.Screen  name="BookingsPage" component={BookingsPage} />
        <Stack.Screen  name="BookingsSummary" component={BookingsSummary} />
        <Stack.Screen  name="CndTerms" component={CndTerms} />
        <Stack.Screen options={{headerShown: false}}  name="AccountPage" component={AccountPage} />
        {/* <Stack.Screen options={{headerShown: false}}  name="AccountPage" component={UserDrawerPage} /> */}
        <Stack.Screen  name="ModalTester" component={ModalTester} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



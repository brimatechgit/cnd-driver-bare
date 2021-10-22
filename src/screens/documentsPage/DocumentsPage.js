import React from 'react';
import { View, Text, Pressable } from 'react-native';
import AppBar from '../../components/AppBar/AppBar';
import DocumentCard from '../../components/documentCard/documentCard';
import LoginTerms from '../LoginPage/loginTerms/loginTerms';
import styles from './ApprovalPage/styles';

const DocumentsPage = ({navigation}) => {

    const verifyText = 'We need to verify your documents to activate your account';

    const TermsandCo = 'Agree to our Terms & Conditions';

    const agreeText = 'By clicking Submit registeration you agree to our Terms & Conditions';

    return ( 
        <View  style={{padding: 30, justifyContent:'center', flexDirection: 'column', flex:1}}>
        
        
           <View style={{paddingBottom: 55}}>
                <DocumentCard
                    id = '1'
                    title = 'Personal Details'
                    subText = 'sub text'
                    navPage = 'PersonalDetailsPage'
                    navigation={navigation}
                    >
                </DocumentCard>
                
            </View>
           <View style={{paddingBottom: 55}}>
                <DocumentCard
                    id = '2'
                    title = 'Banking Details'
                    subText = 'sub text'
                    navPage = 'BankingPage'
                    navigation={navigation}
                    >
                </DocumentCard>
                
            </View>

           <View style={{paddingBottom: 25}}><DocumentCard
            id = '3'
            title = 'Vehicle Details'
            subText = 'sub text'
            navPage = 'VehicleDetailsPage'
            navigation={navigation}
            >
            </DocumentCard>
            
            </View>
            <Text style={{paddingBottom: 20, fontSize: 11, justifyContent: 'center', textAlign: 'center'}}>{verifyText}</Text>
           
           <View style={{paddingBottom: 25}}>
                <DocumentCard
                id = '4'
                title = 'Upload Documents'
                subText = 'sub text'
                navPage = 'FicaDocsPage'
                navigation={navigation}
                >
                </DocumentCard>
            </View>
            <Text style={{paddingBottom: 30, fontSize: 11,justifyContent: 'center', textAlign: 'center'}}>{verifyText}</Text>
           
           <View style={{paddingBottom: 25}}>
                <DocumentCard
                id = '5'
                title = 'Terms & Conditions'
                subText = 'sub text'
                navPage = 'CndTerms'
                navigation={navigation}
                >
                </DocumentCard>
            </View>
            <Text style={{paddingBottom: 30, fontSize: 11,justifyContent: 'center', textAlign: 'center', }}>Agree to our <Pressable onPress={() => navigation.navigate(LoginTerms)} ><Text style={{color:'teal', top:5}}> Terms & Conditions</Text></Pressable></Text>



            <View style={{justifyContent: 'center', alignItems: 'center',elevation: 5}}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('ApprovalPage')}>
                    <Text style={{color: 'black', fontSize: 18}}>Submit Registration</Text>
                </Pressable>
            </View>
            <View style={{height: 20}}></View>
            <View style={{alignItems:'center'}}>

            <Text style={{ fontSize: 11, justifyContent: 'center', textAlign: 'center', width: '65%'}}>{agreeText}</Text>
            </View>

    </View>
        
     );
}
 
export default DocumentsPage;
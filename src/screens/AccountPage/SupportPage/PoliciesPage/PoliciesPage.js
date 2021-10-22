import React from 'react';
import { View, Text, Pressable } from 'react-native';
import {Card} from 'react-native-paper';
import IconIonic from 'react-native-vector-icons/Ionicons';


const PoliciesPage = props => {
    return ( 
        <View style={{flex:1, padding: 15}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize: 22, fontWeight: '600'}}>Policies/Legal</Text>
            </View>
            <View style={{height: 20}}></View>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Drivers Agreement'})}>

                <Card style={{margin: 10,borderRadius: 25, elevation: 5}}>
                    <View style={{flexDirection:'row',  justifyContent: 'space-between', padding: 20}}>
                        <Text>Driver Agreement</Text>
                        <IconIonic name='chevron-forward' size={15}></IconIonic>

                    </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Privacy Policy'})}>

                <Card style={{margin: 10,  borderRadius: 25, elevation: 5}}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 20}}>

                        <Text>Privacy Policy</Text>
                        <IconIonic name='chevron-forward' size={15}></IconIonic>
                    </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Anti-Fraud Policy'})}>

                <Card style={{margin: 10,  borderRadius: 25, elevation: 5}}>
                    
                <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 20}}>
                    <Text>Anti-Fraud Policy</Text>
                    <IconIonic name='chevron-forward' size={15}></IconIonic>
                </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Compliant Handling Policy'})}>
                
                <Card style={{margin: 10, borderRadius: 25, elevation: 5}}>
                <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 20}}>
                    <Text>Compliant Handling Policy</Text>
                    <IconIonic name='chevron-forward' size={15}></IconIonic>
                </View>
                </Card>
            </Pressable>
            
        </View>
     );
}
 
export default PoliciesPage;
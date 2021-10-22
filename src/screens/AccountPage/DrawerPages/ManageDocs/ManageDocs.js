import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import {Card}from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const ManageDocsPage = props => {
    return ( 
        <View style={{flex:1, padding: 15}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row', justifyContent:'center'}}>
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../../../assets/image/Document2.png')} />
                <Text style={{paddingLeft:15, fontSize: 22, fontWeight: '600', color: 'black'}}>Manage documents</Text>
            </View>

            <View style={{paddingBottom: 35}}>
                <View style={styles.textView}>
                    <Text style={{fontSize: 18}}>Drivers License</Text>
                    <View style={{flexDirection:'row'}}>
                        
                        <View style={styles.iconStyle}>
                            <Icon name={'file-download'} size={15} style={{margin: 5}}></Icon>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name={'edit'} size={15} style={{margin: 5,}}></Icon>
                        </View>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={{fontSize: 18}}>License Disc</Text>
                    <View style={{flexDirection:'row'}}>
                        
                        <View style={styles.iconStyle}>
                            <Icon name={'file-download'} size={15} style={{margin: 5}}></Icon>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name={'edit'} size={15} style={{margin: 5,}}></Icon>
                        </View>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={{fontSize: 18}}>Vehicle Photo's</Text>
                    <View style={{flexDirection:'row'}}>
                        
                        <View style={styles.iconStyle}>
                            <Icon name={'file-download'} size={15} style={{margin: 5}}></Icon>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name={'edit'} size={15} style={{margin: 5,}}></Icon>
                        </View>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={{fontSize: 18}}>Insurance Documents</Text>
                    <View style={{flexDirection:'row'}}>
                        
                        <View style={styles.iconStyle}>
                            <Icon name={'file-download'} size={15} style={{margin: 5}}></Icon>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name={'edit'} size={15} style={{margin: 5}}></Icon>
                        </View>
                    </View>
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text style={{fontSize: 18}}>Owner Affidavit</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        
                        <View style={styles.iconStyle}>
                            <Icon name={'file-download'} size={15} style={{margin: 5}}></Icon>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name={'edit'} size={15} style={{margin: 5,}}></Icon>
                        </View>
                    </View>
                </View>
            </View>


            <View>
                {/* screening documents */}
                <Text style={{fontSize: 25, fontWeight:'bold'}}>Screening Documents</Text>
                <View style={styles.textView}>
                    <Text style={{fontSize: 18}}>Proof of Residence</Text>
                    <View style={{flexDirection:'row'}}>
                        
                        <View style={styles.iconStyle}>
                            <Icon name={'file-download'} size={15} style={{margin: 5}}></Icon>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name={'edit'} size={15} style={{margin: 5,}}></Icon>
                        </View>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={{fontSize: 18}}>Proof of Bank Account</Text>
                    <View style={{flexDirection:'row'}}>
                        
                        <View style={styles.iconStyle}>
                            <Icon name={'file-download'} size={15} style={{margin: 5}}></Icon>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name={'edit'} size={15} style={{margin: 5,}}></Icon>
                        </View>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={{fontSize: 18}}>Police Clearance Certificate</Text>
                    <View style={{flexDirection:'row'}}>
                        
                        <View style={styles.iconStyle}>
                            <Icon name={'file-download'} size={15} style={{margin: 5}}></Icon>
                        </View>
                        <View style={styles.iconStyle}>
                            <Icon name={'edit'} size={15} style={{margin: 5,}}></Icon>
                        </View>
                    </View>
                </View>
                
            </View>
        </View>
     );
}
 
export default ManageDocsPage;



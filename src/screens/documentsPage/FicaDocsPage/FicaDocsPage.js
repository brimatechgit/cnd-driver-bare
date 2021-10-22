import React from 'react';
import styles from './styles';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


const FicaDocsPage = () => {

    const [text, onChangeText] = React.useState("");
    const [resAdr, onChangeResAdr] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [sname, onChangeSname] = React.useState("");
    const [moNumber, onChangeNumber] = React.useState(null);
    const [IdNumber, onChangeId] = React.useState(null);

    return ( 
        
        <View style={{
            overflow: 'hidden', paddingBottom: 5,
            top: '5%'
        }}>
            {/* <Card style={{margin: 10, elevation: 5, borderRadius: 25, height: '85%'}}> */}
            <View style={styles.container}>
                
                   

                    
                    <View>
                        
                    <View style={{position: 'relative', top: 0, left:0}}>
                            <Card style={{height: 250,padding:10, elevation: 10, marginTop: 35, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                            <View style={{justifyContent: 'center', top: 30}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.text}>Drivers License</Text>
                                <View style={styles.iconCircle}>
                                    <Text>
                                        <Icon name="plus" size={15} color="white"></Icon>
                                    </Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.text}>License Disc</Text>
                                <View style={styles.iconCircle}>
                                    <Text>
                                        <Icon name="plus" size={15} color="white"></Icon>
                                    </Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.text}>Vehicle Photo's </Text>
                                <View style={styles.iconCircle}>
                                    <Text>
                                        <Icon name="plus" size={15} color="white"></Icon>
                                    </Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.text}>Insurance Documents</Text>
                                <View style={styles.iconCircle}>
                                    <Text>
                                        <Icon name="plus" size={15} color="white"></Icon>
                                    </Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{alignItems:'center', }}>
                                    <Text style={styles.text}>Owner Affidavite</Text>
                                    <Text style={{fontSize:8, bottom:'5%'}}>(Only applicable if the vehicle is not yours)</Text>
                                </View>
                                <View style={styles.iconCircle}>
                                    <Text>
                                        <Icon name="plus" size={15} color="white"></Icon>
                                    </Text>
                                </View>
                            </View></View>
                            </Card>
                        </View>                     
                    </View> 

                    <View style={styles.main}>
                            <View style={styles.textCard}><Text style={{fontSize: 22, paddingLeft: 10}}>Upload your documents</Text></View>
                            <View style={styles.numCircle}><Text style={{fontSize: 25, color: 'white'}}>3</Text></View>
                        </View>


                <View style={styles.subMain}>
                    <View>
                        
                    <Card style={{height: 200,padding:10, elevation: 5, marginTop: 35, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                        <View style={{top: 15}}>
                            <View style={{flexDirection: 'row', paddingBottom:10}}>
                                <Text style={styles.text}>Screening Documents</Text>
                                <View style={{justifyContent: 'center', left: '190%'}}><Icon name="chevron-down" size={20} color="black"></Icon></View>
                            </View>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.text}>Proof of residence</Text>
                                    <View style={styles.iconCircle}>
                                        <Text>
                                            <Icon name="plus" size={15} color="white"></Icon>
                                        </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.text}>Proof of Bank Account</Text>
                                    <View style={styles.iconCircle}>
                                        <Text>
                                            <Icon name="plus" size={15} color="white"></Icon>
                                        </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.text}>Police Clearance Certificate </Text>
                                    <View style={styles.iconCircle}>
                                        <Text>
                                            <Icon name="plus" size={15} color="white"></Icon>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Card>
                    </View>

                    <View style={{height:5, elevation: 22}}>

                    </View>
                    
                   
                </View >
                
                
            </View>
            <View style={{height: 15}}></View>
            <View style={{justifyContent: 'center', alignItems: 'center', }}>
                <Pressable style={styles.button} onPress={console.log('here')}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View>
            
                
            {/* </Card> */}
        </View>

        
     );
}
 
export default FicaDocsPage;
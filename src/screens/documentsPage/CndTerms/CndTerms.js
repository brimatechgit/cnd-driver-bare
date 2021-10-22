import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-paper';
import styles from './styles';

const CndTerms = props => {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu. Id consectetur purus ut faucibus. Ridiculus mus mauris vitae ultricies. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. In ante metus dictum at tempor commodo. Duis at consectetur lorem donec massa. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Quam elementum pulvinar etiam non quam. Etiam sit amet nisl purus. Faucibus ornare suspendisse sed nisi lacus. Blandit massa enim nec dui nunc mattis enim ut tellus. Porta lorem mollis aliquam ut. At urna condimentum mattis pellentesque.';
    const [isSelected, setSelection] = useState(false);

    return ( 
        
         
        <View style={styles.container}>
           
                
                        
                    <View style={{top: '20%', left:0}}>
                            
                        <Text style={{fontSize: 15,letterSpacing: 0.5}}>{lorem}</Text>
                            <View style={{height: 15}}></View>
                                    <View style={{ flexDirection: 'row', alignItems:'center'}}>
                        {/* I agree to the Terms & Conditions and Privacy Policy */}
                        {/* <Icon name='verified' size={15} style={{top: 4}}></Icon> */}
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                        <Text style={{fontSize:12}}>I agree to the <Pressable onPress={() => props.navigation.navigate(PoliciesPage)}><Text style={{fontSize:12, color: 'teal', top: 3}}>Terms & Conditions</Text></Pressable></Text>
                                    </View>  

                            <View style={{height: 15}}></View>
                        <View style={{ elevation: 5 }}>
                            <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                                <Text style={{ fontSize: 15, color:'black'}}>Download</Text>
                            </Pressable>
                        </View>      
                    </View> 


                    
            
            {/* have an error wen fields are empty */}
            {/* <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, bottom: 25 }}>
                <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                    <Text style={{color: 'black', fontSize: 20}}>SUBMIT</Text>
                </Pressable>
            </View> */}

            <View style={styles.main}>
                <View style={styles.textCard}><Text style={{fontSize: 22, paddingLeft: 10, textAlign: 'center'}}>Terms & Conditions</Text></View>
                <View style={styles.numCircle}><Text style={{fontSize: 25, color: 'white'}}>5</Text></View>
            </View>


        </View>
        
        
     );
}
 
export default CndTerms;
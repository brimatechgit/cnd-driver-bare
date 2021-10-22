import React from 'react';
import { View, Text, Button, Pressable, } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DocumentCard = (props) => {

    

    return ( 
        <View style={styles.container}>
            <Pressable  onPress={() => props.navigation.navigate(props.navPage)}>
            <View style={[styles.textCard, {flexDirection:'row', top: '3%', padding:15}]}>
                <View/>
                <Text style={styles.title}>{props.title}</Text>
                <Icon name="chevron-forward" size={25} ></Icon>
            </View>
            
            </Pressable>
            <View style={styles.numCircle}><Text style={{fontSize: 25}}>{props.id}</Text></View>
        </View>
     );
}
 
export default DocumentCard;
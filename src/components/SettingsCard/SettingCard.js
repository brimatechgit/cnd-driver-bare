import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


const SettingsCard = props => {
    return ( 
        <View>
            <Card style={{flexDirection: 'row'}}>
                <Icon></Icon>
                <Text >{props.title}</Text>
                <Icon></Icon>
            </Card>
        </View>
     );
}
 
export default SettingsCard;
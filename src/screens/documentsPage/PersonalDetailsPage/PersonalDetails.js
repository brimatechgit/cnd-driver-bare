import React from 'react';
import { View } from 'react-native';
import DetailsCard from '../../../components/DetailsCard/DetailsCard';


function PersonalDetailsPage ({ navigation }) {
    return ( 
        <View>
            <DetailsCard navigation={navigation} ></DetailsCard>
        </View>
     );
}
 
export default PersonalDetailsPage;
import React from 'react'
import { View, Text } from 'react-native'
import DropOffMapComponent from '../../components/MapComponent/DropOffMapComponent'

const DropOffNavPage = ({navigation, route}) => {

    const{dropoff, docID, userLocation} = route.params

    return (
        <View>
            <DropOffMapComponent navigation={navigation} userLocation={userLocation} docID={docID} dropoff={dropoff}></DropOffMapComponent>
        </View>
    )
}

export default DropOffNavPage

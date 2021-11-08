import React from 'react'
import { View, Text } from 'react-native'
import BottomSenderArrived from '../../components/BottomSenderArrived/BottomSenderArrived'
import DropOffMapComponent from '../../components/MapComponent/DropOffMapComponent'
import MapComponent from '../../components/MapComponent/MapComponent'

const SenderArrivedPage = ({route, navigation}) => {

    const[dropoff, docID] = route.params

    return (
        <View>
            <MapComponent navigation={navigation}></MapComponent>

            <BottomSenderArrived navigation={navigation} dropoff={dropoff} docID={docID}></BottomSenderArrived>
           {/* <DropOffMapComponent dropoff={dropoff} navigation={navigation}></DropOffMapComponent> */}
        </View>
    )
}

export default SenderArrivedPage

import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import GetLocation from 'react-native-get-location'

const BottomSenderArrived = ({navigation, dropoff, docID}) => {



    const beginDrop = () => {
        // GetLocation.getCurrentPosition({
        //     enableHighAccuracy: true,
        //     timeout: 15000,
        //   })
        //   .then(location => {
        //     //   setCurrLoc(location.latitude );
        //     //   setCurrLong(location.longitude );
        //     //   console.log(currLoc + ' ' + currLong)
        //       console.log(location);
        //       navigation.navigate('DropOffNavPage', {
        //           userLocation: [location.latitude, location.longitude],
        //           dropoff:dropoff,
        //           docID:docID
        //       })
        //   })
        //   .catch(error => {
        //       const { code, message } = error;
        //       console.warn(code, message);
        //   })
    
    }
 
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>

            </View>


            <View style={{flexDirection:'row'}}>

                <Text>You have arrived</Text>
                <Text>|</Text>
                <Text>Sender notified</Text>
            </View>


            <Button title='Begin Drop Off' onPress={beginDrop}></Button>


        </View>
    )
}

export default BottomSenderArrived

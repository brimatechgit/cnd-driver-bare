import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: '#eee', 
        alignItems: 'center',
        
    }, 
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      overlay: {
        position: 'absolute',
        left: '82%',
        bottom: '15%',
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
      overlay2: {
          width: 55,
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
        position: 'absolute',
        left: '82%',
        bottom: '5%',
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
      iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        elevation: 5, 
        paddingRight: 20
      },
      leadIcon: {
        flex: 0,
        elevation: 5, backgroundColor: 'white', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'
     },
     textStyle: {
      alignItems: 'center', justifyContent: 'center'
     }
})

export default styles;
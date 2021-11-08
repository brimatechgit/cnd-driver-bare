import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    // container: {
    //     backgroundColor: 'white',
    //     height: '10%',
    //     borderTopEndRadius: 15,
    //     borderTopStartRadius: 15,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: 10
    // },

    container: {
        position: 'absolute',
        top: Dimensions.get('screen').height - 225,
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
        width: Dimensions.get('screen').width,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },

    status: {
        fontSize: 25,
        left: 25,
        top: 5,
        
    },

    goContainer: {
        height: 45,
        width: 45,
        right: 15,
        top: 5,
        textAlign: 'center',
        borderRadius: 50,
        backgroundColor: 'blue',
        opacity: 0.8
    },

    text: {
        fontSize:18,
        fontWeight:'bold'
    }
})
 
export default styles;
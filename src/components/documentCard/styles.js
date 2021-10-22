import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        width: 450,
    },
    
    textCard: {
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        width: 310,
        height: 55,
        top:'20%',
        elevation: 5,
        justifyContent: 'space-between',
        // flexDirection:'row'
    },
    numCircle: {
        position: 'absolute',
        left: -15,
        top: 10,
        height: 45,
        width: 45,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
    }, 
    subText: {
        fontSize: 15,
        // color: '#eee',
    }, 
    button: {
        backgroundColor: 'black',
        borderRadius: 50,
        height: 45,
        width: 105,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;
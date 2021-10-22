import React from 'react'
import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native';
import {Card}from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../../components/Button/Button';
import BookingsSummary from './HistorySummary';
// import Button from '../../../../compnents/Button/Button';


import styles from './styles';


const BookingsPage = (props) => {

    

    return ( 
        <View style={{flex:1, padding: 10}}>

            
             <View style={{alignItems:'center', padding: 15, flexDirection:'row', justifyContent:'center'}}>
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../../../assets/image/MyBookings.png')} />
                <Text style={{fontSize: 22, fontWeight: '600'}}>My Bookings</Text>
            </View>

            <View >
                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{color: 'teal',fontWeight:'bold'}}>Today</Text>
                            <Text >Last 30 Days</Text>
                            <Text>Last 90 Days</Text>
                        </View>
                </Card>

                
                    <Text>16/SEP/2021</Text>



                    <View style={{flexDirection:'row', padding: 15,alignItems:'center', justifyContent:'space-between'}}>
                    <Image 
                        style={{width: 45, height:45, paddingRight:10 }}
                        resizeMode = 'contain'
                        source={require('../../../../assets/image/CnDBike.png')} />

                        <View>
                            <Text style={{color:'gray'}}>Number of Trips</Text>
                            <Text>13 Trips</Text>
                        </View>


                        <View style={{justifyContent:'flex-end', paddingLeft:45}}>
                            <Text style={{color:'gray'}}>Revenue Generated</Text>
                            <Text>R2500.00</Text>
                        </View>
                    </View>
                

                </View>


                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}>
                    <View>
                        <Text style={{fontWeight:'bold'}}>Small Parcel</Text>
                        <Text style={{color:'gray'}}>Today - 11:41</Text>
                    </View>
                    

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>R60</Text>
                        <Pressable onPress={() => props.navigation.navigate(BookingsSummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={28}></Icon></Pressable>
                    </View>

                    
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}>
                    <View>
                        <Text style={{fontWeight:'bold'}}>Small Parcel</Text>
                        <Text style={{color:'gray'}}>Today - 11:41</Text>
                    </View>
                    

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>R60</Text>
                        <Pressable onPress={() => props.navigation.navigate(BookingsSummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={28}></Icon></Pressable>
                    </View>

                    
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}>
                    <View>
                        <Text style={{fontWeight:'bold'}}>Small Parcel</Text>
                        <Text style={{color:'gray'}}>Today - 11:41</Text>
                    </View>
                    

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>R60</Text>
                        <Pressable onPress={() => props.navigation.navigate(BookingsSummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={28}></Icon></Pressable>
                    </View>

                    
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}>
                    <View>
                        <Text style={{fontWeight:'bold'}}>Small Parcel</Text>
                        <Text style={{color:'gray'}}>Today - 11:41</Text>
                    </View>
                    

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>R60</Text>
                        <Pressable onPress={() => props.navigation.navigate(BookingsSummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={28}></Icon></Pressable>
                    </View>

                    
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}>
                    <View>
                        <Text style={{fontWeight:'bold'}}>Small Parcel</Text>
                        <Text style={{color:'gray'}}>Today - 11:41</Text>
                    </View>
                    

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>R60</Text>
                        <Pressable onPress={() => props.navigation.navigate(BookingsSummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={28}></Icon></Pressable>
                    </View>

                    
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}>
                    <View>
                        <Text style={{fontWeight:'bold'}}>Small Parcel</Text>
                        <Text style={{color:'gray'}}>Today - 11:41</Text>
                    </View>
                    

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>R60</Text>
                        <Pressable onPress={() => props.navigation.navigate(BookingsSummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={28}></Icon></Pressable>
                    </View>

                    
                </View>

                {/*<View style={styles.textView}>
                    <Pressable >
                        <Text>2021/09/18</Text>
                        
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </Pressable >

                    {/* <Pressable onPress={() => props.navigation.navigate(HistorySummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable> 
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </View>

                    {/* <Pressable onPress={() => props.navigation.navigate(HistorySummary)} style={{ justifyContent:'center'}} ><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable> 
                </View>
                <View style={styles.textView}>
                    <View>
                    
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                    
                        <Text>Friday - 12:41</Text>
                    </View>

                    {/* <Pressable onPress={() => props.navigation.navigate(HistorySummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable> 
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </View>

                    <Pressable onPress={() => console.log('hi')} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
            </View>


            <View style={{alignItems:'center'}}>
                


                {/* <Button text='Show More' navPage='' navigation={props.navigation}></Button> 
            </View> */}



            

        </View>
     );
}
 
export default BookingsPage;
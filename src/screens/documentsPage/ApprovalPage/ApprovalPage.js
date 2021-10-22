import React from 'react';
import { View, Text, Pressable,Image } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';

const ApprovalPage = props => {
    return ( 
        <View style={{justifyContent: 'center', padding: 25, alignItems: 'center'}}>
            
            <View style={{alignItems:'flex-start', paddingBottom: 25}}>
            <Text style={{fontSize: 22,}}>Registration Successful</Text>

            </View>

            <Card style={{height: 320, borderRadius: 25, width: '100%', elevation: 8}}>
                <View style={{height: '55%', elevation: 6, backgroundColor: 'black', borderTopLeftRadius: 25, borderTopRightRadius: 25, justifyContent:'center', alignItems:'center'}}>
                    {/* <Text style={{color: 'white', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 20, top: '40%'}}>woohoo</Text> */}

                    <Image 
style={{width:360, height:280}}
  resizeMode = 'contain'
source={require('../../../assets/image/WOOHOO.png')} />
                </View>
                <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}> 

                <Text style={{width: '85%', top: '80%', justifyContent: 'center', textAlign: 'center', fontSize: 18}}>Congratulations your Account has been registered</Text>
                </View>
            </Card>


            {/* start drive button here */}
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, top: 45, width: "85%" }}>
                <Pressable style={styles.button} onPress={() => props.navigation.navigate('Home')}>
                    <Text style={{color: 'black', fontSize: 20}}>Start Drive</Text>
                </Pressable>
            </View>
            
        </View>
     );
}
 
export default ApprovalPage;
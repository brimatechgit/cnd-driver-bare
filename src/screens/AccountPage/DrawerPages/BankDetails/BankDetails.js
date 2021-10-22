import React from 'react'
import { View, Text,TextInput, Image } from 'react-native';
import styles from './styles';

const BankDetailsPage = () => {

    const [accName, onChangeAccName] = React.useState("Brima Tech");
    const [accNum, onChangeAccNum] = React.useState('84885884838');
    const [accType, onChangeAccType] = React.useState("Savings");
    const [branchName, onChangeBranchName] = React.useState('57385955');
    const [branchCode, onChangeBranchCode] = React.useState("Boksburg");


    return ( 
        <View style={{flex:1, padding: 15}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row', justifyContent:'center'}}>
            <Image 
style={{width: 45, height:45 }}
  resizeMode = 'contain'
source={require('../../../../assets/image/BankingDetails.png')} />
                <Text style={{paddingLeft:15,fontSize: 22, fontWeight: '600'}}>Bank Details</Text>
            </View>

            <View style={{padding: 10}}>
                <Text style={styles.text}>Account Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeAccName}
                    value={accName}
                />
            </View>
            <View style={{padding: 10}}>
                <Text style={styles.text}>Account Number:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeAccNum}
                    value={accNum}
                />
            </View>
            <View style={{padding: 10}}>
                <Text style={styles.text}>Account Type:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeAccType}
                    value={accType}
                />
            </View>
            <View style={{padding: 10}}>
                <Text style={styles.text}>Branch Code:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeBranchCode}
                    value={branchCode}
                    keyboardType='number-pad'
                />
            </View>
            <View style={{padding: 10}}>
                <Text style={styles.text}>Branch Name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeBranchName}
                    value={branchName}
                />
            </View>
        </View>
     );
}
 
export default BankDetailsPage;
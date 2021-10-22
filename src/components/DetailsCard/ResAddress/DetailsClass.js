import React, { useState } from "react";
import { Button, Text, View, Pressable, TextInput } from "react-native";
import Modal from "react-native-modal";
import styles from './styles';

function ModalTester(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [streetName, onChangeStreetName] = React.useState('');
  const [buildingName, onChangeBuildingName] = React.useState('');
  const [streetNumber, onChangeStreetNumber] = React.useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View >
      {/* <Button title="Show modal" onPress={toggleModal} /> */}

      <Pressable onPress={toggleModal}>
                        <View pointerEvents="none">
                            {/* <Text></Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeBuildingName}
                                value={buildingName}
                                placeholder='Building name'
                            />

                        </View>
                        </Pressable>
                        <Pressable onPress={toggleModal}>
                        <View pointerEvents="none">
                            {/* <Text>Street Name</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetName}
                                value={streetName}
                                placeholder='Street Name'  
                            />

                        </View>
                        </Pressable>
                        <Pressable onPress={toggleModal}>
                        <View pointerEvents="none">
                            {/* //should navigate to google search page */}
                            {/* <Text>Address</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetNumber}
                                value={streetNumber}
                                placeholder='Street Number'  
                            />
                        </View>
                        </Pressable>
      
      
      
      
      
      
      
      
      
      <Modal isVisible={isModalVisible}
        hasBackdrop={false}
      >
        <View style={{
    left: 50,
    height: 250,
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 20,
    padding: 10,
    borderRadius: 25,
}}>
    
                        <View>
                            {/* <Text></Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeBuildingName}
                                value={buildingName}
                                placeholder='Building name'
                            />

                        </View>
                        <View>
                            {/* <Text>Street Name</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetName}
                                value={streetName}
                                placeholder='Street Name'  
                            />

                        </View>
                        <View>
                            {/* //should navigate to google search page */}
                            {/* <Text>Address</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetNumber}
                                value={streetNumber}
                                placeholder='Street Number'  
                            />
                        </View>
    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 15,}}>
                <Pressable style={styles.button} onPress={toggleModal}>
                    <Text style={{color: 'black', fontSize: 20}}>ENTER</Text>
                </Pressable>
            </View>
</View>

          
       
      </Modal>
    </View>
  );
}

export default ModalTester;

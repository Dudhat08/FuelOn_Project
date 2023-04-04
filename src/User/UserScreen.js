import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Linking } from 'react-native'
import React, { useState } from 'react'
import { image } from '../Helper/ImageHelper'
import * as Animatable from 'react-native-animatable';

const UserScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  // const dialPadUrl = `tel:${phoneNumber}`;
  // Linking.openURL('www.google.com')
  // .catch((err) => console.error('Failed to open URL: ', err));

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible)

  };
  const toggleModal1 = () => {
    setModalVisible1(!modalVisible1);
  };
  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2);
  };
  const toggleModal3 = () => {
    setModalVisible3(!modalVisible3);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4C50B', }}>
      <View style={{
        height: 50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderRadius: 14,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
        <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 15, marginTop: 15 }} onPress={() => navigation.goBack('')}>
          <Image source={image?.backicon} style={{ height: 25, width: 25, }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 95 }}>Profile</Text>
        <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 83, marginTop: 15 }} onPress={() => navigation.navigate('Notifications')}>
          <Image source={image.notification} style={{ height: 25, width: 25, marginLeft: 10 }} resizeMode={'contain'} />
        </TouchableOpacity>

      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          borderWidth: 3,
          height: 140,
          width: 140,
          borderRadius: 100,
          marginLeft: 125
        }}>
        <Image source={image.account} style={{ height: 100, width: 100 }} resizeMode={'contain'} />
      </View>

      <View style={{ borderWidth: 1, width: 365, marginTop: 30, marginLeft: 15 }}></View>
  
         <Modal
         animationType="fade"
        
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
           Alert.alert('Modal has been closed.');
         }}>
          <View 
    style={[styles.modal,{ backgroundColor: 'rgba(0,0,0,0.5)'}]}
    >
           <Animatable.View
        // animation="zoomInUp"
animation={modalVisible ? 'zoomIn' :'zoomOut'}
        duration={500}
        style={styles.modal}
        // onAnimationEnd={' '}


      >
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignItems: 'center' }}>About Us</Text>
            <Text style={{ alignItems: 'center' }}>This is FuelOn Application developed in React Native based on javascript </Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignItems: 'center', marginTop: 10 }}> Team Members:</Text>
            <Text style={{ fontSize: 20 }}>Dharmik Dudhat {"\n"}
              Srusti Butani{"\n"}
              Rucha Dave{"\n"}
              Krushna Thapliya{"\n"}
              Astha Dave</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
          </Animatable.View>
          </View>
        </Modal>
      
      <TouchableOpacity style={{ height: 40, marginTop: 20, width: 200, marginLeft: 30 }} onPress={toggleModal}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={image.about} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
            About Us
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 40, marginTop: 20, width: 270, marginLeft: 30,}} onPress={()=>navigation.navigate('tracker')}>
       <View style={{ flexDirection: 'row' }}>
          <Image source={image.location} style={{ height: 40, width: 40, }} resizeMode={'contain'} />
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
            Track My Order
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignItems: 'center', padding: 7 }}>-- Contact Us --</Text>

            <TouchableOpacity onPress={() => Linking.openURL(`tel:+918866831344`)} style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
              <Image source={image.phoneCall} style={{ height: 40, width: 40, marginTop: -5 }} resizeMode='contain' />
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Dharmik Dudhat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:+918238261617`)} style={{ flexDirection: 'row', textAlign: 'left', marginTop: 20 }}>
              <Image source={image.phoneCall} style={{ height: 40, width: 40, marginTop: -5, marginLeft: -28 }} resizeMode='contain' />
              <Text style={{ fontSize: 20, marginLeft: 15, }}>Srusti Butani</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:+919979850438`)} style={{ flexDirection: 'row', marginTop: 20, }}>
              <Image source={image.phoneCall} style={{ height: 40, width: 40, marginTop: -5, marginLeft: -37 }} resizeMode='contain' />
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Rucha Dave</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:+9175675044555`)} style={{ flexDirection: 'row', marginTop: 20, }}>
              <Image source={image.phoneCall} style={{ height: 40, width: 40, marginTop: -5, marginLeft: 9 }} resizeMode='contain' />
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Krushna Thapliya</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:+918401630958`)} style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={image.phoneCall} style={{ height: 40, width: 40, marginTop: -5, marginLeft: -44 }} resizeMode='contain' />
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Astha Dave</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal1}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={{ height: 40, marginTop: 20, width: 220, marginLeft: 30 }} onPress={toggleModal1}>
        <View style={{ flexDirection: 'row', }}>
          <Image source={image.contact} style={{ height: 40, width: 40, }} resizeMode={'contain'} />
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
            Contact Us
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignItems: 'center' }}>Privacy & Policy</Text>
            <Text style={{ fontSize: 15, marginTop: 20 }}>We access your location while you open our app because we want to we provide best service to you and help in rich you at your place on time.</Text>
            <Text style={{ marginTop: 20 }}>-- Thank you --</Text>
            <TouchableOpacity onPress={toggleModal2}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={{ height: 40, marginTop: 20, width: 280, marginLeft: 30 }} onPress={toggleModal2}>
        <View style={{ flexDirection: 'row', }}>
          <Image source={image.privacy} style={{ height: 40, width: 40, }} resizeMode={'contain'} />
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
            Privacy & Policy
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignItems: 'center' }}>Terms & Conditions</Text>
            <Text style={{ marginTop: 10 }}>Coming Soon....</Text>
            <TouchableOpacity onPress={toggleModal3}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={{ height: 40, marginTop: 20, width: 400, marginLeft: 30, marginTop: 20 }} onPress={toggleModal3}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={image.conditions} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>
            Terms and conditions
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    marginTop: 10,
    color: 'black',
    borderWidth: 2,
    borderRadius: 7,
    height: 30,
    width: 50,
    padding: 4,
    fontSize: 15

  },
})
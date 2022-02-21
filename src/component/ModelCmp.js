import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../helper/Colors';
import ContainerStyles from '../helper/ContainerStyles';

const ModelCmp = ({title,modalVisible, setModalVisible,yesPress}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[ContainerStyles.text14, {color: Colors.text6}]}>
              {title}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <DropShadow
                style={[ContainerStyles.shadow2, styles.shadowContainer]}>
                <TouchableOpacity style={styles.buttoncontainer} onPress={yesPress}>
                  <Text style={ContainerStyles.text19}>{'Yes'}</Text>
                </TouchableOpacity>
              </DropShadow>

              <DropShadow
                style={[ContainerStyles.shadow2, styles.shadowContainer]}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.buttoncontainer}>
                  <Text style={ContainerStyles.text19}>{'No'}</Text>
                </TouchableOpacity>
              </DropShadow>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: '#C4C4C480',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
  buttoncontainer: {
    height: wp(15),
    width: wp(30),
    borderRadius: wp(3),

    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowContainer: {
    height: hp(15),
    width: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModelCmp;

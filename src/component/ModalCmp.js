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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DropShadow from 'react-native-drop-shadow';
import ContainerStyles from '../helper/ContainerStyles';

import Colors from '../helper/Colors';
const ModalCmp = ({onPress}) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {'Are You Sure Want To Report this from your profile?'}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                height: hp(10),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: '50%', alignItems: 'center'}}>
                <DropShadow style={ContainerStyles.shadow1}>
                  <TouchableOpacity
                    onPress={
                      onPress !== undefined
                        ? onPress
                        : () => setModalVisible(!modalVisible)
                    }
                    style={[
                      styles.buttonpress,
                      {
                        borderColor:
                          modalVisible === false ? Colors.bg : Colors.white,
                      },
                    ]}>
                    <Text style={styles.text}>{'Yes'}</Text>
                  </TouchableOpacity>
                </DropShadow>
              </View>

              <View style={{width: '50%', alignItems: 'center'}}>
                <DropShadow style={ContainerStyles.shadow1}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={[
                      styles.buttonpress,
                      {
                        borderColor:
                          modalVisible === true ? Colors.bg : Colors.white,
                      },
                    ]}>
                    <Text style={styles.text}>{'No'}</Text>
                  </TouchableOpacity>
                </DropShadow>
              </View>
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

    backgroundColor: '#ffffff90',
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
    fontSize: wp(5),
    fontWeight: '500',
  },
  buttonpress: {
    height: wp(20),
    width: wp(27),
    backgroundColor: Colors.white,
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    fontWeight: '400',
    fontSize: wp(5),
  },
});

export default ModalCmp;

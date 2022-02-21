import React, { useState } from 'react';
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

export const CustomModal = ({ modalVisible, setModalVisible, text }) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={setModalVisible}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView]}>
                        <Text style={[ContainerStyles.text7, { color: Colors.text6, textAlign: 'left', height: hp(7) }]}>
                            {text}
                        </Text>

                        <View style={{ flexDirection: 'row', height: hp(10), justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity activeOpacity={0.5}
                                    onPress={setModalVisible}
                                    style={[styles.buttoncontainer,
                                    { backgroundColor: modalVisible === true ? Colors.bg : Colors.white }]}>
                                    <Text style={[ContainerStyles.text19, { color: modalVisible === true ? Colors.white : Colors.bg }]}>{'Yes'}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={0.5}
                                onPress={setModalVisible}
                                style={[styles.buttoncontainer,
                                { backgroundColor: modalVisible === false ? Colors.bg : Colors.white }]}>
                                <Text style={[ContainerStyles.text19, { color: modalVisible === true ? Colors.bg : Colors.white }]}>{'No'}</Text>
                            </TouchableOpacity>
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
        height: wp(14),
        width: wp(30),
        borderRadius: wp(20),
        borderWidth: 1,
        borderColor: Colors.bg,
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



import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../helper/Colors';
import ContainerStyles from '../helper/ContainerStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const HeaderWithText = ({ navigation, text }) => {
  console.log('header', navigation);
  return (
    <View
      style={[ContainerStyles.rowContainer, { justifyContent: 'flex-start' }]}>
      <TouchableOpacity
        style={style.headerContainer}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" color={Colors.back} size={wp(7)} />
      </TouchableOpacity>
      <View style={[style.headerTitle]}>
        {text && <Text style={[ContainerStyles.text1, { width: '100%', textAlign: 'center' }]}>{text}</Text>}
      </View>
    </View>
  );
};

export default HeaderWithText;

const style = StyleSheet.create({
  headerContainer: {
    width: '15%',
    alignItems: 'center',
    height: hp(15),
    justifyContent: 'center',
  },
  headerTitle: {
    width: '75%',
    alignItems: 'center',
    height: hp(10),
    justifyContent: 'center',
  },
});

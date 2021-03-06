/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
const ContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStart: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerflexStart: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
  },
  rowContainer: {
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  row10PerContainer: {
    width: wp(100),
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  row15PerContainer: {
    width: wp(100),
    height: hp(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  rowContainerStart: {
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: hp(2.5),
    fontFamily: Fonts.Montserrat_Medium,
  },
  textwhite: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: hp(2.5),
    fontFamily: Fonts.Montserrat_SemiBold,
    width: '80%'
  },
  texttwoWhite: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: hp(2),
    fontFamily: Fonts.Montserrat_Medium,
  },
  text1: {
    fontFamily: Fonts.Montserrat_ExtraBold,
    fontWeight: '700',
    fontSize: hp(3),
  },
  text2: {
    fontFamily: Fonts.Montserrat_Medium,
    fontWeight: '500',
    fontSize: hp(1.8),
    color: Colors.text1,
    textAlign: 'center',
    width: '90%',
  },
  text3: {
    fontFamily: Fonts.Montserrat_Regular,
    fontWeight: '300',
    fontSize: hp(1.8),
    color: Colors.text1,
    textAlign: 'center',
  },
  text4: {
    fontFamily: Fonts.Montserrat_Medium,
    fontWeight: '300',
    fontSize: hp(1.8),
    color: Colors.bg,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  text5: {
    fontFamily: Fonts.Montserrat_SemiBold,
    fontWeight: '500',
    fontSize: hp(1.8),
    color: Colors.black,
    textAlign: 'center',
  },
  text6: {
    fontFamily: Fonts.Montserrat_SemiBold,
    fontWeight: '600',
    fontSize: hp(2.2),
    color: Colors.text1,
    textAlign: 'center',
  },
  text7: {
    fontFamily: Fonts.Montserrat_SemiBold,
    fontWeight: '600',
    fontSize: hp(2.2),
    color: Colors.black,
    textAlign: 'center',
  },
  text8: {
    fontFamily: Fonts.Montserrat_SemiBold,
    fontWeight: '500',
    fontSize: hp(1.8),
    color: Colors.text1,
    textAlign: 'center',
  },
  text9: {
    fontFamily: Fonts.Montserrat_Medium,
    fontWeight: '500',
    fontSize: hp(1.8),
    color: Colors.red,
    textAlign: 'center',
  },
  text10: {
    fontFamily: Fonts.Montserrat_Medium,
    fontWeight: '400',
    fontSize: wp((1.8 * 38) / 18),
    color: Colors.bg,
    textAlign: 'center',
  },
  text11: {
    textAlign: 'center',
    paddingHorizontal: wp(3),
    fontFamily: Fonts.Montserrat_Medium,
    fontSize: wp(5),
  },
  text12: {
    fontFamily: Fonts.Montserrat_SemiBold,
    fontWeight: '600',
    fontSize: hp(1.8),
    color: Colors.black,
    textAlign: 'center',
  },
  text13: {
    fontFamily: Fonts.Montserrat_Medium,
    fontWeight: '600',
    fontSize: hp(1.8),
    color: Colors.back,
    textAlign: 'center',
  },
  text14: {
    fontFamily: Fonts.Montserrat_ExtraBold,
    fontWeight: '700',
    fontSize: wp(5),
  },
  text15: {
    fontFamily: Fonts.Montserrat_Medium,
    fontWeight: '700',
    fontSize: wp(4),
    color: Colors.text4,
  },
  text16: {
    color: Colors.text5,
    fontWeight: '400',
    fontSize: wp(3),
  },
  text17: {
    fontFamily: Fonts.Montserrat_ExtraBold,
    fontWeight: '700',
    fontSize: wp(4),
  },
  text18: {
    fontFamily: Fonts.Montserrat_Medium,
    fontWeight: '600',
    fontSize: wp(5),
    color: Colors.back,
    textAlign: 'center',
  },
  text19: {
    // textAlign: 'center',
    fontFamily: Fonts.Montserrat_Medium,
    fontSize: wp(5),
  },
  button: {
    height: hp(7.5),
    width: wp(90),
    borderColor: Colors.text2,
    borderRadius: wp(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg,
  },
  ic_button: {
    height: hp(7.5),
    width: wp(30),
    borderColor: Colors.text2,
    borderRadius: wp(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg,
  },
  img: {
    width: wp(100),
    height: hp(35),
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(7.5),
    borderRadius: hp(7.5 / 2),
    borderWidth: 1,
    borderColor: Colors.text2,
    marginHorizontal: wp(2),
  },
  roundedTextInput: {
    borderRadius: 25,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: Colors.bg,
    borderTopColor: Colors.bg,
    borderLeftColor: Colors.bg,
    borderRightColor: Colors.bg,
    width: 50,
    height: 50,
    borderColor: Colors.bg,
    alignItems: 'center',
    alignContent: 'center',
    // marginLeft: 15,
    color: Colors.red,
    fontSize: wp(7),
  },
  inputContainer: {
    height: wp(20),
    width: '90%',
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: Colors.bg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  shadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9,
  },
  shadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9,
  },
});

export default ContainerStyles;

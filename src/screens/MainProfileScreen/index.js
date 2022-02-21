import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ContainerStyles from '../../helper/ContainerStyles';
import Colors from '../../helper/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '../../helper/Fonts';
import Images from '../../helper/Images';
import InputCmp from '../../component/InputCmp';

const MainProfileScreen = ({ navigation }) => {
  const [editShow, setEditShow] = useState(false);
  const details = [
    {
      icon: Images.ic_email,
      title: 'User ID',
      placeholder: 'Nee145',
      bgColor: '#F0FFFF90',
      textColor: '#23B0B0',
    },
    {
      icon: Images.ic_user,
      title: 'Gender',
      placeholder: 'Male',
      bgColor: '#FFFBEC90',
      textColor: '#FFB110',
    },
    {
      icon: Images.ic_phone,
      title: 'Mobile Number',
      placeholder: '+91484555555',
      bgColor: '#EEF7FE90',
      textColor: '#415EB6',
    },
    {
      icon: Images.ic_message,
      title: 'Email Id',
      placeholder: 'someone@gmail.com',
      bgColor: '#FEEEEE90',
      textColor: '#AC4040',
    },
  ];

  return (
    <View style={ContainerStyles.containerflexStart}>
      {/* -----------------headerCompoent--------------------------- */}
      <View
        style={[ContainerStyles.rowContainer, { justifyContent: 'flex-start' }]}>
        <TouchableOpacity
          style={style.headerContainer}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" color={Colors.back} size={wp(7)} />
        </TouchableOpacity>
        <View style={style.headerTitle}>
          <Text style={ContainerStyles.text1}>{'Profile'}</Text>
        </View>
        <View style={style.edit}>
          <TouchableOpacity onPress={() => setEditShow(!editShow)}>
            <Entypo name="dots-three-horizontal" size={wp(4)} />
          </TouchableOpacity>
          {editShow === true ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfileScreen')}
              style={style.editContainer}>
              <FontAwesome5 name="edit" color={Colors.white} size={wp(5)} />
              <Text style={style.textedit}>{'Edit'}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {/* ------------------------profileContainer---------------------- */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ------------cardContainer------------------ */}
        <View style={[ContainerStyles.rowContainer]}>
          <TouchableOpacity style={style.card}>
            <TouchableOpacity style={style.subCardContainer}>
              <Image
                source={Images.ic_mainProfile}
                style={{ height: '70%', width: '70%' }}
              />
            </TouchableOpacity>
            <View
              style={{
                height: hp(5),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={ContainerStyles.text14}>{'Neelesh Chaudhary'}</Text>
            </View>
            <View style={style.subSubcardsubContaienr}>
              <Image source={Images.ic_work} style={style.icon} />
              <Text style={[style.subText]}>{'Doctor'}</Text>
              <EvilIcons name="location" size={wp(7)} color={Colors.purple} />
              <Text style={[style.subText]}>{'Kolkata'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* ------------details------------------ */}
        <View style={[ContainerStyles.rowContainer, { height: hp(8) }]}>
          <View
            style={{
              width: '85%',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '90%',
            }}>
            <Text style={[ContainerStyles.text7, { marginTop: wp(6) }]}>
              {'Details'}
            </Text>
          </View>
        </View>
        {details.map((item, index) => (
          <View
            key={index}
            style={[ContainerStyles.rowContainer, { height: hp(13) }]}>
            <InputCmp
              icon={item.icon}
              bgColor={item.bgColor}
              textColor={item.textColor}
              label={item.title}
              placeholder={item.placeholder}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MainProfileScreen;

const style = StyleSheet.create({
  headerContainer: {
    width: '15%',
    alignItems: 'center',
    height: hp(15),
    justifyContent: 'center',
  },
  headerTitle: {
    width: '70%',
    alignItems: 'center',
    height: hp(10),
    justifyContent: 'center',
  },
  edit: {
    width: '15%',
    alignItems: 'center',
    height: hp(15),
    justifyContent: 'center',
  },
  editContainer: {
    height: wp(10),
    width: wp(25),
    position: 'absolute',
    bottom: wp(3),
    right: wp(7),
    borderTopLeftRadius: wp(20),
    borderBottomRightRadius: wp(35),
    borderBottomLeftRadius: wp(20),
    borderTopRightRadius: wp(5),
    backgroundColor: Colors.bg,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.bg7,
    borderRadius: wp(10),
    height: wp(50),
    width: wp(85),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textedit: {
    color: Colors.white,
    fontFamily: Fonts.Montserrat_Medium,
  },
  subCardContainer: {
    height: wp(14),
    width: wp(14),
    borderRadius: wp(7),
    backgroundColor: Colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subSubcardsubContaienr: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '65%',
    alignItems: 'center',
    height: hp(7),
  },
  subText: {
    fontFamily: Fonts.Montserrat_Medium,

  },
  icon: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
  },
});

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import ContainerStyles from '../../helper/ContainerStyles';
import HeaderWithText from '../../component/HeaderWithText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropShadow from 'react-native-drop-shadow';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../helper/Colors';
import Fonts from '../../helper/Fonts';

const EditProfileScreen = ({ navigation }) => {
  const Personallist = [
    { title: 'Name' },
    { title: 'Profession' },
    { title: 'Gender' },
    { title: 'DOB' },
    { title: 'Email Id' },
    { title: 'Mobile Number' },
    { title: 'Location' },
  ];
  return (
    <View style={[ContainerStyles.containerflexStart]}>
      <HeaderWithText text="Edit Profile" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[ContainerStyles.rowContainer, { height: hp(25) }]}>
          <DropShadow
            style={[ContainerStyles.shadow1, styles.dropShadowContainer]}>
            <TouchableOpacity style={styles.circle}>
              <TouchableOpacity style={styles.subCircle}>
                <Entypo name="plus" size={wp(10)} />
              </TouchableOpacity>
            </TouchableOpacity>
          </DropShadow>
        </View>
        {/* --------------------------------user id----------------------- */}
        <View style={[ContainerStyles.rowContainer]}>
          <Text style={[ContainerStyles.text11]}>{'User ID'}</Text>
        </View>

        {/* -------------------------------personal detail---------------------------- */}
        <View style={[ContainerStyles.rowContainer, { height: hp(17) }]}>
          <DropShadow style={[ContainerStyles.shadow1]}>
            <TouchableOpacity style={styles.buttonContainer}>
              <View style={styles.subPersonalContainer}>
                <Text style={ContainerStyles.textwhite}>
                  {'Personal Information'}
                </Text>
                <Entypo name="chevron-down" color={Colors.white} size={wp(7)} />
              </View>
            </TouchableOpacity>
          </DropShadow>
        </View>
        {Personallist.map((item, index) => (
          <View
            key={index}
            style={[ContainerStyles.rowContainer, { height: hp(17) }]}>
            <DropShadow style={[ContainerStyles.shadow1]}>
              <TouchableOpacity style={styles.inputContainer}>
                <View style={styles.border} />
                <View style={[styles.subinfo]}>
                  <Text style={ContainerStyles.text19}>{item.title}</Text>
                  <TextInput style={styles.input} />
                </View>
              </TouchableOpacity>
            </DropShadow>
          </View>
        ))}

        {/* --------------------------update button---------------------------- */}
        <View style={[ContainerStyles.rowContainer, { height: hp(17) }]}>
          <TouchableOpacity style={ContainerStyles.button}>
            <View style={{ width: '10%' }} />
            <Text style={ContainerStyles.text}>{'Update'}</Text>
            <Entypo
              name="arrow-long-right"
              color={Colors.white}
              size={wp(6)}
              style={{ marginLeft: wp(8) }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
const styles = StyleSheet.create({
  circle: {
    height: wp(30),
    backgroundColor: Colors.bg8,
    width: wp(30),
    borderRadius: wp(30) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subCircle: {
    height: wp(16),
    backgroundColor: Colors.bg9,
    width: wp(16),
    borderRadius: wp(16) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropShadowContainer: {
    height: wp(30),
    width: wp(30),
    borderRadius: wp(30) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: wp(20),
    width: wp(95),
    backgroundColor: Colors.bg,
    borderRadius: wp(3),
    borderWidth: 0.5,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subPersonalContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    height: wp(20),
    width: wp(95),
    backgroundColor: Colors.white,
    borderRadius: wp(3),
    borderWidth: 0.5,
    borderColor: Colors.white,
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  border: {
    width: wp(3),
    height: '100%',
    backgroundColor: Colors.bg,
    borderRadius: wp(2),
  },
  subinfo: {
    width: '90%',
  },
  input: {
    color: Colors.black,
    fontFamily: Fonts.Montserrat_SemiBold,
  },
});

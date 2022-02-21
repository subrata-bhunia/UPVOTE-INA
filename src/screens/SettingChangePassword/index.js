import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo'
import HeaderWithText from '../../component/HeaderWithText';
import ContainerStyles from '../../helper/ContainerStyles';
import Colors from '../../helper/Colors';
const SettingChangePassword = ({ navigation }) => {
  const details = [
    { title: "Current Password" },
    { title: "New Password" },
    { title: "Confirm new password" },
  ]
  return (
    <View style={ContainerStyles.containerflexStart}>
      <HeaderWithText navigation={navigation} text="New Password" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {details.map((item, index) =>
          <View style={{ height: hp(20) }}>
            <View style={[ContainerStyles.rowContainer, { height: hp(12), }]}>
              <View style={{ height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[ContainerStyles.text19, { textAlign: 'left', width: '95%' }]}>
                  {item.title}
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput style={{ fontSize: wp(5), color: Colors.black, width: '100%' }} />
                </View>
              </View>
            </View>
          </View>
        )}

        {/* --------------------------update button---------------------------- */}

        <View style={[ContainerStyles.rowContainer, { height: hp(21), alignItems: 'flex-end' }]}>
          <TouchableOpacity onPress={() => navigation.navigate('SuccessfullyScreen')} style={ContainerStyles.button}>
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

export default SettingChangePassword;

const styles = StyleSheet.create({
  inputContainer: {
    height: wp(15),
    width: '95%',
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: Colors.bg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

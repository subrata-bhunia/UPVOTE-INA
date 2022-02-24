import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ContainerStyles from '../helper/ContainerStyles';
import Colors from '../helper/Colors';
import Fonts from '../helper/Fonts';

const CheckBoxWithText = ({status, title, setStatus}) => {
  return (
    <View style={[ContainerStyles.rowContainer]}>
      <View
        style={{
          width: '95%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{width: '15%'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setStatus(!status)}
            style={[
              styles.check,
              {backgroundColor: status === true ? Colors.bg : Colors.white},
            ]}>
            <AntDesign
              name="check"
              color={status === true ? Colors.white : Colors.bg}
              size={wp(6)}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '85%'}}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckBoxWithText;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.Montserrat_SemiBold,
    fontSize: wp(5.5),
    color: Colors.bg,
    fontWeight: '700',
  },
  check: {
    width: wp(10),
    height: wp(10),
    borderWidth: 1,
    borderRadius: wp(2),
    borderColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

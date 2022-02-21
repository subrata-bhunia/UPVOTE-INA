import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ContainerStyles from '../helper/ContainerStyles';
import DropShadow from 'react-native-drop-shadow';
import Colors from '../helper/Colors';
import Fonts from '../helper/Fonts';
export const TextInputCmp = ({title, value, onChangeText}) => {
  return (
    <View style={[ContainerStyles.rowContainer, {height: hp(17)}]}>
      <DropShadow style={[ContainerStyles.shadow1]}>
        <TouchableOpacity style={styles.inputContainer}>
          <View style={styles.border} />
          <View style={[styles.subinfo]}>
            <View
              style={{height: '100%', justifyContent: 'center', width: '80%'}}>
              <TextInput
                placeholder={title}
                placeholderTextColor={Colors.text6}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                maxLength={30}
              />
            </View>
            <View
              style={{
                height: '100%',
                justifyContent: 'flex-end',
                width: '20%',
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  marginRight: wp(3),
                  marginBottom: wp(2),
                }}>
                {`${value === undefined ? 0 : value.length}/30`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </DropShadow>
    </View>
  );
};

export const TextInputWithTitleCmp = ({title, value, onPress}) => {
  return (
    <View style={[ContainerStyles.rowContainer, {height: hp(17)}]}>
      <DropShadow style={[ContainerStyles.shadow1]}>
        <TouchableOpacity style={styles.inputContainer} onPress={onPress}>
          <View style={styles.border} />
          <View style={[styles.subinfo]}>
            <View>
              <View style={{height: '50%', justifyContent: 'center'}}>
                <Text style={styles.input}>{title}</Text>
              </View>
              <View
                style={{
                  height: '50%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <View style={{width: '90%'}}>
                  <Text style={styles.input}>{value}</Text>
                </View>
                <View style={{width: '10%'}}>
                  <AntDesign name="down" size={wp(6)} />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </DropShadow>
    </View>
  );
};

export const TextInputMultipleLineCmp = ({title, value, onChangeText}) => {
  return (
    <View style={[ContainerStyles.rowContainer, {height: hp(22)}]}>
      <DropShadow style={[ContainerStyles.shadow1]}>
        <TouchableOpacity style={styles.inputMultipleline}>
          <View style={styles.border} />
          <View style={[styles.subinfo]}>
            <View
              style={{
                height: '90%',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '80%',
              }}>
              <TextInput
                placeholder={title}
                placeholderTextColor={Colors.text1}
                multiline={true}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                maxLength={140}
              />
            </View>
            <View
              style={{
                height: '100%',
                justifyContent: 'flex-end',
                width: '20%',
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  marginRight: wp(3),
                  marginBottom: wp(2),
                }}>
                {`${value === undefined ? 0 : value.length}/140`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </DropShadow>
    </View>
  );
};

export const TextInputWithTitleTextCmp = ({title, value, onChangeText}) => {
  return (
    <View style={[ContainerStyles.rowContainer, {height: hp(17)}]}>
      <DropShadow style={[ContainerStyles.shadow1]}>
        <TouchableOpacity style={styles.inputContainer}>
          <View style={styles.border} />
          <View style={[styles.subinfo]}>
            <View>
              <View style={{height: '50%', justifyContent: 'center'}}>
                <Text style={styles.input}>{title}</Text>
              </View>
              <View
                style={{
                  height: '50%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <View style={{width: '100%'}}>
                  <TextInput
                    placeholder="Paste the URL"
                    placeholderTextColor={Colors.lightblack}
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </DropShadow>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: wp(20),
    width: wp(95),
    backgroundColor: Colors.white,
    borderRadius: wp(3),
    borderWidth: 0.5,
    borderColor: Colors.white,
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    color: Colors.lightblack,
    fontFamily: Fonts.Montserrat_SemiBold,
    fontSize: wp(4),
    width: '100%',
  },
  inputMultipleline: {
    height: wp(30),
    width: wp(95),
    backgroundColor: Colors.white,
    borderRadius: wp(3),
    borderWidth: 0.5,
    borderColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

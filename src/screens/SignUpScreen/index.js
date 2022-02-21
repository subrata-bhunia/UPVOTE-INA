import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  Modal,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import OTPTextInput from 'react-native-otp-textinput';
import HeaderCmp from '../../component/HeaderCmp';
import InputTypeTxt from '../../component/InputTypeTxt';
import ButtonType from '../../component/ButtonType';
import DynamicPicker from '../../component/DynamicPicker';
import ContainerStyles from '../../helper/ContainerStyles';
import Images from '../../helper/Images';
import RadioButton from '../../component/RadioButton';
import {
  widthPercentageToDP,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Colors from '../../helper/Colors';
import Fonts from '../../helper/Fonts';


const SignUpScreen = ({ navigation }) => {
  const [selected, setSelect] = useState(false);
  const [selectedOne, setSelectOne] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState();

  let otpInput = useRef(null);
  const icons = [
    { bg: Colors.bgRed, icon: Images.ic_google },
    { bg: Colors.bgsky, icon: Images.ic_twitter },
    { bg: Colors.bgblue, icon: Images.ic_facebook },
  ];

  const toggleModal = () => {
    setModalVisible(!modalVisible)
    navigation.navigate('ProfileScreen');
  };
  const onPressVerify = () => {
    setModalVisible(!modalVisible)


  }
  useEffect(() => {
    setModalVisible(false);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={0}
      style={[ContainerStyles.containerStart]}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={styles.modalContainer}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity activeOpacity={0.5}
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: Colors.bg1,
                  width: '20%',
                }}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={ContainerStyles.text1}>{'Verify Phone Number'}</Text>
            </View>

            <View
              style={[
                ContainerStyles.rowContainer,
                { backgroundColor: '#D1E4Fc' },
              ]}>
              <View style={{ width: '80%' }}>
                <OTPTextInput
                  ref={otpInput}
                  offTintColor={Colors.bg}
                  tintColor={Colors.bg}
                  textInputStyle={ContainerStyles.roundedTextInput}
                />
              </View>
            </View>

            <View
              style={[
                ContainerStyles.rowContainer,
                { backgroundColor: '#D1E4Fc' },
              ]}>
              <Text style={ContainerStyles.text2}>
                {'Didn’t recieve a code? '}
                <Text
                  style={{
                    color: Colors.bg,
                    fontFamily: Fonts.Montserrat_ExtraBold,
                  }}>
                  {'Resend SMS'}
                </Text>
              </Text>
            </View>
            <View
              style={[
                ContainerStyles.rowContainer,
                {
                  height: hp(4),
                  backgroundColor: '#D1E4Fc',
                  alignItems: 'flex-start',
                },
              ]}>
              <Text style={ContainerStyles.text12}>{'Wrong number'}</Text>
            </View>

            <TouchableOpacity
              onPress={toggleModal}
              style={[ContainerStyles.button]}>
              <Text style={ContainerStyles.text}> {'Submit'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View
          style={[ContainerStyles.rowContainer, { justifyContent: 'flex-start' }]}>
          <HeaderCmp navigation={navigation} />
        </View>
        <View style={[ContainerStyles.rowContainer, { height: hp(9), alignItems: 'flex-start' }]}>
          <Text style={[ContainerStyles.text1]}>{'Sign Up'}</Text>
        </View>
        <View style={[ContainerStyles.rowContainer, { height: hp(9) }]}>
          <InputTypeTxt
            icon={Images.ic_email}
            plholder={'Mobile Number/Email Id'}
            text={'Verify'}
            value={value}
          // onChangeText={(value) => onchangeText(value)}
          />
        </View>

        <View style={[ContainerStyles.rowContainer,
          , { height: hp(9) }]}>
          <View style={{ width: '87%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '25%', alignItems: 'flex-start' }}>
              <Text style={styles.text}>{'Gender'}</Text>
            </View>
            <View style={{ width: '75%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <RadioButton
                active={selected}
                setSelect={setSelect}
                placeholder="Male"
              />
              <RadioButton
                active={selectedOne}
                setSelect={setSelectOne}
                placeholder="Female"
              />
            </View>
          </View>
        </View>


        <View style={[ContainerStyles.rowContainer,
        { height: hp(9) }]}>
          <View style={{ width: '87%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '15%', alignItems: 'flex-start' }}>
              <Text style={styles.text}>{'DOB'}</Text>
            </View>
            <View style={{ width: '85%', flexDirection: 'row', alignItems: 'center' }}>
              <DynamicPicker text={'Date'} />
              <DynamicPicker text={'Month'} />
              <DynamicPicker text={'Year'} />
            </View>
          </View>
        </View>


        <View style={[ContainerStyles.rowContainer, { height: hp(9) }]}>
          <InputTypeTxt
            plholder={'New Password'}
            icon={Images.ic_password}
            righIcon={Images.ic_visible}
            textType={true}
          />
        </View>
        <View
          style={[
            ContainerStyles.rowContainer,
            {
              height: hp(9),
              alignItems: 'flex-end',
            },
          ]}>
          <TouchableOpacity
            onPress={onPressVerify}
            style={[ContainerStyles.button]}>
            <Text style={ContainerStyles.text}> {'Sign Up'}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            ContainerStyles.rowContainer,
            { height: hp(18), alignItems: 'flex-end' }]}>
          <Text style={ContainerStyles.text2}>{'Or sign up using'}</Text>
        </View>
        <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
          {icons.map((item, index) => (
            <View key={index} style={{ width: '32%', alignItems: 'center' }}>
              <ButtonType
                navigation={navigation}
                btnstyle={ContainerStyles.ic_button}
                bgColor={item.bg}
                icon={item.icon}
              />
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
          style={[
            ContainerStyles.rowContainer,
            { height: hp(7), alignItems: 'flex-start' },
          ]}>
          <Text style={ContainerStyles.text4}>{'Back to Login'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView >
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  modalContainer: {
    height: hp(32),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#D1E4Fc',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: Fonts.Montserrat_Medium,
    fontSize: widthPercentageToDP(5),
  }
})
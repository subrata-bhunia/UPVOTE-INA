import React, { RefObject, useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import HeaderCmp from '../../component/HeaderCmp';
import ButtonType from '../../component/ButtonType';
import ContainerStyles from '../../helper/ContainerStyles';
import Colors from '../../helper/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Styles from './Styles';
import Fonts from '../../helper/Fonts';
import { OtpVerify } from '../../api/user';
import ButtonType2 from '../../component/ButtonType2';
export var myID ="61eed3f26d124a0503f5c934"
const VerifyOTPNumberScreen = ({ navigation }) => {
  const [monumber, setMonumber] = useState('1234567890');
  const [value, setValue] = useState('');
  const [wrong,setwrong]=useState(false);
  
  const subString =
    'By continuing you’re indicating that you accept our Terms of Use and our Privacy Policy';

  const _OtpVerify = () => {
    if(value.length < 6) {
      setwrong(true)
    }else{
      OtpVerify(myID,{
        otp:value
      }).then(res=>{
        if(res.data?.status){
          // ToastAndroid.show(res?.msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
          navigation.navigate("ForgetPasswordScreen")
        }
      }).catch((err)=>{
        setwrong(true)
      })
    }
  }
  let otpInput = useRef(null);

  useEffect(() => {
    otpInput.current.setValue(value);
  }, []);
  useEffect(()=>{
    setwrong(false)
  },[value])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={0}
      style={[ContainerStyles.container, { justifyContent: 'flex-start' }]}>
      <View style={[ContainerStyles.rowContainerStart, { height: hp(10) }]}>
        <HeaderCmp navigation={navigation} />
      </View>
      <View style={[ContainerStyles.rowContainer, { height: hp(8) }]}>
        <Text style={ContainerStyles.text1}>{'Verify Phone Number'}</Text>
      </View>
      <View style={[ContainerStyles.rowContainer, { width: '70%', height: hp(7), alignItems: 'flex-start' }]}>
        <Text style={[ContainerStyles.text2]}>
          {'Please enter the 6 digit code sent to '}
          <Text style={ContainerStyles.text5}>{`+91${monumber}`}</Text>
          {' through SMS'}
        </Text>
      </View>
      {
        wrong ? (
          <View style={ContainerStyles.rowContainer}>
            <Text style={[ContainerStyles.text9]}>
              {'Incorrect code. Please try again.'}
            </Text>
          </View>
        ) : null
      }

      <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
        <View style={{ width: '80%' }}>
          <OTPTextInput
            ref={otpInput}
            inputCount={6}
            offTintColor={Colors.bg}
            tintColor={Colors.bg}
            textInputStyle={[Styles.roundedTextInput,{color:wrong ? Colors.red : Colors.black}]}
            containerStyle={Styles.con}
            handleTextChange={(txt)=>setValue(txt)}
          />
        </View>
      </View>

      <View
        style={[
          ContainerStyles.rowContainer,
          { height: hp(5), alignItems: 'flex-end' },
        ]}>
        <Text
          style={[ContainerStyles.text6, { fontSize: widthPercentageToDP(3.5) }]}>
          {'Didn’t recieve a code? '}
          <Text style={{ color: Colors.bg, fontFamily: Fonts.Montserrat_ExtraBold }}>{'Resend SMS'}</Text>
        </Text>
      </View>

      <View style={[ContainerStyles.rowContainer, { height: hp(4) }]}>
        <Text
          style={[ContainerStyles.text7, { fontSize: widthPercentageToDP(4) }]}>
          {'Wrong number'}
        </Text>
      </View>
      <View style={[ContainerStyles.rowContainer, { height: hp(12) }]}>
        <ButtonType2
          // navigation={navigation}
          // navigationLink="ForgetPasswordScreen"
          text={'Verify OTP'}
          btnstyle={ContainerStyles.button}
          onPress={()=>_OtpVerify()}
        />
      </View>
      <View
        style={[ContainerStyles.rowContainer, { width: '95%', height: hp(6) }]}>
        <Text style={ContainerStyles.text8}>
          {'By continuing you’re indicating that you accept our '}
          <Text style={{ textDecorationLine: 'underline' }}>
            {'Terms of Use '}
          </Text>
          {' and our '}
          <Text style={{ textDecorationLine: 'underline' }}>
            {' Privacy Policy'}
          </Text>
        </Text>
      </View>
      <View style={[ContainerStyles.rowContainer, { height: hp(3) }]}>
        <TouchableOpacity activeOpacity={0.5}
          onPress={() => navigation.navigate('ForgetPasswordScreen')}>
          <Text style={ContainerStyles.text4}>{'Use Password to Login'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default VerifyOTPNumberScreen;

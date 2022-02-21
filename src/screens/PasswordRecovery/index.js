import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Modal, TouchableOpacity, Alert } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import OTPTextInput from 'react-native-otp-textinput';
import HeaderCmp from '../../component/HeaderCmp'
import ContainerStyles from '../../helper/ContainerStyles'
import Colors from '../../helper/Colors'
import InputTypeTxt from '../../component/InputTypeTxt';
import Images from '../../helper/Images';
import ButtonType from '../../component/ButtonType';
import { OtpVerify } from '../../api/user';
var myID ="61eed3f26d124a0503f5c934"
const PasswordRecovery = ({ navigation }) => {
    const [wrong,setwrong]=useState(false)

    const [modalVisible, setModalVisible] = useState(false);
    const [value, setvalue] = useState('')
    let otpInput = useRef(null);
    // useEffect(() => {
    //     otpInput.current.setvalue(value);
    //   }, []);
    const _OtpVerify = () => {
        if(value.length < 6) {
            alert("Otp must be 6 digit.")
          }else{
            OtpVerify(myID,{
              otp:value
            }).then(res=>{
              if(res.data?.status){
                navigation.navigate('NewPasswordScreen')
              }
            }).catch((err)=>{
              setwrong(true)
            })
          }
    }
    useEffect(()=>{
        setwrong(false)
      },[value])
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            enabled
            keyboardVerticalOffset={0}
            style={ContainerStyles.containerStart}>
            <HeaderCmp navigation={navigation} />

            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}

            >
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{
                        height: hp(40),
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: '#D1E4Fc',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}>
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ height: 6, borderRadius: 3, backgroundColor: Colors.bg1, width: '20%' }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={ContainerStyles.text1}>{"Verify Phone Number"}</Text>
                        </View>
                        {
                            wrong ? (
                                <Text style={[ContainerStyles.text9]}>
                                {'Incorrect code. Please try again.'}
                                </Text>
                            ) : null
                        }
                        <View style={[ContainerStyles.rowContainer, { backgroundColor: '#D1E4Fc' }]}>
                            <View style={{ width: '80%' }}>
                                <OTPTextInput ref={otpInput}
                                    offTintColor={Colors.bg}
                                    inputCount={6}
                                    tintColor={Colors.bg}
                                    textInputStyle={[ContainerStyles.roundedTextInput,{color:wrong ? Colors.red : Colors.black}]}
                                    containerStyle={{
                                        alignSelf:'center'
                                    }}
                                    handleTextChange={(txt)=>setvalue(txt)}
                                     />

                            </View>
                        </View>

                        <View style={[ContainerStyles.rowContainer, { backgroundColor: '#D1E4Fc' }]}>
                            <Text style={ContainerStyles.text2}>
                                {"Didn’t recieve a code? "}
                                < Text style={{ color: Colors.bg }}>{"Resend SMS"}</Text>
                            </Text>
                        </View>
                        <View style={[ContainerStyles.rowContainer, { height: hp(4), backgroundColor: '#D1E4Fc', alignItems: 'flex-start' }]}>
                            <Text style={ContainerStyles.text12}>{"Wrong number"}</Text>
                        </View>

                        <TouchableOpacity onPress={()=>{
                            _OtpVerify()
                        }} style={[ContainerStyles.button]}>
                            <Text style={ContainerStyles.text}>{"Submit"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            <ScrollView>
                <View style={ContainerStyles.row10PerContainer}>
                    <Text style={ContainerStyles.text1}>{"Password Recovery"}</Text>
                </View>
                <View style={[ContainerStyles.rowContainer]}>
                    <Text style={ContainerStyles.text2}>
                        {"Please enter the mobile number or email ID to reset your password"}
                    </Text>
                </View>
                <View style={[ContainerStyles.rowContainer, { height: hp(20) }]}>
                    <InputTypeTxt icon={Images.ic_email}
                        plholder="Mobile Number/Email Id"
                        value={"test2@lyfgram.com"}
                    />
                </View>
                <View style={[ContainerStyles.rowContainer]}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[ContainerStyles.button]}>
                        <Text style={ContainerStyles.text}>  {"Submit"}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default PasswordRecovery

const styles = StyleSheet.create({})

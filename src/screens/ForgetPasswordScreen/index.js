import React, { useState } from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'
import ContainerStyles from '../../helper/ContainerStyles'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderCmp from '../../component/HeaderCmp';
import Images from '../../helper/Images';
import InputTypeTxt from '../../component/InputTypeTxt'
import ButtonType from '../../component/ButtonType';
import Colors from '../../helper/Colors';
const ForgetPasswordScreen = ({ navigation }) => {
    const [value, setValue] = useState()
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            enabled
            keyboardVerticalOffset={0}
            style={[ContainerStyles.containerflexStart]} >
            <View style={[ContainerStyles.rowContainerStart, { height: hp(10) }]}>
                <HeaderCmp navigation={navigation} />
            </View>

            <View style={[ContainerStyles.rowContainer, { height: hp(37), alignItems: 'flex-start' }]}>
                <Image source={Images.login} style={ContainerStyles.img} />
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10), alignItems: 'flex-end' }]}>
                <Text style={ContainerStyles.text1}>{"Enter Password to Login"}</Text>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
                <View style={{ width: '90%', alignItems: 'center' }}>
                    <Text style={ContainerStyles.text2}>
                        {"Find the content that you like and answer the most upvoted questions"}
                    </Text>
                </View>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
                <InputTypeTxt plholder="Password" value={value} icon={Images.ic_password} righIcon={Images.ic_visible} />
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
                <ButtonType navigation={navigation} navigationLink={"SignUpScreen"} text={"Sign In"} btnstyle={ContainerStyles.button} />
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
                <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
                    <Text style={ContainerStyles.text4}>{"Forgot Password?"}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
export default ForgetPasswordScreen
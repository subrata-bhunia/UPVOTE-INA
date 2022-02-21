/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Text, Image, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from 'react-native'
import ContainerStyles from '../../helper/ContainerStyles'
import styles from './Styles'
import Images from '../../helper/Images';
import InputTypeTxt from '../../component/InputTypeTxt';
import ButtonType from '../../component/ButtonType';
import Colors from '../../helper/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const HomeScreen = ({ navigation }) => {
    const [state, setstate] = useState()
    const icons = [
        { bg: Colors.bgRed, icon: Images.ic_google },
        { bg: Colors.bgsky, icon: Images.ic_twitter },
        { bg: Colors.bgblue, icon: Images.ic_facebook },
    ]
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            enabled
            keyboardVerticalOffset={0}
            style={ContainerStyles.container}>
            <View style={[ContainerStyles.rowContainer, { height: hp(40), alignItems: 'flex-end' }]}>
                <Image source={Images.login} style={styles.img} />
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10), alignItems: 'flex-end' }]}>
                <Text style={ContainerStyles.text1}>{"Login to Upvote"}</Text>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
                <Text style={ContainerStyles.text2}>{"Find the content that you like and answer the most upvoted questions"}</Text>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
                <InputTypeTxt icon={Images.ic_email} plholder={"Mobile Number/Email"} value={state} />
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(8) }]}>
                <ButtonType text={"Send"} navigation={navigation} navigationLink={"VerifyOTPNumberScreen"} btnstyle={ContainerStyles.button} />

            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(8), alignItems: 'flex-end' }]}>
                <Text style={ContainerStyles.text3}>{"Or sign in using"}</Text>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
                {icons.map((item, index) =>
                    <View key={index} style={{ width: '32%', alignItems: 'center' }}>
                        < ButtonType navigation={navigation} btnstyle={ContainerStyles.ic_button} bgColor={item.bg} icon={item.icon} />
                    </View>
                )}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={[ContainerStyles.rowContainer, { height: hp(4) }]}>
                <Text style={ContainerStyles.text4}>{"New User"}</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    )
}

export default HomeScreen
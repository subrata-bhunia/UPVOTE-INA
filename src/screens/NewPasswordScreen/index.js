import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ButtonType from '../../component/ButtonType'
import HeaderCmp from '../../component/HeaderCmp'
import InputTypeTxt from '../../component/InputTypeTxt'
import ContainerStyles from '../../helper/ContainerStyles'
import Images from '../../helper/Images'
import Colors from '../../helper/Colors'
import Fonts from '../../helper/Fonts'
import {ChangePassword} from '../../api/user'
import { myID } from '../VerifyOTPNumberScreen'
import ButtonType2 from '../../component/ButtonType2'
const NewPasswordScreen = ({ navigation }) => {
   
    const [value, setvalue] = useState('');
    const [confirm,setconfirm]=useState('');
    const [pwvisible, setPwvisible] = useState(true)
    const _ChangePassword =()=>{
        if(value.length >=6 && value === confirm){
            ChangePassword(myID,{
                'password':value
            }).then(res=>{
                if(res.data?.status){
                    navigation.navigate("DrawerNavigations")
                }
            })
        }else{
            alert('Please Check Password')
        }
        
    }
    return (
        <KeyboardAvoidingView
            // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            enabled
            keyboardVerticalOffset={0} style={ContainerStyles.containerStart}>
            <HeaderCmp navigation={navigation} />
            <ScrollView>
                <View style={ContainerStyles.row10PerContainer}>
                    <Text style={ContainerStyles.text1}>{"New Password"}</Text>
                </View>
                <View style={ContainerStyles.row15PerContainer}>

                    <TouchableOpacity style={styles.input}>
                        <View style={{ width: '20%', alignItems: 'center' }}>
                            <Image source={Images.ic_password} style={styles.img} />
                        </View>
                        <View style={{ width: '60%', alignItems: 'flex-start' }}>
                            < TextInput placeholder={"Create New Password"}
                                value={value}
                                underlineColorAndroid="transparent"
                                selectionColor={Colors.white}
                                placeholderTextColor={Colors.text2}
                                style={styles.text}
                                secureTextEntry={pwvisible}
                                onChangeText={txt=>{setvalue(txt)}}
                            />
                        </View>
                        <View style={{ width: '20%', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setPwvisible(!pwvisible)}>
                                {pwvisible ?
                                    <Image source={Images.ic_visible} style={styles.img} />
                                    :
                                    <MaterialIcons
                                        name="visibility"
                                        color={Colors.bg}
                                        size={wp(5)}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={[ContainerStyles.row10PerContainer]}>

                    <TouchableOpacity style={styles.input}>
                        <View style={{ width: '20%', alignItems: 'center' }}>
                            <Image source={Images.ic_password} style={styles.img} />
                        </View>
                        <View style={{ width: '60%', alignItems: 'flex-start' }}>
                            < TextInput placeholder={"Create New Password"}
                                value={confirm}
                                underlineColorAndroid="transparent"
                                selectionColor={Colors.white}
                                placeholderTextColor={Colors.text2}
                                onChangeText={txt=>{setconfirm(txt)}}
                                style={styles.text}

                                secureTextEntry={pwvisible}
                            />
                        </View>
                        <View style={{ width: '20%', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setPwvisible(!pwvisible)}>
                                {pwvisible ?
                                    <Image source={Images.ic_visible} style={styles.img} />
                                    :
                                    <MaterialIcons
                                        name="visibility"
                                        color={Colors.bg}
                                        size={wp(5)}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={[ContainerStyles.row15PerContainer, { alignItems: 'flex-end', height: hp(20) }]}>
                    <ButtonType2
                        btnstyle={ContainerStyles.button}
                        text="Create"
                        // navigation={navigation}
                        // navigationLink="DrawerNavigations"
                        onPress={()=>_ChangePassword()}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default NewPasswordScreen

const styles = StyleSheet.create({
    img: {
        height: hp(5),
        width: wp(5),
        resizeMode: 'contain'
    },
    text:
    {
        color: Colors.black,
        textDecorationLine: 'none',
        fontSize: wp(4),
        fontFamily: Fonts.Montserrat_Medium,
        width: '100%'
    },
    input: {
        height: hp(7.5),
        width: wp(90),
        borderWidth: 1,
        borderColor: Colors.text2,
        borderRadius: wp(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

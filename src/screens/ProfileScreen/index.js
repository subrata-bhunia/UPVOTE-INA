import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native'
import ImagePickerCmp from '../../component/ImagePickerCmp'
import InputTypeTxt from '../../component/InputTypeTxt'
import ContainerStyles from '../../helper/ContainerStyles'
import HeaderCmp from '../../component/HeaderCmp'
import Images from '../../helper/Images'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Colors from '../../helper/Colors'
import { AddPhoto } from '../../api/user';
import axios from 'axios'
var myID="61eed3f26d124a0503f5c934"
const ProfileScreen = ({ navigation }) => {
    const [value, setValue] = useState()
    const [imagePkShow, setimagePkShow] = useState(false);
    const [image, setImage] = useState();
    console.log("image", image)
    // --------------Upload ------ //

    const createFormData = (image) => {
        const data = new FormData();
        data.append('file',image);
        // console.log(data)
        return data;
      };
      console.log(createFormData(image))
    const UploadImage=()=>{
        AddPhoto(myID,createFormData(image))
        .then(res=>console.log(res))
        .catch(err =>{ 
            console.log(JSON.stringify(err));
        })
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            enabled
            keyboardVerticalOffset={0}
            style={[ContainerStyles.containerflexStart, { justifyContent: 'flex-start' }]}>
            {imagePkShow === true ? (
                <ImagePickerCmp image={image} setImage={setImage} />
            ) : null}
            <View style={[ContainerStyles.rowContainer, { justifyContent: 'flex-start' }]}>
                <HeaderCmp navigation={navigation} />
            </View>
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(7) }]}>
                <Text style={[ContainerStyles.text1]}>{"Profile"}</Text>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(30) }]}>
                <ImageBackground

                    source={Images.profile_bg} style={styles._icProfile}
                    resizeMode="contain">
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        setimagePkShow(!imagePkShow)
                        console.log(imagePkShow)
                    }} style={styles._imgContainer}>

                        <Image source={{ uri: image?.path }} style={styles._profile} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(5), alignItems: 'flex-start' }]}>
                <Text style={[ContainerStyles.text2, { color: Colors.text2 }]}>{"Click to upload the Image"}</Text>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(10) }]}>
                <InputTypeTxt
                    icon={Images.ic_email}
                    value={value}
                    plholder="Full Name"
                />
            </View>
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(20) }]}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    UploadImage();
                    navigation.navigate('LangauageSelectionScreen')
                    }} style={ContainerStyles.button}>
                    <Text style={ContainerStyles.text}>{"Update"}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    _icProfile: {
        height: heightPercentageToDP(35),
        width: widthPercentageToDP(50),
        resizeMode: 'contain',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    _profile: {
        height: heightPercentageToDP(17),
        width: widthPercentageToDP(30),
        borderRadius: widthPercentageToDP(30),
        marginRight: widthPercentageToDP(9)

    },
    _imgContainer: {
        flexDirection: 'row',
        height: heightPercentageToDP(15),
        width: widthPercentageToDP(30),
        borderRadius: widthPercentageToDP(30),
        justifyContent: 'center',
        alignItems: 'center'

    }
})



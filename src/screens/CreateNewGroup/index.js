import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image, Text } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Entypo from 'react-native-vector-icons/Entypo'
import ContainerStyles from '../../helper/ContainerStyles'
import ImagePickerCmp from '../../component/ImagePickerCmp'
import HeaderWithText from '../../component/HeaderWithText'
import Images from '../../helper/Images'
import InputTypeTxt from '../../component/InputTypeTxt'
import Colors from '../../helper/Colors'
import Fonts from '../../helper/Fonts'
import ButtonType from '../../component/ButtonType'
import ButtonType2 from '../../component/ButtonType2'
import { config } from '../../../config';
import { CreateNewGroupAPI } from '../../api/groups'
import axios from 'axios'
import Test from '../../api/test'
const CreateNewGroup = ({ navigation }) => {
    const [imagePkShow, setimagePkShow] = useState(false);
    const [image, setImage] = useState();
    const [showremoveContainer, setshowremoveContainer] = useState(false)
    const [selectindex, setselectindex] = useState(0)
    const [groupName, setgroupName] = useState("");

    // ======API CALL========== //
    // var apiUrl = url+'/group/add-groups'
    const CreateGroup=()=>{
        if(groupName.length < 1){
            alert("Please Enter Group Name")
        }else{
            CreateNewGroupAPI({
                "my_id":"61eed3f26d124a0503f5c934", 
                "group_name":groupName
            }).then(res=>alert(res.data?.msg))
            .catch(err=>console.log("ERROR CREATE NEW GROUP API",err))
    }
}
    const userlist = [
        { userpic: Images.ic_mainProfile, name: "Amdrew Scholar", contactno: "78778888" },
        { userpic: Images.ic_mainProfile, name: "Amdrew Scholar", contactno: "78778888" },
        { userpic: Images.ic_mainProfile, name: "Amdrew Scholar", contactno: "78778888" },
    ]
    const count = userlist.length
    // console.log("count", count)
    const onselect = (index) => {

        setselectindex(index)
        setshowremoveContainer(true)
        // console.log(selectindex)
    }
    return (
        <View style={[ContainerStyles.containerflexStart]}>
            {imagePkShow === true ? (<ImagePickerCmp image={image} setImage={setImage} />) : null}
            <HeaderWithText
                navigation={navigation}
                text={"New Group"} />
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(80) }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={ContainerStyles.rowContainer}>
                        <ImageBackground
                            source={Images.ic_uploadProfile}
                            style={styles._icProfile}
                            resizeMode="contain">
                            <TouchableOpacity onPress={() => {
                                setimagePkShow(!imagePkShow)
                                console.log(imagePkShow)
                            }} style={styles._imgContainer}>
                                {imagePkShow === false ? (
                                    <Text style={ContainerStyles.text2}>{"upload"}</Text>
                                )
                                    :
                                    <Image source={{ uri: image }} style={styles._profile} />
                                }
                            </TouchableOpacity>
                            <Image source={Images.logo}
                                style={styles._logo} />
                        </ImageBackground>
                    </View>


                    <View style={ContainerStyles.rowContainer}>
                        <InputTypeTxt plholder={"New Group Name"}
                            onchangeText={(text)=>setgroupName(text)}
                            icon={Images.ic_people} />
                    </View>

                    <View style={[ContainerStyles.row10PerContainer]}>
                        <View style={{ justifyContent: 'space-between', width: '90%', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('GroupChatScreen')}>
                                <Text style={ContainerStyles.text10}>{"Add more participants"}</Text>
                            </TouchableOpacity>
                            <Image source={Images.ic_userplus} style={styles._icuserplus} />
                        </View>
                    </View>
                    {userlist.map((item, index) =>
                        <TouchableOpacity key={index} onPress={() => onselect(index)} style={[ContainerStyles.row10PerContainer, {
                            height: heightPercentageToDP(10),
                            borderBottomWidth: 1,
                            borderBottomColor: Colors.line,

                        }]}>
                            <View style={{ width: '90%', alignItems: index === count - 1 ? 'center' : 'center', flexDirection: 'row', height: '100%' }}>
                                <View style={{ width: '20%', alignItems: 'center' }}>
                                    <TouchableOpacity style={styles._profileContainer}>
                                        <Image source={Images.ic_mainProfile} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={[ContainerStyles.text7, styles._alignment]}>{item.name}</Text>
                                    <Text style={[ContainerStyles.text16, styles._alignment]}>{item.contactno}</Text>
                                </View>
                                <View style={{ width: '10%', flexDirection: 'row', height: '40%', justifyContent: 'center' }}>
                                    {Array(3).fill(3).map((item) =>
                                        <View style={styles._iccircle} />
                                    )}
                                </View>
                            </View>

                        </TouchableOpacity>
                    )}
                    {showremoveContainer === true ? (
                        <View style={[styles._removeMessage,
                        {
                            top: selectindex > 0 ? (selectindex === count - 1 ? (heightPercentageToDP(59 + (1 * selectindex)))
                                : heightPercentageToDP(59 + (10 * selectindex)))
                                :
                                heightPercentageToDP(59)
                        }]}>
                            <TouchableOpacity onPress={() => setshowremoveContainer(!showremoveContainer)} style={styles._crossContainer}>
                                <Entypo name="cross" color={Colors.white} />
                            </TouchableOpacity>
                            <Text style={styles.text}>{"Remove from the Group"}</Text>
                        </View>)
                        : null
                    }
                </ScrollView>

            </View>
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(10) }]}>
                <ButtonType2
                    btnstyle={styles._button}
                    text="Create Group"
                    onPress={()=>CreateGroup()}
                />
            </View>
            <Test />

        </View >
    )
}

export default CreateNewGroup;

const styles = StyleSheet.create({
    _button: {
        height: heightPercentageToDP(7.5),
        width: widthPercentageToDP(90),
        borderColor: Colors.text2,
        borderRadius: widthPercentageToDP(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bg,
        // marginBottom:heightPercentageToDP(9)
    },
    _icProfile: {
        height: heightPercentageToDP(35),
        width: widthPercentageToDP(50),
        resizeMode: 'contain',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    _profile: {
        height: '100%',
        width: '100%',
        borderRadius: widthPercentageToDP(30),

    },
    _imgContainer: {
        flexDirection: 'row',
        height: heightPercentageToDP(15),
        width: widthPercentageToDP(30),
        borderRadius: widthPercentageToDP(30),
        justifyContent: 'center',
        alignItems: 'center'

    },
    _icuserplus: {
        height: widthPercentageToDP(5),
        width: widthPercentageToDP(5),
        resizeMode: 'contain'
    },
    _logo: {
        height: widthPercentageToDP(20),
        width: widthPercentageToDP(20),
        resizeMode: 'contain',
        position: 'absolute',
        top: heightPercentageToDP(20),
        left: widthPercentageToDP(45)

    },
    _profileContainer: {
        height: widthPercentageToDP(15),
        width: widthPercentageToDP(15),
        borderWidth: 1,
        borderRadius: widthPercentageToDP(15) / 2

    },
    _iccircle: {
        height: widthPercentageToDP(2),
        width: widthPercentageToDP(2),
        backgroundColor: Colors.white,
        borderWidth: 2,
        borderColor: Colors.bg,
        borderRadius: widthPercentageToDP(1),
        marginHorizontal: widthPercentageToDP(.2)
    },
    _alignment: {
        textAlign: 'left',
        marginLeft: widthPercentageToDP(2)
    },
    _removeMessage: {
        backgroundColor: Colors.bg,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 60,
        height: heightPercentageToDP(15),
        width: widthPercentageToDP(70),
        position: 'absolute',
        top: heightPercentageToDP(59),
        right: widthPercentageToDP(3),
        zIndex: 99,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: Colors.white,
        fontFamily: Fonts.Montserrat_Medium,
        fontSize: widthPercentageToDP(4)
    },
    _crossContainer: {
        borderColor: Colors.white,
        borderRadius: widthPercentageToDP(2),
        height: widthPercentageToDP(5),
        width: widthPercentageToDP(5),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
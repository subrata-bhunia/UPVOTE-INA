import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image, Text } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import ContainerStyles from '../../helper/ContainerStyles'
import ImagePickerCmp from '../../component/ImagePickerCmp'
import Images from '../../helper/Images'
import InputTypeTxt from '../../component/InputTypeTxt'
import Colors from '../../helper/Colors'
import Fonts from '../../helper/Fonts'
import ButtonType from '../../component/ButtonType'
import { CustomModal } from '../../component/CustomModal'
const GroupChatSettingScreen = ({ navigation }) => {
    const [setting, setsetting] = useState(false)
    const [imagePkShow, setimagePkShow] = useState(false);
    const [image, setImage] = useState();
    const [showremoveContainer, setshowremoveContainer] = useState(false)
    const [selectindex, setselectindex] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const userlist = [
        { userpic: Images.ic_mainProfile, name: "Amdrew Scholar", contactno: "78778888" },
        { userpic: Images.ic_mainProfile, name: "Amdrew Scholar", contactno: "78778888" },
        { userpic: Images.ic_mainProfile, name: "Amdrew Scholar", contactno: "78778888" },
        { userpic: Images.ic_mainProfile, name: "Amdrew Scholar", contactno: "78778888" },
    ]
    const settinglist = [
        { icons: Images.ic_search, title: "Search", status: false },
        { icons: Images.ic_editPost, title: "Edit", status: false },
        { icons: Images.ic_deleteUnion, title: "Delete Group", status: false },

    ]

    const count = userlist.length
    console.log("count", count)
    const onselect = (index) => {
        setselectindex(index)
        setshowremoveContainer(true)
        // console.log(selectindex)
    }
    const onSelectSetting = (index) => {

        settinglist.forEach(element => {
            element.status = false
        });
        settinglist[index].status = true
        if (settinglist[index].status === true) {
            setModalVisible(!modalVisible)
        }
    }

    return (
        <View style={[ContainerStyles.containerflexStart]}>
            <CustomModal modalVisible={modalVisible}
                setModalVisible={() => setModalVisible(!modalVisible)}
                text="Are you sure you want to delete the group?" />

            {imagePkShow === true ? (<ImagePickerCmp image={image} setImage={setImage} />) : null}
            {/* ---------------------header----------------------------- */}
            <View
                style={[ContainerStyles.rowContainer, { justifyContent: 'flex-start' }]}>
                <TouchableOpacity
                    style={styles.headerContainer}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color={Colors.back} size={widthPercentageToDP(7)} />
                </TouchableOpacity>
                <View style={[styles.headerTitle]}>
                    <Text style={[ContainerStyles.text1, { width: '100%', textAlign: 'center' }]}>{"Family Group"}</Text>
                </View>
                <View style={[styles.headerEnd]}>
                    <TouchableOpacity onPress={() => setsetting(!setting)}>
                        <Image source={Images.ic_setting} style={styles._setting} />
                    </TouchableOpacity>

                </View>
            </View>
            {/*-------------------settingContainer--------------------------*/}
            <View style={[styles.settingContainer, { display: setting === true ? 'flex' : 'none' }]}>
                {settinglist.map((item, index) =>
                    <TouchableOpacity onPress={() => onSelectSetting(index)} key={index} style={styles.settingSubContainer}>
                        <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={item.icons} style={styles._settingSubIcon} />
                        </View>
                        <View style={{ width: '70%', justifyContent: 'center' }}>
                            <Text style={ContainerStyles.textwhite}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
            {/*-------------------/settingContainer--------------------------*/}
            {/* ----------------------------/header------------------------------ */}
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(78) }]}>
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
                            icon={Images.ic_people} />
                    </View>

                    <View style={[ContainerStyles.row10PerContainer]}>
                        <View style={{ justifyContent: 'space-between', width: '90%', flexDirection: 'row' }}>
                            <Text style={ContainerStyles.text10}>{"Add more participants"}</Text>
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
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(12) }]}>
                <View style={{ alignItems: 'center', height: '100%', justifyContent: 'space-around' }}>
                    <Text style={ContainerStyles.text10}>{`${userlist.length} Participate`}</Text>
                    <ButtonType navigation={navigation}
                        btnstyle={styles._button}
                        text="Done" />
                </View>
            </View>
        </View >
    )
}

export default GroupChatSettingScreen;

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
    },
    headerContainer: {
        width: '15%',
        alignItems: 'center',
        height: heightPercentageToDP(15),
        justifyContent: 'center',
    },
    headerTitle: {
        width: '65%',
        alignItems: 'center',
        height: heightPercentageToDP(10),
        justifyContent: 'center',

    },
    headerEnd: {
        width: '20%',
        alignItems: 'center',
        height: heightPercentageToDP(10),
        justifyContent: 'center',

    },
    _setting: {
        height: widthPercentageToDP(7),
        width: widthPercentageToDP(7),
    },
    settingContainer: {
        height: heightPercentageToDP(37),
        width: widthPercentageToDP(70),
        backgroundColor: Colors.bg,
        position: 'absolute',
        right: widthPercentageToDP(9),
        top: heightPercentageToDP(10),
        zIndex: 99,
        borderTopRightRadius: widthPercentageToDP(3),
        borderRadius: widthPercentageToDP(14),
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingSubContainer: {
        flexDirection: 'row',
        height: '25%'
    },
    _settingSubIcon: {
        width: widthPercentageToDP(7),
        height: widthPercentageToDP(7),
        resizeMode: 'contain'
    },

})
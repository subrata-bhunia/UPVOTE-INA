import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import ImagePicker from 'react-native-image-crop-picker'
import DocumentPicker from 'react-native-document-picker'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../helper/Colors'
import Images from '../../helper/Images'
import Fonts from '../../helper/Fonts'
import ContainerStyles from '../../helper/ContainerStyles'
import SenderChatCmp from '../../component/SenderChatCmp';
import ReceiverChatCmp from '../../component/ReceiverChatCmp'

const GroupChatScreen = ({ navigation }) => {
    const [setting, setsetting] = useState(false)
    const [plusstate, setplusstate] = useState(false)
    const [documentstate, setdocumentstate] = useState()
    const settinglist = [
        { icons: Images.ic_deleteUnion, title: "Delete Group", status: false },
        { icons: Images.ic_search, title: "Search", status: false },
    ]

    const sharinglist = [
        { icon: Images.ic_image, title: "Image" },
        { icon: Images.ic_documents, title: "Documents" },
        { icon: Images.ic_contacts, title: "Contacts" },
        { icon: Images.ic_location, title: "Location" },
    ]

    const document = async () => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles],
            })
            for (const res of results) {
                setdocumentstate(res)
                console.log(
                    res.uri,
                    res.type, // mime type
                    // res.name,
                    // res.size,
                )
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err
            }
        }
    }

    const onPressmultisharing = (index) => {
        // console.log(index)
        switch (index) {
            case 0:
                ImagePicker.openPicker({
                    multiple: true
                }).then(images => {
                    console.log(images);
                });
                break;
            case 1:
                document()

            default:
                break;
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            enabled
            keyboardVerticalOffset={0} style={[ContainerStyles.containerflexStart]}>
            {/* ----------------------------header---------------------*/}
            <View
                style={[ContainerStyles.rowContainer, { justifyContent: 'flex-start' }]}>
                <TouchableOpacity
                    style={styles.headerContainer}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color={Colors.back} size={widthPercentageToDP(7)} />
                </TouchableOpacity>
                <View style={[styles.headerTitle]}>
                    <View style={{ width: '40%' }}>
                        <TouchableOpacity style={styles.profile}>
                            <Image source={Images.ic_mainrectangleProfile} resizeMode="cover" style={styles.profile} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[ContainerStyles.text1, { width: '100%', textAlign: 'left' }]}>{"Family Group"}</Text>
                        <Text style={[ContainerStyles.text10, { width: '100%', textAlign: 'left' }]}>{"4 participants"}</Text>
                    </View>
                </View>
                <View style={[styles.headerEnd]}>
                    <TouchableOpacity onPress={() => setsetting(!setting)}>
                        <Image source={Images.ic_profilemenu} style={styles._icgroupmenu} />
                    </TouchableOpacity>

                </View>
            </View>
            {/* //#endregion */}

            {/*-------------------settingContainer--------------------------*/}
            <View style={[styles.settingContainer, { display: setting === true ? 'flex' : 'none' }]}>
                {settinglist.map((item, index) =>
                    <TouchableOpacity onPress={() => setsetting(!setting)} key={index} style={styles.settingSubContainer}>
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
            <View style={{ height: heightPercentageToDP(80) }}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <SenderChatCmp day={"Wed"}
                        time={"20:32"}
                        senderName={"Mom"}
                        msg={"Hi, son,  how are you doing? Today, my father and I went to buy a car, bought a cool car."}
                        res={documentstate}
                    />
                    <ReceiverChatCmp
                        day={"Wed"}
                        time={"20:32"}
                        msg={"Oh! Cool Send me photo)"}
                    />

                </ScrollView>
            </View>
            <KeyboardAvoidingView behavior="position" enabled keyboardVerticalOffset={0} style={[ContainerStyles.rowContainer]}>
                <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>

                    <View style={[styles.messageContainer, { display: plusstate === false ? 'flex' : 'none' }]}>
                        <View style={{ width: '80%' }}>
                            <TextInput placeholder="Type your message..." placeholderTextColor={Colors.text7} style={{ marginLeft: widthPercentageToDP(2) }} />
                        </View>
                        <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setplusstate(!plusstate)}>
                                <Entypo name="plus" color={Colors.bg} size={widthPercentageToDP(6)} />
                            </TouchableOpacity>
                            <MaterialIcons name="emoji-emotions" color={Colors.bg} size={widthPercentageToDP(6)} />
                        </View>
                    </View>

                    {sharinglist.map((item, index) =>
                        <TouchableOpacity onPress={() => onPressmultisharing(index)} style={{ width: '25%', alignItems: 'center', display: plusstate === true ? 'flex' : 'none' }}>
                            <Image source={item.icon} style={styles.icons} />
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    )
}

export default GroupChatScreen

const styles = StyleSheet.create({
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
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    headerEnd: {
        width: '20%',
        alignItems: 'center',
        height: heightPercentageToDP(10),
        justifyContent: 'center',

    },
    profile: {
        height: widthPercentageToDP(20),
        width: widthPercentageToDP(20),
        borderRadius: widthPercentageToDP(20) / 3
    },
    _icgroupmenu: {
        height: widthPercentageToDP(7),
        width: widthPercentageToDP(7),
    },
    messageContainer: {
        width: '95%',
        height: widthPercentageToDP(15),
        backgroundColor: Colors.bg14,
        borderRadius: widthPercentageToDP(3),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingContainer: {
        height: heightPercentageToDP(20),
        width: widthPercentageToDP(70),
        backgroundColor: Colors.bg,
        position: 'absolute',
        right: widthPercentageToDP(9),
        top: heightPercentageToDP(10),
        zIndex: 99,
        borderTopRightRadius: widthPercentageToDP(3),
        borderRadius: widthPercentageToDP(14),
        justifyContent: 'space-evenly',
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
    icons: {
        height: widthPercentageToDP(7),
        width: widthPercentageToDP(7),
        resizeMode: 'contain'
    },
    title: {
        color: Colors.bg,
        fontWeight: '700'
    }
})

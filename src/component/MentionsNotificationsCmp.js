import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import TwitterTextView from 'react-native-twitter-textview'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ContainerStyles from '../helper/ContainerStyles'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Images from '../helper/Images'
import Fonts from '../helper/Fonts'
import Colors from '../helper/Colors'

const MentionsNotificationsCmp = () => {
    const notificationlist = [
        {
            profile: Images.ic_mainProfile,
            postImage: Images.postImage,
            description: "Hey @theicon @icononstr @pixsz @dan iel_ @roman @_vet_ @glyish ! Answer what is the“Top Icons Packs and Resources for Web”. You are in! 😎",
            icons: [
                { icon: Images.ic_chat, reply: 7, color: Colors.lightblack },
                { icon: Images.ic_transfer, reply: 7, color: Colors.green },
                { icon: "", reply: 4, color: Colors.red },
                { icon: Images.ic_Share, reply: '', color: "" }
            ]
        },
        {
            profile: Images.ic_mainProfile,
            postImage: Images.postImage,
            description: "Hey @theicon @icononstr @pixsz @dan iel_ @roman @_vet_ @glyish ! Answer what is the“Top Icons Packs and Resources for Web”. You are in! 😎",
            icons: [
                { icon: Images.ic_chat, reply: 7, color: Colors.lightblack },
                { icon: Images.ic_transfer, reply: 7, color: Colors.green },
                { icon: "", reply: 4, color: Colors.red },
                { icon: Images.ic_Share, reply: '', color: "" }
            ]
        },
        {
            profile: Images.ic_mainProfile,
            postImage: Images.postImage,
            description: "Hey @theicon @icononstr @pixsz @dan iel_ @roman @_vet_ @glyish ! Answer what is the“Top Icons Packs and Resources for Web”. You are in! 😎",
            icons: [
                { icon: Images.ic_chat, reply: 7, color: Colors.lightblack },
                { icon: Images.ic_transfer, reply: 7, color: Colors.green },
                { icon: "", reply: 4, color: Colors.red },
                { icon: Images.ic_Share, reply: '', color: "" }
            ]
        },
        {
            profile: Images.ic_mainProfile,
            postImage: Images.postImage,
            description: "Hey @theicon @icononstr @pixsz @dan iel_ @roman @_vet_ @glyish ! Answer what is the“Top Icons Packs and Resources for Web”. You are in! 😎",
            icons: [
                { icon: Images.ic_chat, reply: 7, color: Colors.lightblack },
                { icon: Images.ic_transfer, reply: 7, color: Colors.green },
                { icon: "", reply: 4, color: Colors.red },
                { icon: Images.ic_Share, reply: '', color: "" }
            ]
        },
        {
            profile: Images.ic_mainProfile,
            postImage: Images.postImage,
            description: "Hey @theicon @icononstr @pixsz @dan iel_ @roman @_vet_ @glyish ! Answer what is the“Top Icons Packs and Resources for Web”. You are in! 😎",
            icons: [
                { icon: Images.ic_chat, reply: 7, color: Colors.lightblack },
                { icon: Images.ic_transfer, reply: 7, color: Colors.green },
                { icon: "", reply: 4, color: Colors.red },
                { icon: Images.ic_Share, reply: '', color: "" }
            ]
        },
        {
            profile: Images.ic_mainProfile,
            postImage: Images.postImage,
            description: "Hey @theicon @icononstr @pixsz @dan iel_ @roman @_vet_ @glyish ! Answer what is the“Top Icons Packs and Resources for Web”. You are in! 😎",
            icons: [
                { icon: Images.ic_chat, reply: 7, color: Colors.lightblack },
                { icon: Images.ic_transfer, reply: 7, color: Colors.green },
                { icon: "", reply: 4, color: Colors.red },
                { icon: Images.ic_Share, reply: '', color: "" }
            ]
        },
        {
            profile: Images.ic_mainProfile,
            postImage: Images.postImage,
            description: "Hey @theicon @icononstr @pixsz @dan iel_ @roman @_vet_ @glyish ! Answer what is the“Top Icons Packs and Resources for Web”. You are in! 😎",
            icons: [
                { icon: Images.ic_chat, reply: 7, color: Colors.lightblack },
                { icon: Images.ic_transfer, reply: 7, color: Colors.green },
                { icon: "", reply: 4, color: Colors.red },
                { icon: Images.ic_Share, reply: '', color: "" }
            ]
        },
    ]

    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            {notificationlist.map((item, index) =>

                <View key={index} style={[ContainerStyles.rowContainer, { marginTop: hp(2) }]}>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '20%' }}>
                            <Image source={item.profile} style={{ height: wp(15), width: wp(15) }} />
                        </View>
                        <View style={{ width: '80%' }}>
                            <TwitterTextView style={styles.subDivision}>
                                {item.description}
                            </TwitterTextView>

                            <Image source={item.postImage} style={{ height: wp(50), width: wp(75), resizeMode: 'contain' }} />
                            {/* --------------------icons------------------------ */}
                            <View style={{ width: '100%', flexDirection: 'row', height: hp(5) }}>
                                {item?.icons.map((item, index) =>
                                    <View style={{ width: '25%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        {index !== 2 ? (
                                            <Image source={item.icon} style={{ height: wp(6), width: wp(6), resizeMode: 'contain' }} />
                                        ) : (
                                            <AntDesign name="heart" color={Colors.red} size={wp(6)} />
                                        )}
                                        <Text style={[styles.reply, { color: item.color }]}>{item.reply}</Text>
                                    </View>
                                )}
                            </View>
                        </View>

                    </View>
                </View>


            )}
        </ScrollView>


    )
}

export default MentionsNotificationsCmp

const styles = StyleSheet.create({
    reply: {
        marginStart: wp(1)
    },
    subDivision: {
        fontFamily: Fonts.Montserrat_Medium,
        color: Colors.lightblack,
        fontSize: wp(4.2),
    }
})

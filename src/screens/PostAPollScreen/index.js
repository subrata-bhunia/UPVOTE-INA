import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import DropShadow from 'react-native-drop-shadow'
import ContainerStyle from '../../helper/ContainerStyles'
import HeaderWithText from '../../component/HeaderWithText'
import Colors from '../../helper/Colors'
import ContainerStyles from '../../helper/ContainerStyles';
import DropDownMenu from '../../component/DropDownMenu';
import { TextInputCmp, TextInputWithTitleCmp } from '../../component/TextInputCmp';
import Fonts from '../../helper/Fonts';
const PostAPollScreen = ({ navigation }) => {
    const [addmore, setAddmore] = useState([])

    const onChange = () => {
        setAddmore(addmore + 1)
    }
    return (
        <View style={[ContainerStyle.containerflexStart]}>
            <HeaderWithText navigation={navigation} text="Post a Poll" />
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    {/* -----------write your question------------ */}
                    <View style={[ContainerStyle.rowContainer, { height: wp(40) }]}>
                        <View style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }}>
                            <DropShadow style={ContainerStyle.shadow1}>
                                <TouchableOpacity style={styles.imagePicker}>
                                    <TouchableOpacity style={styles._subCircle}>
                                        <Entypo name="plus" size={wp(7)} color={Colors.bg} />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </DropShadow>
                        </View>
                        <View style={{ width: '60%', justifyContent: 'center' }}>
                            <DropShadow style={ContainerStyle.shadow1}>
                                <View style={styles.pollQuestionContainer}>
                                    <View style={{ width: wp(3), height: '100%', backgroundColor: Colors.bg, borderRadius: wp(3) / 2 }} />
                                    <View style={{ width: '90%', justifyContent: 'space-between' }}>
                                        <TextInput placeholder="Write your Question"
                                            placeholderTextColor={Colors.bg13}
                                            multiline={true}
                                            style={{ color: Colors.text6 }} />

                                        <Text style={{ width: '100%', textAlign: 'right' }}>{"0/140"}</Text>

                                    </View>
                                </View>
                            </DropShadow>
                        </View>
                    </View>

                    {/* -----------------options  for the question---------------------- */}
                    <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: hp(17) }]}>
                        <DropDownMenu text="Options for the Polls" />
                    </View>
                    {Array(addmore.length).fill(addmore).map((item) =>
                        <TextInputCmp title="Option 1" />
                    )}
                    <View style={ContainerStyles.row15PerContainer}>

                        <DropShadow style={[ContainerStyle.shadow]}>
                            <TouchableOpacity onPress={onChange}
                                style={[styles.button]}>
                                <Entypo name="plus" color={Colors.white} size={wp(8)} />
                                <Text style={styles.text}>
                                    {"Add more options"}
                                </Text>
                            </TouchableOpacity>
                        </DropShadow>

                    </View>

                    <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: hp(17) }]}>
                        <TextInputWithTitleCmp title="Option 1" value="Select" />
                    </View>

                    <View style={[ContainerStyles.rowContainer, { height: hp(17) }]}>
                        <TouchableOpacity style={ContainerStyles.button}>
                            <View style={{ width: '5%' }} />
                            <Text style={ContainerStyles.text}>{'Done'}</Text>
                            <Entypo
                                name="arrow-long-right"
                                color={Colors.white}
                                size={wp(6)}
                                style={{ marginLeft: wp(8) }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default PostAPollScreen

const styles = StyleSheet.create({
    imagePicker: {
        width: wp(33),
        height: wp(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bg3
    },
    _subCircle: {
        width: wp(15),
        height: wp(15),
        borderRadius: wp(15) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    pollQuestionContainer: {
        width: '95%',
        height: wp(30),
        backgroundColor: Colors.white,
        borderRadius: wp(3),
        flexDirection: 'row'
    },
    text: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: hp(2.3),
        fontFamily: Fonts.Montserrat_SemiBold
    },
    button: {
        height: hp(7.5),
        width: wp(65),
        borderColor: Colors.text2,
        borderRadius: wp(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bg,
    },
})

import React from 'react'
import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ContainerStyles from '../../helper/ContainerStyles'
import Colors from '../../helper/Colors'
import Images from '../../helper/Images'
import AddIconCmp from '../../component/AddIconCmp';

const MessageScreen = ({ navigation }) => {
    const list = [
        {
            img: Images.ic_mainProfile
        },
        {
            img: Images.ic_mainProfile
        },
        {
            img: Images.ic_mainProfile
        },
        {
            img: Images.ic_mainProfile
        },
        {
            img: Images.ic_mainProfile
        },
    ]

    const contactlist = [
        {
            img: Images.ic_mainrectangleProfile,
            name: "Soham Henry",
            chat: "Me: Bro just fuck off",
            time: '8:30',
            status: true

        },
        {
            img: Images.ic_mainrectangleProfile,
            name: "Soham Henry",
            chat: "Me: Bro just fuck off",
            time: '8:30',
            status: false
        },
        {
            img: Images.ic_mainrectangleProfile,
            name: "Soham Henry",
            chat: "Me: Bro just fuck off",
            time: '8:30',
            status: true
        },
        {
            img: Images.ic_mainrectangleProfile,
            name: "Soham Henry",
            chat: "Me: Bro just fuck off",
            time: '8:30',
            status: true
        },
        {
            img: Images.ic_mainrectangleProfile,
            name: "Soham Henry",
            chat: "Me: Bro just fuck off",
            time: '8:30',
            status: true
        },
    ]
    return (
        <View style={[ContainerStyles.containerflexStart]}>
            {/* -------------filter--------------------  */}
            <View style={[ContainerStyles.rowContainer]}>
                <View style={{ width: '85%', alignItems: 'flex-end' }}>
                    <View style={styles.searchInput}>
                        <View style={{ width: '20%', alignItems: 'flex-end' }}>
                            <AntDesign name="search1" size={wp(7)} color={Colors.bg} />
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput
                                placeholder="Search" placeholderTextColor={Colors.text3} style={{ marginLeft: wp(5) }} />
                        </View>

                    </View>
                </View>
                <View style={{ width: '15%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
                        <Feather name="settings" color={Colors.bg} size={wp(8)} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* -----------------status------------------------- */}

            <View style={ContainerStyles.row15PerContainer}>
                <FlatList
                    data={list}
                    horizontal
                    renderItem={({ item }) =>
                        <View style={styles.listContainer}>
                            <Image source={Images.ic_mainProfile}
                                style={styles.img} />
                            <View style={styles.status} />
                        </View>
                    } />

            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(70), alignItems: 'flex-start' }]}>
                <FlatList
                    style={{ flex: 1 }}
                    data={contactlist}
                    renderItem={({ item }) =>
                        <View style={[ContainerStyles.rowContainer, { height: hp(12) }]}>
                            <View style={{ width: '95%', flexDirection: 'row' }}>
                                <View style={{
                                    width: '22%',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}>
                                    <Image
                                        source={item.img}
                                        style={styles.sbimg}
                                    />
                                    <View style={styles.substatus} />
                                </View>
                                <View style={{ width: '60%' }}>
                                    <Text style={ContainerStyles.text14}>{item.name}</Text>
                                    <Text style={[ContainerStyles.text2, { textAlign: 'left' }]}>{item.chat}</Text>
                                </View>
                                <View style={{
                                    width: '18%',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={ContainerStyles.text2}>{item.time}</Text>
                                    <Ionicons
                                        name="checkmark-done-outline"
                                        color={item.status === true ? Colors.bg : Colors.text5}
                                        size={wp(6)}
                                    />
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>
            <AddIconCmp navigation={navigation} navigationLink="NewMessage" icon={Images.ic_addicon} />
        </View>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    searchInput: {
        height: wp(14),
        width: wp(70),
        borderRadius: wp(5),
        backgroundColor: Colors.bg4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    status: {
        height: wp(6),
        width: wp(6),
        borderRadius: wp(4),
        backgroundColor: Colors.bg,
        position: 'absolute',
        left: wp(14),
        top: wp(11),
        borderWidth: wp(1.2),
        borderColor: Colors.white
    },
    substatus: {
        height: wp(6),
        width: wp(6),
        borderRadius: wp(4),
        backgroundColor: Colors.bg,
        position: 'absolute',
        left: wp(13),
        top: wp(11),
        borderWidth: wp(1.2),
        borderColor: Colors.white
    },
    img: {
        resizeMode: 'contain',
        width: wp(15),
        height: wp(15),
        borderRadius: wp(15) / 2

    },
    sbimg: {
        height: wp(17),
        width: wp(17),
        borderRadius: wp(3),
        resizeMode: 'contain'
    },
    listContainer: {

        height: wp(20),
        width: wp(20),
        borderRadius: wp(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp(0.3)

    }
})

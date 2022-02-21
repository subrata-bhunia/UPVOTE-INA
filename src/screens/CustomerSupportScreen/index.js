import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ContainerStyles from '../../helper/ContainerStyles'
import Colors from '../../helper/Colors'
import Images from '../../helper/Images'
import Fonts from '../../helper/Fonts'
import DropShadow from 'react-native-drop-shadow'
const CustomerSupportScreen = ({ navigation }) => {
    return (
        <View style={ContainerStyles.containerflexStart}>
            {/*------------------header----------------- */}
            <View style={[ContainerStyles.rowContainer, {
                justifyContent: 'flex-start',
                backgroundColor: Colors.bg,
                height: hp(25)
            }]}>
                <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color={Colors.white} size={wp(7)} />
                </TouchableOpacity>

                <View style={{ height: '60%', width: '100%', justifyContent: 'flex-end' }}>
                    <View style={{ height: '50%', justifyContent: 'flex-end', flexDirection: 'row' }} >
                        <View style={{ width: '20%', justifyContent: 'flex-end' }}>
                            <Image source={Images.ic_mainProfile} style={{ height: wp(15), width: wp(15) }} />
                        </View>
                        <View style={{ width: '80%', justifyContent: 'center' }}>
                            <Text style={styles.title}>{"Customer Support"}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* sender */}
                <View style={{
                    width: wp(97), height: hp(25), flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <View style={{ width: '30%', alignItems: 'center' }}>
                        <Image source={Images.ic_mainProfile} style={{ width: wp(15), height: wp(15) }} />
                    </View>
                    <View style={{ width: '70%' }}>
                        <View style={styles.senderContainer}>
                            <Text style={styles.senderText}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea."}</Text>
                        </View>
                        <Text style={{ width: '97%', textAlign: 'right' }}>{"11:14 AM"}</Text>
                    </View>
                </View>

                <View style={{
                    height: wp(22),
                    width: wp(22),
                    position: 'absolute',
                    top: hp(18.6),
                    left: wp(30),
                    backgroundColor: Colors.bg10
                }}>
                </View>
                {/* receiver */}
                <View style={{
                    width: wp(95), height: hp(30), flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'center'
                }}>

                    <View style={{ width: '75%', alignItems: 'center' }}>
                        <View style={styles.receiverContainer}>
                            <Text style={styles.senderText}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea."}</Text>
                        </View>
                        <Text style={{ width: '85%', textAlign: 'left' }}>{"11:14 AM"}</Text>
                    </View>
                    <View style={{ width: '25%', alignItems: 'flex-end' }}>
                        <Image source={Images.ic_mainProfile} style={{ width: wp(15), height: wp(15) }} />
                    </View>
                </View>
            </ScrollView>
            <View style={{ height: hp(15), width: '100%', alignItems: 'center' }}>
                <DropShadow style={[ContainerStyles.shadow1, {
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }]}>
                    <View style={{
                        width: wp(90),
                        height: wp(15),
                        borderRadius: wp(20),
                        backgroundColor: Colors.bg12,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}>
                            <TextInput placeholder="Type a message..." placeholderTextColor="#818181" />
                        </View>
                        <View style={{ width: '20%', alignItems: 'center' }}>
                            <Image source={Images.ic_sendButton} style={{ width: wp(4), height: wp(4) }} />
                        </View>
                    </View>
                </DropShadow>
            </View>
        </View >
    )
}

export default CustomerSupportScreen

const styles = StyleSheet.create({
    headerContainer: {
        width: '15%',
        alignItems: 'center',
        height: '50%',
        justifyContent: 'flex-start',
    },
    title: {
        fontFamily: Fonts.Montserrat_SemiBold,
        fontWeight: '500',
        color: Colors.white,
        fontSize: wp(5),
    },
    senderText: {
        color: '#22215B60',
        lineHeight: 18,
        fontFamily: Fonts.Montserrat_Regular,
        padding: wp(3)
    },
    senderContainer: {
        height: '60%',
        width: '97%',
        borderRadius: 20,
        backgroundColor: Colors.bg10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    receiverContainer: {
        height: '60%',
        width: '93%',
        borderRadius: 20,
        backgroundColor: Colors.bg11,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

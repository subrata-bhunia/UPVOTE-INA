import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Images from '../helper/Images'
import Colors from '../helper/Colors'
import ContainerStyles from '../helper/ContainerStyles'
import Fonts from '../helper/Fonts'
const SettingHeader = ({ navigation, title }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', height: hp(35), flexDirection: 'row' }}>
            <ImageBackground source={Images.headerbackground} style={{ height: wp(80), width: '100%' }} resizeMode="cover">
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" color={Colors.back} size={wp(7)} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'flex-start', flexDirection: 'row' }}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SettingHeader

const styles = StyleSheet.create({
    header: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        height: '30%',
    },
    headerContainer: {
        width: '15%',
        alignItems: 'center',
        height: hp(10),
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: Fonts.Montserrat_SemiBold,
        color: Colors.white,
        fontWeight: '500',
        fontSize: wp(7)
    }
})

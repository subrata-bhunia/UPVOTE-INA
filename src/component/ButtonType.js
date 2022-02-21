import React from 'react'
import { View, TextInput, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ContainerStyles from '../helper/ContainerStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../helper/Colors';
import Images from '../helper/Images';
import Fonts from '../helper/Fonts';


const ButtonType = ({ navigation, navigationLink = "", text, bgColor = Colors.bg, textColor, height, width, icon, btnstyle }) => {
    // console.log("ButtonType", navigation)
    return (

        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(navigationLink)} style={[btnstyle, { backgroundColor: bgColor }]}>
            {text && <Text style={styles.text}>
                {text}
            </Text>}
            {
                icon && <Image source={icon} style={styles.icon} />
            }
        </TouchableOpacity>

    )
}
export default ButtonType;
const styles = StyleSheet.create({

    text: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: hp(2.5),
        fontFamily: Fonts.Montserrat_Medium
    },
    icon: {
        height: wp(8),
        width: wp(4),
        resizeMode: 'contain'
    }
})
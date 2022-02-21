import React from 'react'
import { View, TextInput, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import ContainerStyles from '../helper/ContainerStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../helper/Colors';
import Images from '../helper/Images';
import Fonts from '../helper/Fonts';
const DynamicPicker = ({ text }) => {
    return (

        <TouchableOpacity activeOpacity={0.5} style={ContainerStyles.input}>
            {text &&
                <Text style={styles.text}>{text}</Text>
            }
        </TouchableOpacity >

    )
}

export default DynamicPicker;

const styles = StyleSheet.create({
    text:
    {
        color: Colors.text2,
        fontSize: wp(4),
        fontFamily: Fonts.Montserrat_Medium,
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',


    }
})
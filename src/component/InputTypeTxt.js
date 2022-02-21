import React from 'react'
import { View, TextInput, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ContainerStyles from '../helper/ContainerStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../helper/Colors';
import Images from '../helper/Images';
import Fonts from '../helper/Fonts';
const InputTypeTxt = ({ text, icon, plholder, value, righIcon, onchangeText, textType = false }) => {
    console.log("righticon", righIcon)
    return (
        <View style={[ContainerStyles.rowContainer, { backgroundColor: Colors.white }]}>
            <TouchableOpacity style={styles.input}>
                <View style={{ width: '20%', alignItems: 'center' }}>
                    {icon && <Image source={icon} style={styles.img} />}
                </View>
                <View style={{ width: '60%', alignItems: 'flex-start' }}>
                    {plholder && < TextInput placeholder={plholder}
                        value={value}
                        underlineColorAndroid="transparent"
                        selectionColor={Colors.white}
                        placeholderTextColor={Colors.text2}
                        onChangeText={onchangeText}
                        style={styles.text}
                        editable={true}
                        secureTextEntry={textType}
                    />}
                </View>
                <View style={{ width: '20%', alignItems: 'center' }}>
                    {righIcon && <Image source={righIcon} style={styles.img} />}
                    {text && <Text style={ContainerStyles.text10}>{text}</Text>}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputTypeTxt;

const styles = StyleSheet.create({
    input: {
        height: hp(7.5),
        width: wp(90),
        borderWidth: 1,
        borderColor: Colors.text2,
        borderRadius: wp(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: hp(5),
        width: wp(5),
        resizeMode: 'contain'
    },
    text:
    {
        color: Colors.black,
        textDecorationLine: 'none',
        fontSize: wp(4),
        fontFamily: Fonts.Montserrat_Medium,
        width: '100%'
    }
})
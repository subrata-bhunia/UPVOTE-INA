import React from "react";
import { View, Image, TextInput, Text } from 'react-native'
import Images from "../helper/Images";
import Fonts from "../helper/Fonts";
import Colors from "../helper/Colors";
import ContainerStyles from "../helper/ContainerStyles";
import { heightPercentageToDP } from "react-native-responsive-screen";

const InputCmp = ({ icon, placeholder, label, bgColor, textColor }) => {
    return (

        <View style={{
            width: '85%',
            alignItems: 'center',
            height: heightPercentageToDP(10),
            justifyContent: 'center',
            borderRadius: 20,
            flexDirection: 'row',
            backgroundColor: bgColor
        }}>
            <View style={{
                width: '20%',
                alignItems: 'center',
                height: '70%',
                justifyContent: 'flex-start'
            }}>
                {icon && <Image source={icon} style={{
                    tintColor: Colors.purple,
                    height: 30,
                    width: 30,
                    resizeMode: 'contain'
                }} />}
            </View>
            <View style={{ width: '80%', justifyContent: 'center' }}>
                <Text style={[ContainerStyles.text15,
                {
                    color: textColor,
                    marginTop: '3%',
                    fontFamily: Fonts.Montserrat_SemiBold
                }]}>{label}</Text>
                <TextInput placeholder={placeholder}
                    placeholderTextColor={textColor}
                    style={{ height: '60%', width: '100%', color: Colors.bg }} />
            </View>

        </View>

    )
}
export default InputCmp;
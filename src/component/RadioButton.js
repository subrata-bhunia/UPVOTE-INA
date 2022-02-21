import { placeholder } from '@babel/types'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Colors from '../helper/Colors'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Fonts from '../helper/Fonts'

const RadioButton = ({ active, placeholder, setSelect }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => setSelect(!active)} style={styles.container}>
            <Text style={styles.placeholder}>{placeholder}</Text>
            <View style={styles.activeIcon}>
                {active ? <Fontisto name='radio-btn-active' size={heightPercentageToDP(3)} color={Colors.bg} /> :
                    <Fontisto name='radio-btn-passive' size={heightPercentageToDP(3)} color={Colors.bg} />
                }
            </View>
        </TouchableOpacity>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: heightPercentageToDP(7.5),
        borderRadius: heightPercentageToDP(7.5 / 2),
        borderWidth: 1,
        borderColor: Colors.text2,

    },
    placeholder: {
        paddingHorizontal: widthPercentageToDP(4),
        fontFamily: Fonts.Montserrat_Medium,
        fontSize: heightPercentageToDP(2),
        color: Colors.text2,
    },
    activeIcon: {
        paddingHorizontal: widthPercentageToDP(2)
    }
})

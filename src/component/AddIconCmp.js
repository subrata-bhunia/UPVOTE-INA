
import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Animated, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropShadow from 'react-native-drop-shadow';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../helper/Colors';
import Images from '../helper/Images';
import ContainerStyles from '../helper/ContainerStyles';

const AddIconCmp = ({ navigation, navigationLink, icon }) => {
    // console.log(navigation, navigationLink)
    const [open, openState] = useState(false)


    return (
        <View style={[styles.container]}>
            <DropShadow style={[ContainerStyles.shadow, styles.button]}>
                <TouchableOpacity activeOpacity={0.5} style={[
                    styles.button,
                    styles.menu,
                ]} onPress={() => navigation.navigate(navigationLink)} >
                    {icon &&
                        <Image source={Images.ic_addicon} style={styles.ic_edit} />
                    }

                </TouchableOpacity>
            </DropShadow>

        </View>


    )
}

export default AddIconCmp

const styles = StyleSheet.create({
    touch: {
        borderColor: 'red',
        borderWidth: 2,
        flex: 1,
        position: 'absolute',
    },
    container: {
        top: hp(75),
        position: 'absolute',
        right: wp(25)
    },
    button: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    subButton: {
        position: 'absolute',
        width: wp(50),
        height: wp(15),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.bg,
        right: wp(-20),
        flexDirection: 'row',
        top: hp(3),

    },
    menu: {
        backgroundColor: Colors.bg,
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,

    },
    ic_edit: {
        height: wp(7),
        width: wp(7),
        resizeMode: 'contain'
    },
    text: {
        color: Colors.white,
        fontSize: wp(4)
    }
});

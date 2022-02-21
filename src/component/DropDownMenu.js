import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DropShadow from 'react-native-drop-shadow'
import Entypo from 'react-native-vector-icons/Entypo';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ContainerStyles from '../helper/ContainerStyles'
import Colors from '../helper/Colors'
import Fonts from '../helper/Fonts'
const DropDownMenu = ({ text, status }) => {
    return (

        <DropShadow style={[ContainerStyles.shadow1]}>
            <View style={styles.buttonContainer}>
                <View style={styles.subPersonalContainer}>
                    <Text style={ContainerStyles.textwhite}>
                        {text}
                    </Text>
                    <Entypo name="chevron-down" color={Colors.white} size={wp(7)} />
                </View>
            </View>
        </DropShadow>

    )
}

export default DropDownMenu

const styles = StyleSheet.create({
    buttonContainer: {
        height: wp(20),
        width: wp(95),
        backgroundColor: Colors.bg,
        borderRadius: wp(3),
        borderWidth: 0.5,
        borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subPersonalContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

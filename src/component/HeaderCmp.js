import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../helper/Colors'
import ContainerStyles from '../helper/ContainerStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const HeaderCmp = ({ navigation }) => {
    return (
        <View style={[ContainerStyles.rowContainer, { justifyContent: 'flex-start' }]}>
            <TouchableOpacity style={style.headerContainer} onPress={() => navigation.goBack()}>
                <AntDesign name="left" color={Colors.back} size={wp(7)} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderCmp;

const style = StyleSheet.create({
    headerContainer: {
        width: '15%',
        alignItems: 'center',
        height: hp(15),
        justifyContent: 'center'
    }
})
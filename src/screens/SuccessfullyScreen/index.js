import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Entypo from 'react-native-vector-icons/Entypo'
import HeaderCmp from '../../component/HeaderCmp'
import Colors from '../../helper/Colors'
import ContainerStyles from '../../helper/ContainerStyles'
import Fonts from '../../helper/Fonts'
import Images from '../../helper/Images'

const SuccessfullyScreen = ({ navigation }) => {
    return (
        <View style={ContainerStyles.containerflexStart}>
            <HeaderCmp navigation={navigation} />
            <View style={[ContainerStyles.rowContainer]}>
                <Text style={styles.text}>{"Successfully Done"}</Text>
            </View>
            <View style={[ContainerStyles.rowContainer, { height: hp(40) }]}>
                <Image source={Images.ic_check} style={{ height: wp(50), width: wp(50), resizeMode: 'contain' }} />
            </View>
            <View style={[ContainerStyles.rowContainer]}>
                <Text style={[ContainerStyles.text11, { color: Colors.lightblack }]}>{"Your Password is successfully changed."}</Text>
            </View>
            {/* --------------------------update button---------------------------- */}
            <View style={[ContainerStyles.rowContainer, { height: hp(30), alignItems: 'flex-end' }]}>
                <TouchableOpacity onPress={() => navigation.navigate('TopTabNavigation')} style={ContainerStyles.button}>
                    <View style={{ width: '10%' }} />
                    <Text style={ContainerStyles.text}>{'Done'}</Text>
                    <Entypo
                        name="arrow-long-right"
                        color={Colors.white}
                        size={wp(6)}
                        style={{ marginLeft: wp(8) }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SuccessfullyScreen

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.Montserrat_Medium,
        fontSize: wp(7),
        color: Colors.text6
    }
})

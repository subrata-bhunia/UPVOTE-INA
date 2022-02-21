/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    _logo: {
        width: wp(30),
        height: wp(30 * 160 / 123)
    },
    _ellipseOne: {
        height: hp(30),
        width: hp(30),
        position: 'absolute',
        top: wp(1 * 245 / -20),
        left: wp(1 * 245 / -54)
    },
    _ellipseTwo: {
        width: wp(30),
        height: wp(30 * 78 / 78),
        position: 'absolute',
        top: wp(7 * 375 / 113),
        left: wp(35 * 375 / 236)
    },
    _ellipseThree: {
        width: wp(14),
        height: wp(14),
        position: 'absolute',
        top: wp(1 * 375 / 80),
        left: wp(60 * 375 / 310)
    }
})

export default styles;
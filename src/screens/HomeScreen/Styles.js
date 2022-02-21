import { StyleSheet, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    img: {
        width: wp(100),
        height: hp(35),
    }
})

export default styles;
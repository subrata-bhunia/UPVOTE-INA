import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../helper/Colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
const Styles = StyleSheet.create({
    roundedTextInput: {
        borderRadius: 25,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: Colors.bg,
        borderTopColor: Colors.bg,
        borderLeftColor: Colors.bg,
        borderRightColor: Colors.bg,
        width: 50,
        height: 50,
        borderColor: Colors.bg,
        alignItems: 'center',
        alignContent: 'center',
        // marginLeft: 15,
        // color: Colors.red,
        fontSize: wp(7),
        alignSelf:'center'
    },
    con:{
        alignSelf:'center'
    }
})

export default Styles
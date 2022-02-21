import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import DropShadow from "react-native-drop-shadow";
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../helper/Colors'
import ContainerStyles from '../helper/ContainerStyles'

const SearchCmp = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            {props.search === true ?
                (<View style={styles.searchInput}>
                    <View style={{ width: '20%', alignItems: 'flex-end' }}>
                        <AntDesign name="search1" size={wp(7)} color={Colors.bg} />
                    </View>
                    <View style={{ width: '70%' }}>
                        <TextInput placeholder="Search" placeholderTextColor={Colors.text3} style={{ marginLeft: wp(5) }} />
                    </View>
                </View>)
                : null
            }
            <TouchableOpacity onPress={() => props.setSearch(!props.search)}
                style={{ position: 'absolute', top: hp(0), left: wp(83.5), zIndex: 1 }}>
                <DropShadow style={[ContainerStyles.shadow]}>
                    <View style={[styles.searchButton,
                    { backgroundColor: props.search === true ? Colors.bg3 : Colors.bg }]}>
                        {props.search === false ?
                            <AntDesign name="search1" color={Colors.white} size={wp(8)} />
                            :
                            <Entypo name="cross" color={Colors.bg} size={wp(8)} />
                        }
                    </View>
                </DropShadow>
            </TouchableOpacity>
        </View>
    )
}

export default SearchCmp

const styles = StyleSheet.create({
    searchButton: {
        height: wp(16),
        width: wp(16),
        borderRadius: wp(16) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bg,

    },
    searchInput: {
        height: wp(14),
        width: wp(70),
        position: 'absolute',
        borderRadius: wp(5),
        backgroundColor: Colors.bg4,
        flexDirection: 'row',
        left: wp(10),
        top: hp(1),
        alignItems: 'center'

    }
})

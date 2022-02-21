import React, { useState, useLayoutEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TrendsScreen from '../screens/TrendsScreen';
import FilterScreen from '../screens/FilterScreen';
import FriendsScreen from '../screens/FriendsScreen';
import NotificationScreen from '../screens/NotificationScreen'
import MessageScreen from '../screens/MessageScreen'
import ContainerStyles from '../helper/ContainerStyles';

import Images from '../helper/Images';
import Colors from '../helper/Colors';
const Tab = createMaterialTopTabNavigator();


const main = (props) => {
    
    const iconsList = [
        { icon: Images.ic_home, highlightIcon: Images.ic_highlightHome, navigationLink: 'FilterScreen' },
        { icon: Images.ic_stars, highlightIcon: Images.ic_highlightStars, navigationLink: 'TrendsScreen' },
        { icon: Images.ic_people, highlightIcon: Images.ic_highlightPeople, navigationLink: 'FriendsScreen' },
        { icon: Images.ic_direction, highlightIcon: Images.ic_direction, navigationLink: 'MessageScreen' },
        { icon: Images.ic_well, highlightIcon: Images.ic_highlightWell, navigationLink: 'NotificationScreen' },
    ]


    return (
        <View style={[ContainerStyles.rowContainer, { height: hp(15) }]}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}  style={{ width: '20%', height: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image source={Images.ic_menu} style={styles.ic_menu} />
            </TouchableOpacity>
            <View style={{ width: '80%', flexDirection: 'row' }}>
                {iconsList.map((item, index) =>
                    <View key={index} style={{ width: '20%' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate(item.navigationLink)} style={styles._menuContain}>
                            <Image source={
                                props.navigationState.index === index
                                    ?
                                    item.highlightIcon
                                    : item.icon
                            } style={styles.ic_menu} />
                            {props.navigationState.index === index
                                &&
                                <View style={styles._line} />}
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={{ position: 'absolute', top: hp(-1), right: wp(2) }}>
                <Image source={Images.ic_refresh} style={styles.ic_menu} />
            </View>
        </View>
    )
}
const TopTabNavigation = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="FilterScreen"
            tabBar={(props) => main(props)}>
            <Tab.Screen name="FilterScreen" component={FilterScreen} />
            <Tab.Screen name="TrendsScreen" component={TrendsScreen} />
            <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
            <Tab.Screen name="MessageScreen" component={MessageScreen} />
            <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
        </Tab.Navigator>
    );
}
export default TopTabNavigation

const styles = StyleSheet.create({
    ic_menu: {
        height: wp(6),
        width: wp(6),
        resizeMode: 'contain',
        marginTop: hp(6)
    },
    _menuContain: {
        width: '20%',
         height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    _line: {
        height: 4,
        width: wp(10),
        backgroundColor: Colors.bg,
        borderRadius: 3

    }
})
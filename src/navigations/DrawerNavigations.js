import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import DropShadow from 'react-native-drop-shadow';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Images from '../helper/Images';
import Colors from '../helper/Colors';
import Fonts from '../helper/Fonts';
import ContainerStyles from '../helper/ContainerStyles';
import TopTabNavigation from './TopTabNavigation';
import LogoutModel from '../component/ModelCmp';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
//screen
import MainProfileScreen from '../screens/MainProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileSettingScreen from '../screens/ProfileSettingScreen';
import BlockUsersScreen from '../screens/BlockUsersScreen';
import SettingChangePassword from '../screens/SettingChangePassword';
import AboutScreen from '../screens/AboutScreen';
import TermsConditionScreen from '../screens/TermsConditionScreen'
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen'
import CustomerSupportScreen from '../screens/CustomerSupportScreen';
const Drawer = createDrawerNavigator();

const { height, width } = Dimensions.get('window');

const HamburgerMain = navigation => {
    const usefullLink = [
        { id: 1, text: 'Home', navigationLink: 'TopTabNavigation' },
        { id: 2, text: 'Profile', navigationLink: 'EditProfileScreen' },
        { id: 3, text: 'Settings', navigationLink: 'ProfileSettingScreen' },
        { id: 4, text: 'Terms & Conditions', navigationLink: 'TermsConditionScreen' },
        { id: 5, text: 'Privacy Policy', navigationLink: 'PrivacyPolicyScreen' },
        { id: 6, text: 'About Us', navigationLink: 'AboutScreen' },
        { id: 7, text: 'Support', navigationLink: 'CustomerSupportScreen' },
    ];
    let isvisible = false;
    const onPressVisible = () => {
        if (isvisible === false) {
            isvisible = true;
        } else {
            isvisible = false;
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View>
                <View style={[styles.profilecontainer]}>
                    <View style={[styles.leftContainer]}>
                        <View style={{ width: '40%', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('MainProfileScreen')}
                                style={{
                                    height: hp(15),
                                    width: wp(15),
                                    borderRadius: wp(15) / 2,
                                }}>
                                <Image
                                    source={Images.ic_mainProfile}
                                    style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '60%' }}>
                            <Text style={[ContainerStyles.text17, { textAlign: 'left' }]}>
                                {'Neelesh'}
                            </Text>
                            <Text style={[ContainerStyles.text2, { textAlign: 'left' }]}>
                                {'Kolkatta, India'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TopTabNavigation')}
                            style={{
                                height: '100%',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Entypo name="cross" size={26} style={{ marginLeft: wp(15) }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {usefullLink.map(item => (
                    <View style={[styles.container5, { marginTop: height * 0.025 }]} key={item.id}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(item.navigationLink)}
                            style={{ flexDirection: 'row' }}>
                            <View style={{ width: '80%' }}>
                                <Text style={styles.text1}>{item.text}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}

                <View style={{ height: height * 0.23, alignItems: 'center' }}>
                    <View
                        style={{ width: '80%', height: '100%', justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={onPressVisible}
                            style={styles._logoutContainer}>
                            <Image source={Images.ic_logout} style={styles.ic_logout} />
                            <Text style={ContainerStyles.text17}>{'Logout'}</Text>
                        </TouchableOpacity>
                        <Text
                            style={[
                                ContainerStyles.text2,
                                { textAlign: 'left', marginTop: wp(7) },
                            ]}>
                            {'Version 1.0.0'}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
const DrawerNavigations = ({ navigation }) => {
    return (
        <Drawer.Navigator
            initialRouteName="TopTabNavigation"
            drawerContent={() => HamburgerMain(navigation)}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: '100%',
                    backgroundColor: Colors.bg6,
                },
            }}>
            <Drawer.Screen name="TopTabNavigation" component={TopTabNavigation} />
            <Drawer.Screen name="MainProfileScreen" component={MainProfileScreen} />
            <Drawer.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Drawer.Screen name="BlockUsersScreen" component={BlockUsersScreen} />
            <Drawer.Screen
                name="SettingChangePassword"
                component={SettingChangePassword}
            />
            <Drawer.Screen
                name="ProfileSettingScreen"
                component={ProfileSettingScreen}
            />
            <Drawer.Screen name="AboutScreen" component={AboutScreen} />
            <Drawer.Screen name="TermsConditionScreen" component={TermsConditionScreen} />
            <Drawer.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
            <Drawer.Screen name="CustomerSupportScreen" component={CustomerSupportScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigations;

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
    },
    profilecontainer: {
        height: height * 0.25,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    leftContainer: {
        width: '70%',
        height: '100%',
        borderBottomRightRadius: 70,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer: {
        width: '30%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container5: {
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text1: {
        fontFamily: Fonts.Montserrat_Medium,
        fontWeight: '500',
        fontSize: 17,
        color: Colors.black,
    },
    _logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '35%',
    },
    ic_logout: {
        height: wp(6),
        width: wp(6),
        resizeMode: 'contain',
    },
});

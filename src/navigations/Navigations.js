/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import VerifyOTPNumberScreen from '../screens/VerifyOTPNumberScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LangauageSelectionScreen from '../screens/LangauageSelectionScreen';
import InterestSelectionScreen from '../screens/InterestSelectionScreen';
import PasswordRecovery from '../screens/PasswordRecovery';
import NewPasswordScreen from '../screens/NewPasswordScreen';

import TopTabNavigation from './TopTabNavigation';
import SettingScreen from '../screens/SettingScreen';
import NewMessage from '../screens/NewMessage';
import NewGroup from '../screens/NewGroup';
import CreateNewGroup from '../screens/CreateNewGroup';
import DrawerNavigations from './DrawerNavigations';
import EditProfileScreen from '../screens/EditProfileScreen';
import SuccessfullyScreen from '../screens/SuccessfullyScreen';
import PostAPollScreen from '../screens/PostAPollScreen'
import PostAQuestion from '../screens/PostAQuestions'
import PostAMagicQuestions from '../screens/PostAMagicQuestions'
import GroupChatSettingScreen from '../screens/GroupChatSettingScreen';
import GroupChatScreen from '../screens/GroupChatScreen'
const Stack = createNativeStackNavigator();
const Navigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SplashScreen"
                screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen
                    name="VerifyOTPNumberScreen"
                    component={VerifyOTPNumberScreen}
                />
                <Stack.Screen
                    name="ForgetPasswordScreen"
                    component={ForgetPasswordScreen}
                />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen
                    name="LangauageSelectionScreen"
                    component={LangauageSelectionScreen}
                />
                <Stack.Screen
                    name="InterestSelectionScreen"
                    component={InterestSelectionScreen}
                />
                <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />

                <Stack.Screen name="SettingScreen" component={SettingScreen} />
                <Stack.Screen name="NewMessage" component={NewMessage} />
                <Stack.Screen name="NewGroup" component={NewGroup} />
                <Stack.Screen name="CreateNewGroup" component={CreateNewGroup} />
                <Stack.Screen name="DrawerNavigations" component={DrawerNavigations} />
                <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
                <Stack.Screen name="SuccessfullyScreen" component={SuccessfullyScreen} />
                <Stack.Screen name="PostAPollScreen" component={PostAPollScreen} />
                <Stack.Screen name="PostAQuestion" component={PostAQuestion} />
                <Stack.Screen name="PostAMagicQuestions" component={PostAMagicQuestions} />
                {/*--------------------------family group------------------------ */}
                <Stack.Screen name="GroupChatSettingScreen" component={GroupChatSettingScreen} />
                <Stack.Screen name="GroupChatScreen" component={GroupChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigations;

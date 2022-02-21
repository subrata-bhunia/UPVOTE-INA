import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import HeaderWithText from '../../component/HeaderWithText';
import ContainerStyles from '../../helper/ContainerStyles';
import Colors from '../../helper/Colors';

const ProfileSettingScreen = ({navigation}) => {
  const setting = [
    {title: 'Change Langugage', navigationLink: ''},
    {title: 'Change Password', navigationLink: 'SettingChangePassword'},
    {title: 'Add Interest', navigationLink: ''},
    {title: 'Block User', navigationLink: 'BlockUsersScreen'},
    {title: 'Block Post', navigationLink: ''},
    {title: 'Enable Notification', navigationLink: ''},
    {title: 'Enable OTP Verification', navigationLink: ''},
  ];

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={ContainerStyles.containerflexStart}>
      <HeaderWithText text="Settings" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {setting.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.navigationLink)}
            key={item}
            style={[
              ContainerStyles.rowContainer,
              {height: heightPercentageToDP(7)},
            ]}>
            <View style={{width: '90%', flexDirection: 'row'}}>
              <View
                style={{
                  width: '70%',

                  alignItems: 'flex-start',
                }}>
                <Text style={ContainerStyles.text7}>{item.title}</Text>
              </View>
              <View style={{width: '30%', alignItems: 'flex-end'}}>
                {index === 0 && <Text>{'English'}</Text>}
                {index === 5 && (
                  <Switch
                    trackColor={{false: Colors.text2, true: Colors.bg}}
                    thumbColor={isEnabled ? Colors.white : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                )}
                {index === 6 && (
                  <Switch
                    trackColor={{false: Colors.text2, true: Colors.bg}}
                    thumbColor={isEnabled ? Colors.white : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileSettingScreen;

const styles = StyleSheet.create({});

import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Switch } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import HeaderWithText from '../../component/HeaderWithText'
import ContainerStyles from '../../helper/ContainerStyles'
import Colors from '../../helper/Colors';
import CustomSwitchButton from '../../component/CustomSwitchButton'
const SeetingScreen = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const onSelectSwitch = index => {
        alert('Selected index: ' + index);
    };
    const data = [
        {
            title: "Receive messages from anyone",
            description: "You will be able to receive Direct Message requests from anyone on Upvote, even if you don’t follow them."
        },
        {
            title: "Quality filter",
            description: "You will be able to receive Direct Message requests from anyone on Upvote, even if you don’t follow them."
        },
        {
            title: "Show read receipts",
            description: "You will be able to receive Direct Message requests from anyone on Upvote, even if you don’t follow them."
        },

    ]
    return (
        <View style={ContainerStyles.containerStart}>
            <HeaderWithText navigation={navigation} text={"Settings"} />
            <ScrollView>
                <View style={[ContainerStyles.row10PerContainer, { borderBottomWidth: 1, borderBottomColor: Colors.line }]}>
                    <View style={{ width: '85%', alignItems: 'flex-end' }}>
                        <Feather name="settings" color={Colors.bg} size={wp(8)} />
                    </View>
                </View>
                {data.map((item, index) =>
                    <View key={index} style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(15) }]}>
                        <View style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            width: '100%',
                            justifyContent: 'center',
                            height: '100%',
                            alignItems: 'center',
                            borderBottomColor: Colors.line
                        }}>
                            <View style={{ width: '80%', }}>
                                <Text style={ContainerStyles.text17}>{item.title}</Text>
                                <Text style={[ContainerStyles.text2, {
                                    width: '100%',
                                    textAlign: 'left',
                                    marginTop: heightPercentageToDP(1)
                                }]}>
                                    {item.description}
                                    <Text style={ContainerStyles.text10}>
                                        {"Learn more"}</Text>
                                </Text>
                            </View>
                            <View style={{ width: '10%', height: '70%', justifyContent: 'flex-start' }}>
                                <CustomSwitchButton
                                    isEnabled={isEnabled}
                                    setIsEnabled={setIsEnabled}
                                />
                            </View>
                        </View>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

export default SeetingScreen

const styles = StyleSheet.create({})

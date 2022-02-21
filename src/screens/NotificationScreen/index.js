import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AllNotificationCmp from '../../component/AllNotificationCmp'
import MentionsNotificationsCmp from '../../component/MentionsNotificationsCmp';
import ContainerStyles from '../../helper/ContainerStyles'
import { ButtonGroup } from 'react-native-elements';
import Colors from '../../helper/Colors';
import Fonts from '../../helper/Fonts';
import FloatingButton from '../../component/FloatingButton';
const NotificationScreen = ({ navigation }) => {
    const [shouldShow, setShouldShow] = useState(0);
    const buttons = ["All", "Mentions"];
    const buttongrupref = React.useRef();
    const initialValue = {
        selectedIndex: 0,
    };
    const showContent = (e) => {
        setShouldShow(e);
    };
    return (
        <View style={ContainerStyles.containerflexStart}>
            <View style={ContainerStyles.rowContainer}>
                <ButtonGroup
                    ref={buttongrupref}
                    buttons={buttons}
                    onPress={(e) => showContent(e)}
                    selectedIndex={shouldShow}
                    containerStyle={{
                        borderWidth: 0,
                        height: hp(5),
                        width: '100%',
                        backgroundColor: 'transparent',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',

                    }}
                    buttonContainerStyle={{
                        borderRightWidth: 0,
                        width: '100%',

                    }}
                    buttonStyle={{
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.line

                    }}
                    textStyle={styles.groupText}
                    selectedTextStyle={styles.selectedgroupText}
                    selectedButtonStyle={{
                        backgroundColor: 'transparent',
                        borderBottomWidth: 2,
                        borderBottomColor: Colors.bg

                    }}
                />
            </View>

            <View style={ContainerStyles.rowContainer}>

                {shouldShow === 0 && (<AllNotificationCmp />)}
                {shouldShow === 1 && (<MentionsNotificationsCmp />)}

            </View>
            <FloatingButton navigation={navigation} />
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    selectedgroupText: {
        fontSize: wp(4),
        fontWeight: '400',
        color: Colors.bg,
        fontFamily: Fonts.Montserrat_Medium,
    },
})

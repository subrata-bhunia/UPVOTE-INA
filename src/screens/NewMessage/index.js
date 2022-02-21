import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { TabView, SceneMap } from 'react-native-tab-view'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ButtonWithIcon from '../../component/ButtonWithIcon'
import ContainerStyles from '../../helper/ContainerStyles'
import HeaderWithText from '../../component/HeaderWithText'
import Colors from '../../helper/Colors'
import Images from '../../helper/Images'
import ContactList from '../../component/ContactList'
import { ButtonGroup } from 'react-native-elements';
import Fonts from '../../helper/Fonts'

const NewMessage = ({ navigation }) => {
    const [shouldShow, setShouldShow] = useState(0);
    const buttons = ["People", "Group"];
    const buttongrupref = React.useRef();
    const initialValue = {
        selectedIndex: 0,
    };
    const showContent = (e) => {
        setShouldShow(e);
    };
    return (
        <View style={ContainerStyles.containerflexStart}>
            <HeaderWithText navigation={navigation} text={"New Message"} />
            {/* -------------filter--------------------  */}
            <View style={[ContainerStyles.rowContainer]}>
                <View style={{ width: '80%', alignItems: 'flex-end' }}>
                    <View style={styles.searchInput}>
                        <View style={{ width: '20%', alignItems: 'flex-end' }}>
                            <AntDesign name="search1" size={wp(7)} color={Colors.bg} />
                        </View>
                        <View style={{ width: '70%' }}>
                            <TextInput
                                placeholder="Search" placeholderTextColor={Colors.text3} style={{ marginLeft: wp(5) }} />
                        </View>

                    </View>
                </View>
                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Text style={ContainerStyles.text13}>{"Cancel"}</Text>
                </View>
            </View>

            <View style={[ContainerStyles.rowContainer, { height: hp(15) }]}>
                <View style={{ width: '90%', flexDirection: 'row', height: '100%', alignItems: 'center', }}>
                    <ButtonWithIcon icon={Images.ic_plusPeople} navigation={navigation} navigationLink="NewGroup" />
                    <Text style={[ContainerStyles.text18, { marginLeft: wp(4) }]}>{"New Group"}</Text>
                </View>
            </View>
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
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.bg

                    }}
                />
            </View>

            <ContactList />

        </View>
    )
}

export default NewMessage

const styles = StyleSheet.create({
    searchInput: {
        height: wp(14),
        width: wp(70),
        borderRadius: wp(5),
        backgroundColor: Colors.bg4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    groupText: {
        color: Colors.text2,
        fontFamily: Fonts.Montserrat_Medium,
        fontWeight: '400',
        fontSize: wp(4),

    },
    selectedgroupText: {
        fontSize: wp(4),
        fontWeight: '400',
        color: Colors.bg,
        fontFamily: Fonts.Montserrat_Medium,
    },
})

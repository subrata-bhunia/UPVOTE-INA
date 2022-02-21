import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'

import ContainerStyles from '../../helper/ContainerStyles'
import Images from '../../helper/Images'
import Colors from '../../helper/Colors'
import SettingHeader from '../../component/SettingHeader'
import Fonts from '../../helper/Fonts'
const AboutScreen = ({ navigation }) => {
    const aboutinfo = [
        { title: "Who We Are?", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec " },
        { title: "Our Mission", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus " },
        { title: "Our Vission", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla cons" },
    ]
    return (
        <View style={ContainerStyles.containerflexStart}>
            <SettingHeader navigation={navigation} title={"About Upvote"} />

            <ScrollView showsVerticalScrollIndicator={false}

                contentContainerStyle={{ width: '123%', alignItems: 'center', justifyContent: 'center' }}>
                {aboutinfo.map((item, index) =>
                    <View key={index} style={{
                        height: index === 1 ? hp(25) : hp(40),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                    }}>
                        <View style={{ width: '90%', justifyContent: 'center', }}>
                            <View style={{ height: '20%' }}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <View style={{ height: '50%' }}>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                    </View>
                )}
            </ScrollView>

        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    headerContainer: {
        width: '15%',
        alignItems: 'center',
        height: hp(15),
        justifyContent: 'center'
    },
    title: {
        fontFamily: Fonts.Montserrat_SemiBold,
        fontWeight: '500',
        fontSize: wp(6),
        color: Colors.lightblack
    },
    description: {
        fontFamily: Fonts.Montserrat_Medium,
        fontWeight: '400',
        fontSize: wp(3.5),
        color: Colors.lightblack,
        width: '93%'
    }
})

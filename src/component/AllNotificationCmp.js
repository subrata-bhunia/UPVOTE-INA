import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import ContainerStyles from '../helper/ContainerStyles'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Images from '../helper/Images'
import Fonts from '../helper/Fonts'
import Colors from '../helper/Colors'
const AllNotificationCmp = () => {
    const notificationlist = [
        { profile: Images.ic_mainProfile, description: "In case you missed Saad Drusteer’s post", details: "🔥 Are you using WordPress and migrating to the JAMstack?" },
        { profile: Images.ic_mainProfile, description: "In case you missed Saad Drusteer’s post", details: "🔥 Are you using WordPress and migrating to the JAMstack?" },
        { profile: Images.ic_mainProfile, description: "In case you missed Saad Drusteer’s post", details: "🔥 Are you using WordPress and migrating to the JAMstack?" },
        { profile: Images.ic_mainProfile, description: "In case you missed Saad Drusteer’s post", details: "🔥 Are you using WordPress and migrating to the JAMstack?" },
        { profile: Images.ic_mainProfile, description: "In case you missed Saad Drusteer’s post", details: "🔥 Are you using WordPress and migrating to the JAMstack?" },
        { profile: Images.ic_mainProfile, description: "In case you missed Saad Drusteer’s post", details: "🔥 Are you using WordPress and migrating to the JAMstack?" },
    ]
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            {notificationlist.map((item) =>
                <View style={[ContainerStyles.rowContainer, { height: hp(20) }]}>
                    <View style={{ width: '90%' }}>
                        <View style={{ height: '30%' }}>
                            <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={Images.StarSolidIcon} style={{ height: wp(6), width: wp(6) }} />
                                <Image source={item.profile} style={{ height: wp(10), width: wp(10) }} />
                            </View>
                        </View>
                        <View style={{ height: '70%', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                            <Text style={styles.subDivision}>{item.description}</Text>
                            <Text style={styles.subDivision}>{item.details}</Text>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>


    )
}

export default AllNotificationCmp

const styles = StyleSheet.create({
    subDivision: {
        width: '90%',
        fontFamily: Fonts.Montserrat_Medium,
        fontSize: wp(4.2),
        color: Colors.text3,

    }
})

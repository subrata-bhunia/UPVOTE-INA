import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SettingHeader from '../../component/SettingHeader'
import ContainerStyles from '../../helper/ContainerStyles'
import Fonts from '../../helper/Fonts'
import Colors from '../../helper/Colors'
const TermsConditionScreen = ({ navigation }) => {
    const info =
    {
        title: "Term & Condition",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viv  nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viv "
    }


    return (

        <View style={ContainerStyles.containerflexStart}>
            <SettingHeader navigation={navigation} title={"Terms & Conditions"} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '123%', alignItems: 'center', justifyContent: 'center' }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                }}>
                    <View style={{ width: '90%', justifyContent: 'center', }}>
                        <View style={{ height: hp(15), justifyContent: 'center' }}>
                            <Text style={styles.title}>{info.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.description}>{info.description.replace('viv', '\n\n')}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </View>

    )
}

export default TermsConditionScreen


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


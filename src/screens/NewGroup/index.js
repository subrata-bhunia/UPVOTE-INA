import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { heightPercentageToDP, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import HeaderWithText from '../../component/HeaderWithText'
import ContainerStyles from '../../helper/ContainerStyles'
import Images from '../../helper/Images'
import Colors from '../../helper/Colors'
import ContactList from '../../component/ContactList'
import ButtonType from '../../component/ButtonType'
const NewGroup = ({ navigation }) => {
    const [select, setselect] = React.useState(false)
    const [group, setgroup] = React.useState(false)
    const [selectitem, setselectitem] = React.useState([{}, {}])

    const createGroup = () => {
        setgroup(!group)
        if (group === true) {
            navigation.navigate('CreateNewGroup')
        }
    }
    return (
        <View style={[ContainerStyles.containerflexStart]}>
            <HeaderWithText
                navigation={navigation}
                text="New Group 1"
            />
            {/* -------------filter--------------------  */}
            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(10), alignItems: 'center' }]}>
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
                <View style={{ width: '20%', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                    <Text style={ContainerStyles.text13}>{"Cancel"}</Text>
                </View>
            </View>

            {group === true ? (

                <View style={[ContainerStyles.rowContainer]}>
                    <View style={{ width: '90%', flexDirection: 'row' }}>
                        {selectitem.map((item) =>
                            <TouchableOpacity style={styles.imgContainer}>
                                <Image source={Images.ic_mainProfile} style={styles.img} />
                                <View style={styles.selectitem}>
                                    <Entypo name="cross" color={Colors.white} />
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>)
                : null
            }

            <TouchableOpacity onPress={createGroup}
                style={[ContainerStyles.rowContainer, styles.btnContainer, ContainerStyles.button,
                { backgroundColor: group === false ? Colors.bg5 : Colors.bg }]}>
                <Text style={ContainerStyles.text}>{"Create Group"}</Text>
            </TouchableOpacity>
            {/* <ContactList select={select} setselect={setselect} /> */}
        </View >
    )
}

export default NewGroup

const styles = StyleSheet.create({
    searchInput: {
        height: wp(14),
        width: wp(70),
        borderRadius: wp(5),
        backgroundColor: Colors.bg4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnContainer: {
        position: 'absolute',
        top: '90%',
        zIndex: 99,
        left: '5%'
    },
    imgContainer: {
        height: widthPercentageToDP(20),
        width: widthPercentageToDP(20),
        borderRadius: widthPercentageToDP(20) / 2,
        marginHorizontal: widthPercentageToDP(2)

    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    selectitem: {
        height: widthPercentageToDP(5),
        width: widthPercentageToDP(5),
        borderRadius: widthPercentageToDP(5) / 2,
        position: 'absolute',
        top: widthPercentageToDP(13),
        left: widthPercentageToDP(16),
        backgroundColor: Colors.bg,
        justifyContent: 'center',
        alignItems: 'center'

    }

})

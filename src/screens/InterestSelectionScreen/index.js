import React, { useState, useRef, useEffect } from 'react'
import {
    StyleSheet, Text, View, ScrollView, Alert,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ContainerStyles from '../../helper/ContainerStyles'
import HeaderCmp from '../../component/HeaderCmp'

import Images from '../../helper/Images'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../../helper/Colors';
import ButtonType from '../../component/ButtonType'
import Fonts from '../../helper/Fonts'
import { ListInterest } from '../../api/interests'

const InterestSelectionScreen = ({ navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(false);
    const [listInt,setlistInt]=useState([]);
    useEffect(()=>{
        ListInterest()
        .then(res=>{setlistInt(res.data?.data);})
    },[])
    const interestList = [
        { id: 0, interestName: "Interest", status: false },
        { id: 1, interestName: "Interest", status: false },
        { id: 2, interestName: "Interest", status: false },
        { id: 3, interestName: "Interest", status: false },
        { id: 4, interestName: "Interest", status: false }
    ]
    const useTriggerRef = useRef()
    const [selectedText, setSelectText] = useState()
    const [selectindex, setSelectIndex] = useState(0)
    const [interestlistState, setInterestlistState] = useState([])

    const onSelectInterest = (items) => {
        setInterestlistState(item => {
            let isFound = item.find(i => i?._id === items?._id)
            if (isFound) {
                return item.filter(el => {
                    return el._id !== items._id
                })
            }
            else {
                return item.concat(items)
            }
        })
    }
    console.log("interestlistState",interestlistState)

    return (
        <View style={[ContainerStyles.containerflexStart]}>
            <View style={[ContainerStyles.rowContainer, { justifyContent: 'space-between', }]}>
                <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color={Colors.back} size={widthPercentageToDP(7)} />
                </TouchableOpacity>
                <Text style={[ContainerStyles.text10, { marginRight: widthPercentageToDP(3), fontFamily: Fonts.Montserrat_SemiBold }]}>{"Skip"}</Text>
            </View>

            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(8), alignItems: 'flex-start' }]}>
                <Text style={ContainerStyles.text1}>
                    {"Interests"}
                </Text>
            </View>




            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(70), alignItems: 'flex-start' }]}>
                <View style={{ width: '90%' }}>
                    <FlatList
                        data={listInt}
                        style={{ flex: 1 }}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity key={index} onPress={() => onSelectInterest(item)} style={styles._listContainer}>
                                <View style={{ width: '60%', alignItems: 'flex-start' }}>
                                    <Text style={ContainerStyles.text13}>{item?.int_type}</Text>
                                </View>
                                <View style={styles._statusContainer}>
                                    {interestlistState.find(i => i?._id === item?._id) && <AntDesign name="check" color={Colors.white} />}
                                </View>
                            </TouchableOpacity>

                        }
                    />
                </View>
            </View>

            <View style={[ContainerStyles.row10PerContainer]}>
                <ButtonType navigation={navigation}
                    navigationLink={"DrawerNavigations"}
                    text={"Done"} btnstyle={ContainerStyles.button}
                />
            </View>

        </View>
    )
}

export default InterestSelectionScreen

const styles = StyleSheet.create({
    _listContainer: {
        height: heightPercentageToDP(6),

        width: widthPercentageToDP(60),
        borderRadius: widthPercentageToDP(10),
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: Colors.bg2

    },
    _statusContainer: {
        height: widthPercentageToDP(5),
        width: widthPercentageToDP(5),
        borderRadius: widthPercentageToDP(2.5),
        backgroundColor: Colors.bg,
        justifyContent: 'center',
        alignItems: 'center'

    },
    headerContainer: {
        width: '15%',
        alignItems: 'center',
        height: heightPercentageToDP(15),
        justifyContent: 'center'
    }
})

import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity, Image, FlatList } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import ContainerStyles from '../../helper/ContainerStyles'
import HeaderCmp from '../../component/HeaderCmp'
import InputTypeTxt from '../../component/InputTypeTxt'
import Images from '../../helper/Images'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../../helper/Colors';
import ButtonType from '../../component/ButtonType'
import { ListLanguage } from '../../api/language'

const LangauageSelectionScreen = ({ navigation }) => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(false);
    const languages = ["Language1", "Language2", "Language3", "Language4", "Language4"]
    const useTriggerRef = useRef()
    const [selectedText, setSelectText] = useState()
    const [selectindex, setSelectIndex] = useState(0)
    const [languagesList,setLanguages]=useState([]);
    const onSelectlanguage = (index, item) => {

        setSelectIndex(index)
        setSelectText(item)
        setSelectedLanguage(true)
    }
    useEffect(()=>{
        ListLanguage()
        .then(res=>setLanguages(res.data?.data))
        .catch(err=>console.log(err))
    },[])
    return (
        <View style={[ContainerStyles.containerStart, { justifyContent: 'flex-start' }]}>
            <HeaderCmp navigation={navigation} />

            <View style={[ContainerStyles.rowContainer]}>
                <Text style={ContainerStyles.text1}>
                    {"Language"}
                </Text>
            </View>

            {/* 
                <View style={[ContainerStyles.rowContainer,
                { height: heightPercentageToDP(70), alignItems: 'flex-start' }]}>
                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        // dropdownStyle={{ borderWidth: 1 }}
                        // renderCustomizedButtonChild={() =>
                        //     <TouchableOpacity style={styles.input}>
                        //         <View style={{ width: '20%', alignItems: 'center' }}>
                        //             <Image source={Images.ic_language} style={styles.img} />
                        //         </View>
                        //         <View style={{ width: '60%', alignItems: 'flex-start' }}>
                        //             <Text style={ContainerStyles.text2}>{"Select the Language"}</Text>
                        //         </View>
                        //         <View style={{ width: '20%', alignItems: 'center' }}>
                        //             <Image source={Images.ic_down} style={styles.img} />

                        //         </View>
                        //     </TouchableOpacity>
                        // }
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />

 */}
            <View style={ContainerStyles.row15PerContainer}>
                <TouchableOpacity style={styles.input}>
                    <View style={{ width: '20%', alignItems: 'center' }}>
                        <Image source={Images.ic_language} style={styles.img} />
                    </View>
                    <View style={{ width: '60%', alignItems: 'flex-start' }}>
                        <Text style={ContainerStyles.text2}>{"Select the Language"}</Text>
                    </View>
                    <View style={{ width: '20%', alignItems: 'center' }}>
                        <Image source={Images.ic_down} style={styles.img} />

                    </View>
                </TouchableOpacity>
            </View>

            <View style={[ContainerStyles.rowContainer, { height: heightPercentageToDP(60), alignItems: 'flex-start' }]}>
                <View style={styles.listContainer}>
                    <FlatList
                        data={languagesList}
                        style={{ flex: 1 }}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity onPress={() => onSelectlanguage(index, item)}
                                style={{ height: heightPercentageToDP(10), justifyContent: 'space-around', alignItems: 'center' }}>
                                <View key={index} style={[
                                    styles.selectRowContainer,
                                    { backgroundColor: (selectedLanguage === true && selectindex === index) ? Colors.white : null }

                                ]}>
                                    <Text style={[styles._listitem, {
                                        color: (selectedLanguage === true && selectindex === index) ? Colors.bg : Colors.white
                                    }
                                    ]}>{item?.lun_name}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>

            <View style={ContainerStyles.row10PerContainer}>
                <ButtonType text={"Done"}
                    navigation={navigation}
                    navigationLink="InterestSelectionScreen"
                    btnstyle={ContainerStyles.button} />
            </View>

        </View>
    )
}

export default LangauageSelectionScreen

const styles = StyleSheet.create({
    input: {
        height: heightPercentageToDP(7.5),
        width: widthPercentageToDP(90),
        borderWidth: 1,
        borderColor: Colors.text2,
        borderRadius: widthPercentageToDP(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: heightPercentageToDP(5),
        width: widthPercentageToDP(5),
        resizeMode: 'contain'
    },
    listContainer: {
        height: heightPercentageToDP(40),
        backgroundColor: Colors.bg, width: '85%',
        borderTopLeftRadius: widthPercentageToDP(10),
        borderTopRightRadius: widthPercentageToDP(3),
        borderBottomLeftRadius: widthPercentageToDP(10),
        borderBottomRightRadius: widthPercentageToDP(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    _listitem: {
        marginLeft: widthPercentageToDP(10),
        color: Colors.white,
        fontSize: widthPercentageToDP(5),
        opacity: 0.9
    },
    selectRowContainer: {
        width: '90%', height: heightPercentageToDP(7), justifyContent: 'center',
        borderRadius: widthPercentageToDP(7)
    }
})

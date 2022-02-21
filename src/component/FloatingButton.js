
import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Animated, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropShadow from 'react-native-drop-shadow';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../helper/Colors';
import Images from '../helper/Images';
import ContainerStyles from '../helper/ContainerStyles';

const FloatingButton = ({ navigation }) => {
    const [open, openState] = useState(false)
    const [selectstate, setselectstate] = useState({ index: 0, status: false })
    const animation = React.useRef(new Animated.Value(0)).current;
    const space = 90;
    const multiplier = 65;

    const floatingButtonItems = [
        { icon: Images.ic_question, text: "Magic Questions", navigationLink: "PostAMagicQuestions" },
        { icon: Images.ic_chart, text: "Post a Question", navigationLink: "PostAQuestion" },
        { icon: Images.ic_poll, text: "Post a Poll", navigationLink: "PostAPollScreen" },
    ];

    const toggleMenu = () => {
        console.log("open", open)
        const toValue = open ? false : true;
        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: false,
        }).start();

        openState(!open)
    };


    const opacity = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });

    const onSelection = (index, link) => {
        setselectstate({ index: index, status: true })
        navigation.navigate(link)
    }
    // console.log(selectstate)
    return (

        <View style={[styles.container]}>
            {floatingButtonItems.map((item, index) => {
                const animations = {
                    transform: [
                        { scale: animation },
                        {
                            translateY: animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -(index * multiplier + space)],
                            }),
                        },
                    ],
                };

                return (

                    <TouchableWithoutFeedback key={index}>
                        <Animated.View style={[styles.subButton, animations, opacity,
                        { backgroundColor: (selectstate.index === index && selectstate.status === true) ? Colors.bg3 : Colors.bg }]}>
                            <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row' }} 
                            onPress={() => {
                                onSelection(index, item.navigationLink)
                                toggleMenu();
                                }} >
                                <View style={{ width: '30%', alignItems: 'center' }}>
                                    <Image source={item.icon} style={{
                                        height: 20,
                                        width: 20,
                                        resizeMode: 'contain',
                                        tintColor: (selectstate.index === index && selectstate.status === true) ? Colors.bg : Colors.white
                                    }} />
                                </View>
                                <View style={{ width: '70%' }}>
                                    <Text style={[styles.text,
                                    { color: (selectstate.index === index && selectstate.status === true) ? Colors.bg : Colors.white }]}>{item.text}</Text>
                                </View>
                            </TouchableOpacity>
                        </Animated.View>

                    </TouchableWithoutFeedback>

                );
            })}

            <TouchableWithoutFeedback onPress={toggleMenu}>
                <DropShadow style={[ContainerStyles.shadow, styles.button]}>
                    <Animated.View
                        style={[styles.button, styles.menu, {
                            backgroundColor: open === true ? Colors.bg3 : Colors.bg,
                            transform: [
                                {
                                    rotate: animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '0deg'],
                                    }),
                                },
                            ],
                        },
                        ]}
                    >

                        {open === false ?
                            < Image source={Images.ic_edit} style={styles.ic_edit} />
                            :
                            <Entypo name="cross" size={40} color={Colors.bg} />
                        }

                    </Animated.View>
                </DropShadow>
            </TouchableWithoutFeedback>



        </View >


    )
}

export default FloatingButton

const styles = StyleSheet.create({
    touch: {
        borderColor: 'red',
        borderWidth: 2,
        flex: 1,
        position: 'absolute',
    },
    container: {
        top: hp(75),
        position: 'absolute',
        right: wp(25),
    },
    button: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    subButton: {
        position: 'absolute',
        width: wp(50),
        height: wp(15),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.bg,
        right: wp(-20),
        flexDirection: 'row',
        top: hp(3),

    },
    menu: {
        backgroundColor: Colors.bg,
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,

    },
    ic_edit: {
        height: wp(7),
        width: wp(7),
        resizeMode: 'contain'
    },
    text: {
        color: Colors.white,
        fontSize: wp(4)
    }
});

import React from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Pressable,
    View,
    Text,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropShadow from 'react-native-drop-shadow';
import Colors from '../helper/Colors';
import ContainerStyles from '../helper/ContainerStyles';

const CustomSwitchButton = ({ isEnabled, setIsEnabled }) => {

    const animatedValue = React.useRef(new Animated.Value(0)).current;

    const startAnimation = (toValue) => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
        setIsEnabled(!isEnabled)

    };

    const left = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['2%', '50%'],
        extrapolate: 'clamp',
    });

    const scale = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.9, 1],
        extrapolate: 'clamp',
    });
    console.log("isenable", isEnabled)
    return (
        <DropShadow style={[ContainerStyles.shadow, styles.container]}>
            <View style={styles.container}>
                <View style={[styles.sliderContainer, { backgroundColor: isEnabled === false ? Colors.green : "#e0e0e0" }]}>
                    <Animated.View style={[styles.slider, { left }]} />
                    <Pressable
                        style={[styles.clickableArea]}
                        onPress={startAnimation.bind(null, 0)}>

                    </Pressable>
                    <Pressable
                        style={styles.clickableArea}
                        onPress={startAnimation.bind(null, 1)}>

                    </Pressable>
                </View>
            </View>
        </DropShadow>
    );
};

export default CustomSwitchButton
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sliderContainer: {
        width: wp(10),
        height: wp(7),
        borderRadius: wp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
    },
    clickableArea: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderText: {
        fontSize: 17,
        fontWeight: '500',
    },
    slider: {
        position: 'absolute',
        width: '50%',
        height: '80%',
        borderRadius: 20,
        backgroundColor: Colors.white,
    },
});

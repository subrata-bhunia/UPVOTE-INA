/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import ContainerStyles from '../../helper/ContainerStyles'
import styles from './Styles'
import Images from '../../helper/Images'
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 2000)
    }, [])

    return (
        <TouchableWithoutFeedback activeOpacity={0.5} onPress={() => navigation.navigate('HomeScreen')}>
            <View style={ContainerStyles.container}>
                <Image source={Images.ellipse} style={styles._ellipseOne} />
                <Image source={Images.ellipse} style={styles._ellipseTwo} />
                <Image source={Images.ellipse} style={styles._ellipseThree} />
                <Image source={Images.logo} style={styles._logo} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SplashScreen;
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import Colors from '../helper/Colors'
import ContainerStyles from '../helper/ContainerStyles'

const SenderChatCmp = ({ day, time, msg, senderName, res }) => {

    return (
        <View style={ContainerStyles.rowContainer}>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Text style={styles.time}>{`${day}.`}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <View style={{ width: '80%', alignItems: 'flex-end' }}>
                    <View style={styles.senderContainer}>
                        <View style={styles.sender}>
                            {msg && <Text style={styles.msg}>{msg}</Text>}
                            {res && <Image source={{ uri: res.uri }}
                                resizeMode='contain'
                                style={{ height: '100%', width: '90%' }} />}

                        </View>
                        <Text style={styles.senderName}>{`send by ${senderName}`}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SenderChatCmp

const styles = StyleSheet.create({
    sender: {
        minHeight: widthPercentageToDP(15),
        maxHeight: '100%',
        maxWidth: '90%',
        minWidth: '20%',
        alignItems: 'center',
        backgroundColor: Colors.bg,
        borderTopEndRadius: widthPercentageToDP(10),
        borderTopLeftRadius: widthPercentageToDP(10),
        borderBottomRightRadius: widthPercentageToDP(10),
        borderBottomLeftRadius: widthPercentageToDP(2)
    },
    time: {
        color: Colors.bg,
        fontSize: widthPercentageToDP(5),
        width: '100%'
    },
    msg: {
        color: Colors.white,
        fontSize: widthPercentageToDP(5),
        padding: widthPercentageToDP(7),
        lineHeight: widthPercentageToDP(7.5)
    },
    senderName: {
        color: Colors.bg,
        textAlign: 'left',
        fontSize: widthPercentageToDP(5)
    },
    senderNameContainer: {
        width: '85%'
    }

})

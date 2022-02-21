import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Colors from '../helper/Colors'
import ContainerStyles from '../helper/ContainerStyles'

const ReceiverChatCmp = ({ day, time, msg, senderName }) => {
    return (
        <View style={[ContainerStyles.rowContainer, { marginTop: heightPercentageToDP(5) }]}>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '20%', alignItems: 'center' }}>
                    {/* <Text style={styles.time}>{`${day}.`}</Text>
                    <Text style={styles.time}>{time}</Text> */}
                </View>
                <View style={{ width: '80%', alignItems: 'flex-end' }}>
                    <View style={styles.senderContainer}>
                        <View style={styles.sender}>
                            <Text style={styles.msg}>{msg}</Text>
                        </View>
                        {/* <Text style={styles.senderName}>{`send by ${senderName}`}</Text> */}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReceiverChatCmp

const styles = StyleSheet.create({
    sender: {
        minHeight: widthPercentageToDP(15),
        maxHeight: '100%',
        maxWidth: '90%',
        minWidth: '20%',
        backgroundColor: Colors.bg15,
        borderTopEndRadius: widthPercentageToDP(2),
        borderTopLeftRadius: widthPercentageToDP(10),
        borderBottomRightRadius: widthPercentageToDP(10),
        borderBottomLeftRadius: widthPercentageToDP(10)
    },
    time: {
        color: Colors.bg,
        fontSize: widthPercentageToDP(5),
        width: '100%'
    },
    msg: {
        color: Colors.text8,
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

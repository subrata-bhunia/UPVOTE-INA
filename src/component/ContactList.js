import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, PermissionsAndroid, Image, SectionList, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ContainerStyles from '../helper/ContainerStyles'
import Colors from '../helper/Colors'
import Images from '../helper/Images'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Contacts from 'react-native-contacts';
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const ContactList = ({ select, setselect }) => {

    let [contacts, setContacts] = useState([]);
    let [index, setindex] = useState([])
    let [count, setCount] = useState()
    const [searchText, setSearchText] = useState()
    useEffect(() => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: 'Contacts',
                message: 'This app would like to view your contacts.',
            }).then(() => {
                loadContacts();
            }
            );
        } else {
            loadContacts();
        }
    }, []);
    const loadContacts = () => {
        Contacts.getAll()
            .then(contacts => {
                setContacts(contacts);

            })
            .catch(e => {

            });

        Contacts.getCount().then(count => {
            setCount(count)

        });

        Contacts.checkPermission();
    }

    const data = alphabet.map(c => {
        let filtered = contacts.filter(i => i.displayName?.[0]?.toUpperCase() === c.toUpperCase())
        if (filtered.length === 0) {
            return null
        } else {
            return {
                title: c.toUpperCase(),
                data: filtered.map((i) => {
                    return { name: i.displayName, mobile: i.phoneNumbers[0]?.number, photo: i.thumbnailPath }
                })
            }
        }
    })

    const loadsearchContacts = () => {
        Contacts.getAll((err, contacts) => {
            contacts.sort(
                (a, b) =>
                    a.givenName.toLowerCase() > b.givenName.toLowerCase(),
            );
            console.log('contacts -> ', contacts);
            if (err === 'denied') {
                alert('Permission to access contacts was denied');
                console.warn('Permission to access contacts was denied');
            } else {
                setContacts(contacts);
                console.log('contacts', contacts);
            }
        });
    };

    const selectitem = (index) => {

    }

    return (
        <View>

            <SectionList
                sections={data.filter(i => i)}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) =>

                    <View style={styles.itemContainer}>
                        <View style={styles.itemStartContainer}>
                            <TouchableOpacity activeOpacity={0.5} style={styles._profile} onPress={setselect}>
                                {/* <Image source={{ uri: item.photo }}
                                    style={styles._profile} />  */}
                                {select !== true ?
                                    (
                                        <View style={styles.selectitem} >
                                            <AntDesign name="check" color={Colors.white} />
                                        </View>
                                    ) :
                                    null
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemMiddleContainer}>
                            <Text style={[ContainerStyles.text7]}>{item.name}</Text>
                            <Text style={[ContainerStyles.text16]}>{item.mobile}
                            </Text>
                        </View>
                        <View style={{
                            width: '20%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={Images.ic_direction} style={styles.ic_direction} />
                        </View>
                    </View>
                }
                renderSectionHeader={({ section: { title } }) => (
                    <View style={{ borderBottomWidth: 1, borderBottomColor: Colors.line, height: hp(10), justifyContent: 'flex-end' }}>
                        <Text style={[ContainerStyles.text14, { marginLeft: wp(10), marginBottom: wp(3) }]}>{title}</Text>
                    </View>
                )}
            />

        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    itemContainer: {
        height: hp(10), width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.line
    },
    _profile: {
        resizeMode: 'contain',
        height: wp(15),
        width: wp(15),
        borderRadius: wp(7.5)
    },
    itemMiddleContainer: {
        width: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center'

    },
    itemStartContainer: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',


    },
    ic_direction: {
        height: wp(7),
        width: wp(7),
        resizeMode: 'contain',
        transform: [{ rotate: "-45deg" }]
    },
    selectitem: {
        height: wp(4),
        width: wp(4),
        borderRadius: wp(2),
        position: 'absolute',
        top: hp(5),
        left: wp(11),
        backgroundColor: Colors.bg,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

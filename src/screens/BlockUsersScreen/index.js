import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderWithText from '../../component/HeaderWithText';
import ContainerStyles from '../../helper/ContainerStyles';
import Colors from '../../helper/Colors';
import Images from '../../helper/Images';
import ModelCmp from '../../component/ModelCmp';
import { UnblockFriend } from '../../api/friends';
const BlockUsersScreen = ({ navigation }) => {
  var myId="61eed3f26d124a0503f5c934";
  const unBlockUser=({blockUserId})=>{
    UnblockFriend(myId,{
      blockId:blockUserId
    }).then(res=>alert(res.data?.msg))
    .catch((err)=>console.log(err))
    setModalVisible(!modalVisible)
  }
  const blockUser = [
    { profile: Images.ic_mainProfile, name: 'Martha Craig' },
    { profile: Images.ic_mainProfile, name: 'Kieron Dotson' },
    { profile: Images.ic_mainProfile, name: 'Zack John' },
    { profile: Images.ic_mainProfile, name: 'Jamie Franco' },
    { profile: Images.ic_mainProfile, name: 'Tabitha Potter' },
  ];
  const [show, setshow] = useState({ index: -1, status: false });
  const onShowStatus = index => {
    setshow({ index: index, status: true });
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={ContainerStyles.containerflexStart}>
      <HeaderWithText navigation={navigation} text="Blocked Users" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* searchConainer */}
        {modalVisible === true ? (
          <ModelCmp
            modalVisible={modalVisible}
            title={'Are you sure you want to unblock this user?'}
            setModalVisible={setModalVisible}
            yesPress={()=>unBlockUser({blockUserId:"61f26db96d124a0503f5c94e"})}
          />
        ) : null}
        <View style={ContainerStyles.rowContainer}>
          <View style={ContainerStyles.inputContainer}>
            <View style={{ width: '20%', alignItems: 'center' }}>
              <AntDesign name="search1" color={Colors.text6} size={wp(9)} />
            </View>
            <View style={{ width: '80%' }}>
              <TextInput
                placeholder="Search for People"
                placeholderTextColor={Colors.text6}
                style={{ fontSize: wp(5), color: Colors.black }}
              />
            </View>
          </View>
        </View>
        {/* listContainer */}
        {blockUser.map((item, index) => (
          <View
            key={index}
            style={[ContainerStyles.rowContainer, { height: hp(15) }]}>
            <View style={{ width: '95%', flexDirection: 'row' }}>
              <View style={{ width: '25%' }}>
                <TouchableOpacity style={styles.profileContainer}>
                  <Image
                    source={item.profile}
                    style={{ height: '100%', width: '100%' }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '60%',
                  justifyContent: 'center',
                }}>
                <Text style={ContainerStyles.text19}>{item.name}</Text>
              </View>
              <View
                style={{
                  width: '15%',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity onPress={() => onShowStatus(index)}>
                  <Entypo name="dots-three-horizontal" size={wp(6)} />
                </TouchableOpacity>
                {show.index === index && show.status === true ? (
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.unblockContainer}>
                    <Text style={ContainerStyles.texttwoWhite}>
                      {'Unblock'}
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BlockUsersScreen;

const styles = StyleSheet.create({
  profileContainer: {
    height: wp(20),
    width: wp(20),
    borderRadius: wp(10),
  },
  unblockContainer: {
    height: wp(10),
    width: wp(30),
    position: 'absolute',
    top: wp(12),
    right: wp(2),
    borderTopLeftRadius: wp(20),
    borderBottomRightRadius: wp(35),
    borderBottomLeftRadius: wp(20),
    borderTopRightRadius: wp(5),
    backgroundColor: Colors.bg,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

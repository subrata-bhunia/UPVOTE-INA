import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DropShadow from 'react-native-drop-shadow';
import ContainerStyle from '../../helper/ContainerStyles';
import HeaderWithText from '../../component/HeaderWithText';
import Colors from '../../helper/Colors';
import ContainerStyles from '../../helper/ContainerStyles';
import DropDownMenu from '../../component/DropDownMenu';
import {
  TextInputCmp,
  TextInputWithTitleCmp,
} from '../../component/TextInputCmp';
import Fonts from '../../helper/Fonts';
import {AddDuration} from '../../api/duration';
import {myID} from '../VerifyOTPNumberScreen';
import {PostPoll, UpdatePoll} from '../../api/poll';
import moment from 'moment';
const PostAPollScreen = ({navigation, route}) => {
  const [addmore, setAddmore] = useState([]);
  const [updatePage, setupdatePage] = useState(false);
  var [duration_id, setduration_id] = useState('');
  const [getDuration, setgetDuration] = useState(null);
  const onChange = () => {
    setAddmore(addmore + 1);
  };
  const _AddDuration = day => {
    AddDuration({
      day: day,
    })
      .then(res => {
        setduration_id(res?.data?.data?._id);
      })
      .catch(err => {
        alert('Error in Duraion');
      });
  };
  const [durationShow, setdurationShow] = useState(false);
  const [Duration, setDuration] = useState(null);
  var date = new Date();
  const [durationList, setdurationList] = useState([
    {
      id: 1,
      title: '1 day',
      day: date.setDate(date.getDate() + 1),
    },
    {
      id: 2,
      title: '1 week',
      day: date.setDate(date.getDate() + 7),
    },
    {
      id: 3,
      title: '1 month',
      day: date.setDate(date.getDate() + 30),
    },
    {
      id: 4,
      title: '1 year',
      day: date.setDate(date.getDate() + 365),
    },
  ]);
  const [qn, setqn] = useState('');
  // ----------------
  const [op1, setop1] = useState('');
  const [op2, setop2] = useState('');
  // -------------
  var options = [];
  useEffect(() => {
    if (op1.length > 0) {
      options.push({
        op: op1,
        // dscp: op1des,
        // url: op1link,
      });
    }
    if (op2.length > 0) {
      options.push({
        op: op2,
        // dscp: op2des,
        // url: op2link,
      });
    }
  }, [qn, op1, op2, duration_id]);
  useEffect(() => {
    if (route?.params !== undefined) {
      setupdatePage(true);
      setqn(route?.params?.description);
      setop1(route?.params?.option[0]?.op);
      setop2(route?.params?.option[1]?.op);
      setduration_id(route?.params?.duration_id?._id);
      setgetDuration(route?.params?.duration_id);
    }
  }, []);
  const _PostPoll = () => {
    var files = new FormData();
    files.append('files', []);
    var data = {
      user_id: myID,
      duration_id: duration_id,
      description: qn,
      option: options,
      files: files,
    };
    PostPoll(data)
      .then(res => {
        navigation.navigate('DrawerNavigations', {newMagic: res?.data?.data});
        console.log(res?.data?.data);
      })
      .catch(err => console.log(JSON.stringify(err)));
  };
  const _UpdatePoll = () => {
    var files = new FormData();
    files.append('files', []);
    var data = {
      user_id: myID,
      duration_id: duration_id,
      description: qn,
      option: options,
      files: files,
    };
    UpdatePoll(route?.params?.id, data)
      .then(res => {
        navigation.navigate('DrawerNavigations');
        console.log(res?.data?.data);
      })
      .catch(err => console.log(JSON.stringify(err)));
  };
  return (
    <View style={[ContainerStyle.containerflexStart]}>
      <HeaderWithText
        navigation={navigation}
        text={updatePage ? `Update Poll` : 'Post a Poll'}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* -----------write your question------------ */}
          <View style={[ContainerStyle.rowContainer, {height: wp(40)}]}>
            <View
              style={{
                width: '40%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <DropShadow style={ContainerStyle.shadow1}>
                <TouchableOpacity style={styles.imagePicker}>
                  <TouchableOpacity style={styles._subCircle}>
                    <Entypo name="plus" size={wp(7)} color={Colors.bg} />
                  </TouchableOpacity>
                </TouchableOpacity>
              </DropShadow>
            </View>
            <View style={{width: '60%', justifyContent: 'center'}}>
              <DropShadow style={ContainerStyle.shadow1}>
                <View style={styles.pollQuestionContainer}>
                  <View
                    style={{
                      width: wp(3),
                      height: '100%',
                      backgroundColor: Colors.bg,
                      borderRadius: wp(3) / 2,
                    }}
                  />
                  <View style={{width: '90%', justifyContent: 'space-between'}}>
                    <TextInput
                      placeholder="Write your Question"
                      placeholderTextColor={Colors.bg13}
                      multiline={true}
                      style={{color: Colors.text6}}
                      value={qn}
                      onChangeText={txt => {
                        setqn(txt);
                      }}
                      maxLength={140}
                    />

                    <Text style={{width: '100%', textAlign: 'right'}}>
                      {`${qn.length}/140`}
                    </Text>
                  </View>
                </View>
              </DropShadow>
            </View>
          </View>

          {/* -----------------options  for the question---------------------- */}
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: hp(17),
              },
            ]}>
            <DropDownMenu text="Options for the Polls" />
          </View>
          <TextInputCmp
            title="Option 1"
            value={op1}
            onChangeText={txt => {
              setop1(txt);
            }}
          />
          <TextInputCmp
            title="Option 2"
            onChangeText={txt => {
              setop2(txt);
            }}
            value={op2}
          />
          {Array(addmore.length)
            .fill(addmore)
            .map((item, ind) => (
              <TextInputCmp key={ind} title={`Option ${ind + 3}`} />
            ))}
          <View style={ContainerStyles.row15PerContainer}>
            <DropShadow style={[ContainerStyle.shadow]}>
              <TouchableOpacity onPress={onChange} style={[styles.button]}>
                <Entypo name="plus" color={Colors.white} size={wp(8)} />
                <Text style={styles.text}>{'Add more options'}</Text>
              </TouchableOpacity>
            </DropShadow>
          </View>

          <View
            style={[
              {
                // flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // height: hp(17),
              },
            ]}>
            <TextInputWithTitleCmp
              title="Poll Duration"
              value={
                getDuration !== null
                  ? moment(getDuration?.day).fromNow()
                  : Duration?.title
                  ? Duration?.title
                  : 'Select'
              }
              onPress={() => setdurationShow(!durationShow)}
            />
            {durationShow === true ? (
              <View
                style={{
                  width: '100%',
                  height: hp(37),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: hp(3),
                }}>
                <DropShadow style={ContainerStyles.shadow1}>
                  <View
                    style={{
                      width: wp(90),
                      borderRadius: wp(4),
                      backgroundColor: Colors.bg3,
                      alignItems: 'center',
                    }}>
                    {durationList.length > 0
                      ? durationList.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              setDuration(item);
                              _AddDuration(item?.day);
                              setdurationShow(false);
                            }}
                            style={{height: hp(10), justifyContent: 'center'}}>
                            <Text
                              style={[
                                ContainerStyle.text11,
                                {color: Colors.bg},
                              ]}>
                              {item.title}
                            </Text>
                          </TouchableOpacity>
                        ))
                      : null}
                  </View>
                </DropShadow>
              </View>
            ) : null}
          </View>

          <View style={[ContainerStyles.rowContainer, {height: hp(17)}]}>
            <TouchableOpacity
              onPress={() => {
                updatePage ? _UpdatePoll() : _PostPoll();
              }}
              style={ContainerStyles.button}>
              <View style={{width: '5%'}} />
              <Text style={ContainerStyles.text}>{'Done'}</Text>
              <Entypo
                name="arrow-long-right"
                color={Colors.white}
                size={wp(6)}
                style={{marginLeft: wp(8)}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostAPollScreen;

const styles = StyleSheet.create({
  imagePicker: {
    width: wp(33),
    height: wp(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg3,
  },
  _subCircle: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(15) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  pollQuestionContainer: {
    width: '95%',
    height: wp(30),
    backgroundColor: Colors.white,
    borderRadius: wp(3),
    flexDirection: 'row',
  },
  text: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: hp(2.3),
    fontFamily: Fonts.Montserrat_SemiBold,
  },
  button: {
    height: hp(7.5),
    width: wp(65),
    borderColor: Colors.text2,
    borderRadius: wp(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg,
  },
});

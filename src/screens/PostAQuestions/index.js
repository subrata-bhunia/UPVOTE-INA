import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  TextInputMultipleLineCmp,
  TextInputWithTitleTextCmp,
} from '../../component/TextInputCmp';
import Fonts from '../../helper/Fonts';
import CheckBoxWithText from '../../component/CheckBoxWithText';
import {useEffect} from 'react';
import {ListCategory} from '../../api/category';
import {AddDuration, ListDuration} from '../../api/duration';
import {myID} from '../VerifyOTPNumberScreen';
import {CreateQuestion} from '../../api/questions';
const PostAQuestion = ({navigation}) => {
  const [status, setStatus] = useState(false);
  const [addmore, setAddmore] = useState(['']);
  const [showcategory, setshowcategory] = useState(false);
  const [categoryList, setcategoryList] = useState([]);
  const [category, setcategory] = useState(null);
  const [durationShow, setdurationShow] = useState(false);
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
  const [Duration, setDuration] = useState(null);
  var [duration_id, setduration_id] = useState('');
  const onChange = () => {
    setAddmore(addmore + 1);
  };
  const [qn, setqn] = useState('');
  // const [option,setoption]=useState("");
  // ----------------
  const [op1, setop1] = useState('');
  const [op2, setop2] = useState('');
  const [op3, setop3] = useState('');
  const [op4, setop4] = useState('');
  const [op5, setop5] = useState('');
  // --------------------------- //
  const [op1link, setop1link] = useState('');
  const [op2link, setop2link] = useState('');
  const [op3link, setop3link] = useState('');
  const [op4link, setop4link] = useState('');
  const [op5link, setop5link] = useState('');
  // ----------------
  const [op1des, setop1des] = useState('');
  const [op2des, setop2des] = useState('');
  const [op3des, setop3des] = useState('');
  const [op4des, setop4des] = useState('');
  const [op5des, setop5des] = useState('');

  const getValue = index => {
    if (index === 2) {
      return {op: op2, desc: op2des, link: op2link};
    }
    if (index === 3) {
      return {op: op3, desc: op3des, link: op3link};
    }
    if (index === 4) {
      return {op: op4, desc: op4des, link: op4link};
    }
    if (index === 5) {
      return {op: op5, desc: op5des, link: op5link};
    }
  };
  const setValue = (index, txt) => {
    if (index === 2) {
      setop2(txt);
    }
    if (index === 3) {
      setop3(txt);
    }
    if (index === 4) {
      setop4(txt);
    }
    if (index === 5) {
      setop5(txt);
    }
  };
  const setValueDesc = (index, txt) => {
    if (index === 2) {
      setop2des(txt);
    }
    if (index === 3) {
      setop3des(txt);
    }
    if (index === 4) {
      setop4des(txt);
    }
    if (index === 5) {
      setop5des(txt);
    }
  };
  const setValueLink = (index, txt) => {
    if (index === 2) {
      setop2link(txt);
    }
    if (index === 3) {
      setop3link(txt);
    }
    if (index === 4) {
      setop4link(txt);
    }
    if (index === 5) {
      setop5link(txt);
    }
  };
  var options = [];
  useEffect(() => {
    if (op1.length > 0) {
      options.push({
        op: op1,
        dscp: op1des,
        url: op1link,
      });
    }
    if (op2.length > 0) {
      options.push({
        op: op2,
        dscp: op2des,
        url: op2link,
      });
    }
    if (op3.length > 0) {
      options.push({
        op: op3,
        dscp: op3des,
        url: op3link,
      });
    }
    if (op4.length > 0) {
      options.push({
        op: op4,
        dscp: op4des,
        url: op4link,
      });
    }
  }, [
    qn,
    op1,
    op2,
    op3,
    op4,
    op1des,
    op2des,
    op3des,
    op4des,
    duration_id,
    category,
    op1link,
    op2link,
    op3link,
    op4link,
  ]);
  // console.log(category);

  useEffect(() => {
    ListCategory().then(res => {
      setcategoryList(res?.data?.data);
    });
  }, []);
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

  const PostQuestion = () => {
    console.log(options);
    var files = new FormData();
    files.append('files', []);
    var data = {
      user_id: myID,
      duration_id: duration_id,
      question: qn,
      cat_id: category?._id,
      option: options,
      files: files,
    };
    CreateQuestion(data)
      .then(res => {
        navigation.navigate('DrawerNavigations', {newMagic: res?.data?.data});
        console.log(res?.data?.data);
      })
      .catch(err => console.log(JSON.stringify(err)));
  };
  return (
    <View style={ContainerStyles.containerflexStart}>
      <HeaderWithText navigation={navigation} text="Post a Question" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* -----------write your question------------ */}
        <View style={[ContainerStyles.rowContainer, {height: hp(22)}]}>
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
                    value={qn}
                    maxLength={140}
                    onChangeText={text => {
                      setqn(text);
                    }}
                    style={{color: Colors.text6}}
                  />
                  <Text
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      position: 'absolute',
                      bottom: 0,
                    }}>
                    {`${qn.length}/140`}
                  </Text>
                </View>
              </View>
            </DropShadow>
          </View>
        </View>
        {/* Category */}
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: hp(17),
            },
          ]}>
          <TextInputWithTitleCmp
            title="Category"
            value={category?.category_name}
            onPress={() => setshowcategory(!showcategory)}
          />
        </View>
        {showcategory === true ? (
          <View
            style={{
              width: '100%',
              height: hp(37),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <DropShadow style={ContainerStyles.shadow1}>
              <View
                style={{
                  width: wp(90),
                  borderRadius: wp(4),
                  backgroundColor: Colors.bg3,
                  alignItems: 'center',
                }}>
                {categoryList.length > 0
                  ? categoryList.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          setcategory(item);
                          setshowcategory(false);
                        }}
                        style={{height: hp(10), justifyContent: 'center'}}>
                        <Text
                          style={[ContainerStyle.text11, {color: Colors.bg}]}>
                          {item?.category_name}
                        </Text>
                      </TouchableOpacity>
                    ))
                  : null}
              </View>
            </DropShadow>
          </View>
        ) : null}
        {/* options */}
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: hp(17),
            },
          ]}>
          <DropDownMenu text="Options for the Questions" />
        </View>
        <TextInputCmp
          title="Option 1"
          value={op1}
          onChangeText={txt => setop1(txt)}
        />
        <CheckBoxWithText
          title={'Marked as correct'}
          status={status}
          setStatus={() => setStatus(!status)}
        />
        <TextInputWithTitleTextCmp
          title={'Supporting Link'}
          value={op1link}
          onChangeText={txt => setop1link(txt)}
        />
        <TextInputMultipleLineCmp
          title={'Additional Answer Information'}
          value={op1des}
          onChangeText={txt => setop1des(txt)}
        />
        {Array(addmore.length - 1)
          .fill(addmore)
          .map((item, index) => (
            <View key={index}>
              <TextInputCmp
                title={`Option ${index + 2}`}
                value={getValue(index + 2)?.op}
                onChangeText={txt => {
                  setValue(index + 2, txt);
                }}
              />
              <CheckBoxWithText
                title={'Marked as correct'}
                status={status}
                setStatus={() => setStatus(!status)}
              />
              <TextInputWithTitleTextCmp
                title={'Supporting Link'}
                value={getValue(index + 2)?.link}
                onChangeText={txt => {
                  setValueLink(index + 2, txt);
                }}
              />
              <TextInputMultipleLineCmp
                title={'Additional Answer Information'}
                value={getValue(index + 2)?.desc}
                onChangeText={txt => {
                  setValueDesc(index + 2, txt);
                }}
              />
            </View>
          ))}
        {/* ---------------------add more option------------------------ */}
        <View style={ContainerStyles.row15PerContainer}>
          <DropShadow style={[ContainerStyle.shadow]}>
            <TouchableOpacity onPress={onChange} style={[styles.button]}>
              <Entypo name="plus" color={Colors.white} size={wp(8)} />
              <Text style={styles.text}>{'Add more options'}</Text>
            </TouchableOpacity>
          </DropShadow>
        </View>
        {/* ------------------Answer Duration------------- */}
        <TextInputWithTitleCmp
          title={'Answer Duration'}
          value={Duration?.title}
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
                          style={[ContainerStyle.text11, {color: Colors.bg}]}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    ))
                  : null}
              </View>
            </DropShadow>
          </View>
        ) : null}

        {/*------------------------ Done-------------------------- */}
        <View style={[ContainerStyles.rowContainer, {height: hp(17)}]}>
          <TouchableOpacity
            onPress={() => {
              PostQuestion();
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
      </ScrollView>
    </View>
  );
};

export default PostAQuestion;

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

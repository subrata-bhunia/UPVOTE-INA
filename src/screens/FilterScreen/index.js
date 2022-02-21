import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DropShadow from 'react-native-drop-shadow';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../helper/Colors';
import ContainerStyles from '../../helper/ContainerStyles';
import Images from '../../helper/Images';
import FloatingButton from '../../component/FloatingButton';
import SearchCmp from '../../component/SearchCmp';
import {
  PostCmp,
  PostAQuestionCmp,
  PostMagicQuestionCmp,
} from '../../component/PostCmp';
import {MyMagicQuestion} from '../../api/magic-questions';
import {myID} from '../VerifyOTPNumberScreen';
import {MyQuestions} from '../../api/questions';
import {useIsFocused} from '@react-navigation/native';
import { PollList } from '../../api/poll';
var friendId = '61f26db96d124a0503f5c94e';
// import { useFocusEffect } from '@react-navigation/native';

const FilterScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getMagicQuestionList();
    getMyQuestionList();
    wait(200).then(() => setRefreshing(false));
  }, []);
  const onDelete = React.useCallback(() => {
    getMagicQuestionList();
    getMyQuestionList();
  }, []);
  const list = ['Poll', 'Questions', 'Magic Question'];
  const [search, setSearch] = useState(false);
  const [magicQlist, setmagicQlist] = useState([]);
  const [questionList, setQlist] = useState([]);
  const [pollList,setPollList] = useState([]);
  const [allQ, setAllQ] = useState([]);
  const [del, setdel] = useState(false);
  const isFocused = useIsFocused();
  // -------------GET MAGIC----------------------- // 
  const getMagicQuestionList = () => {
    MyMagicQuestion(myID)
      .then(res => {
        setmagicQlist(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  // ----------------GET QUESTION---------------------- //
  const getMyQuestionList = () => {
    MyQuestions(myID)
      .then(res => {
        setQlist(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
 // ----------------GET POLL-------------------- //
 const getPoll = () =>{
     PollList(myID).then(res=>{
         setPollList(res?.data?.data);
     }).catch((err)=>{
         console.log(JSON.stringify(err));
     })
 }

  // --------------------------------------------- //
  useEffect(() => {
    getMagicQuestionList();
    getMyQuestionList();
    getPoll();
  }, [del, isFocused]);
  var all = magicQlist.concat(questionList,pollList);
  useEffect(() => {
    setAllQ(all);
  }, [magicQlist, questionList]);

  allQ.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  return (
    <View style={[ContainerStyles.containerflexStart]}>
      <SearchCmp search={search} setSearch={setSearch} />
      <View
        style={{flexDirection: 'row', height: hp(10), alignItems: 'center'}}>
        {search === false ? (
          <FlatList
            data={list}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text
                  style={{
                    color: Colors.white,
                    opacity: 0.8,
                    paddingHorizontal: 10,
                  }}>
                  {item}
                </Text>
                <View style={styles.statusContainer}></View>
              </View>
            )}
          />
        ) : null}
      </View>

      <View style={{flex: 1, width: '100%'}}>
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {allQ.length > 0
            ? allQ.map((item, ind) => {
                if (item.question !== undefined) {
                  return (
                    <PostAQuestionCmp
                      question={item}
                      key={ind}
                      setdel={setdel}
                      onDelete={() => onDelete()}
                    />
                  );
                } else if (item.magic_qus !== undefined) {
                  return (
                    <PostMagicQuestionCmp
                      question={item}
                      navigation={navigation}
                      key={ind}
                      setdel={setdel}
                      onDelete={() => onDelete()}
                    />
                  );
                } else if (item.description !== undefined) {
                    return (
                        <PostCmp key={ind} question={item}/>
                    )
                }
              })
            : null}
        </ScrollView>
      </View>
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  itemContainer: {
    height: wp(10),
    borderRadius: wp(10) / 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.bg,
    marginHorizontal: wp(2),
    flex: 1,
  },
  statusContainer: {
    height: wp(3.5),
    width: wp(3.5),
    backgroundColor: Colors.white,
    borderRadius: wp(2.5),
    marginRight: wp(2),
  },
});

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Images from '../helper/Images';
import Fonts from '../helper/Fonts';
import Colors from '../helper/Colors';
import ContainerStyles from '../helper/ContainerStyles';
import ModalCmp from './ModalCmp';
import {
  DeleteMagicQuestion,
  MagicCommentCount,
  MagicLike,
  MagicLikeCount,
  MagicLikeRemove,
  MagicShare,
  MagicShareCount,
  ViewMagicQuestion,
} from '../api/magic-questions';
import Moment from 'react-moment';
import {myID} from '../screens/VerifyOTPNumberScreen';
import {
  BlockQuestion,
  DeleteQuestion,
  QuestionLike,
  QuestionLikeCount,
  QuestionShare,
  QuestionShareCount,
  RemoveQuestionLike,
  ViewQuestion,
} from '../api/questions';
import ModelCmp from './ModelCmp';
import moment from 'moment';
import {
  BlockPoll,
  CountPollComment,
  DeletePoll,
  PollLike,
  PollLikeCount,
  pollShare,
  pollShareCount,
  RemovePollLike,
  ViewSinglePoll,
} from '../api/poll';
// poll
export const PostCmp = ({question = {}, setdel, onDelete, navigation}) => {
  var question = question;
  // console.log('question', question);
  let value = 0;
  const [show, setshow] = useState(false);
  const [viewResult, setViewResult] = useState(false);
  const [reporticon, setreporticon] = useState(false);
  const [totalLike_p, setTotalLike_p] = useState(0);
  const [totalComment_p, setTotalComment_p] = useState(0);
  const [totalShare_p, settotalShare_p] = useState(0);
  const [mypost, setmypost] = useState(false);
  const [duration, setDuration] = useState(null);
  const [pollDetails, setPollDetails] = useState(null);
  useEffect(() => {
    CountPollComment(question?.id).then(res => {
      setTotalComment_p(res?.data?.data);
    });
    PollLikeCount(question?.id).then(res => {
      setTotalLike_p(res?.data?.data);
    });
    pollShareCount(question?.id).then(res => {
      settotalShare_p(res?.data?.data);
    });
  });
  useEffect(() => {
    if (myID === question?.user_id) {
      setmypost(true);
    }
    ViewSinglePoll(question?.id)
      .then(res => {
        setDuration(res?.data?.data?.duration_id);
        setPollDetails(res?.data?.data);
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  }, [question]);
  //Delete
  const _DeletePoll = () => {
    DeletePoll(question?.id)
      .then(res => {
        console.log(res.data?.msg);
        onDelete();
        setdel(true);
      })
      .catch(err => console.log(err));
  };
  // Like
  const LikePressP = () => {
    PollLike({
      poll_user_id: question?.user_id,
      like_user_id: myID,
      poll_id: question?.id,
    })
      .then(res => {
        console.log(res.data);
        setTotalLike_p(totalLike_p + 1);
      })
      .catch(err => {
        RemovePollLike(question?.id, {
          like_user_id: myID,
        })
          .then(res => {
            console.log(res.data?.msg);
            setTotalLike_p(totalLike_p - 1);
          })
          .catch(err => {
            console.log(err);
          });
      });
  };
  // ------- SHARE ------- //
  const SharePressP = () => {
    pollShare({
      poll_user_id: question?.user_id,
      share_user_id: myID,
      poll_id: question?.id,
    })
      .then(res => {
        console.log(res.data?.msg);
        settotalShare_p(totalShare_p + 1);
      })
      .catch(err => {
        if (err) {
          alert('You already share this.');
        }
      });
  };
  // Edit
  const EditPress = () => {
    navigation.navigate('PostAPollScreen', pollDetails);
    setshow(false);
  };
  // ------ Block -------- //
  const _BlockPoll = () => {
    setreporticon(false);
    BlockPoll(question?.id, {
      U_ID: myID,
    })
      .then(res => {
        console.log(res?.data);
        onDelete();
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  };
  return (
    <View style={{width: '100%', marginTop: wp(5)}}>
      {reporticon === true ? <ModalCmp onPress={() => _BlockPoll()} /> : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{width: '90%', flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: '20%'}}>
            <TouchableOpacity
              style={{height: wp(15), width: wp(15), borderRadius: wp(15) / 2}}>
              <Image
                source={Images.ic_mainProfile}
                style={{height: '100%', width: '100%'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '40%'}}>
            <Text style={ContainerStyles.text19}>{'Pieroborgo'}</Text>
            <Text style={[ContainerStyles.text5, {textAlign: 'left'}]}>
              {moment(question?.createdAt).fromNow()}
            </Text>
          </View>
          <View
            style={{
              width: '40%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setshow(!show)}
              style={{flexDirection: 'row'}}>
              {Array(3)
                .fill(3)
                .map(item => (
                  <View
                    style={{
                      height: 5,
                      width: 5,
                      borderRadius: 2.5,
                      borderWidth: 1.5,
                      marginHorizontal: 1,
                    }}
                  />
                ))}
            </TouchableOpacity>

            {mypost ? (
              <>
                <DropShadow
                  style={[
                    ContainerStyles.shadow,
                    {
                      display: show === false ? 'none' : 'flex',
                      position: 'absolute',
                      right: wp(17),
                      top: wp(1),
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      EditPress();
                    }}
                    style={{
                      height: wp(10),
                      width: wp(10),
                      borderRadius: wp(10) / 2,
                      backgroundColor: Colors.bg,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={Images.ic_editPost}
                      style={{
                        width: wp(8),
                        height: wp(8),
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </DropShadow>

                <DropShadow
                  style={[
                    ContainerStyles.shadow,
                    {
                      display: show === false ? 'none' : 'flex',
                      position: 'absolute',
                      right: wp(5),
                      top: wp(1),
                    },
                  ]}>
                  <TouchableOpacity
                    style={{
                      height: wp(10),
                      width: wp(10),
                      borderRadius: wp(10) / 2,
                      backgroundColor: Colors.bg,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      _DeletePoll();
                      setshow(!show);
                    }}>
                    <Image
                      source={Images.ic_deletepost}
                      style={{
                        width: wp(8),
                        height: wp(8),
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </DropShadow>
              </>
            ) : (
              <DropShadow
                style={[
                  ContainerStyles.shadow,
                  {
                    display: show === false ? 'none' : 'flex',
                    position: 'absolute',
                    right: wp(5),
                    top: wp(1),
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => setreporticon(!reporticon)}
                  style={{
                    height: wp(10),
                    width: wp(10),
                    borderRadius: wp(10) / 2,
                    backgroundColor: Colors.bg,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.reporticon}>
                    <Text style={{color: Colors.white}}>{'i'}</Text>
                  </View>
                </TouchableOpacity>
              </DropShadow>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          height: hp(50),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <DropShadow style={[ContainerStyles.shadow1]}>
          <View
            style={{
              width: wp(90),
              borderRadius: wp(5),
              height: '90%',
              backgroundColor: Colors.white,
              alignItems: 'center',
            }}>
            <View style={{width: '95%', alignItems: 'center'}}>
              <View style={{height: '20%', justifyContent: 'center'}}>
                <Text style={styles.question}>{question?.description}</Text>
              </View>
              <View
                style={{
                  height: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                {viewResult === false ? (
                  <TouchableOpacity
                    style={[ContainerStyles.button, {width: '95%'}]}
                    onPress={() => setViewResult(true)}>
                    <Text style={ContainerStyles.text}>
                      {question?.option[0]?.op}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {width: '95%', alignItems: 'center'},
                    ]}
                    onPress={() => setViewResult(true)}>
                    <View
                      style={{
                        width: '40%',
                        backgroundColor: Colors.bg2,
                        height: '100%',
                        borderRadius: wp(29),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                    <Text
                      style={[
                        ContainerStyles.text,
                        {
                          color: Colors.bg,
                          textAlign: 'center',
                          position: 'absolute',
                          left: wp(3),
                        },
                      ]}>
                      {question?.option[0]?.op}
                    </Text>
                    <DropShadow
                      style={[
                        ContainerStyles.shadow,
                        {position: 'absolute', right: 0},
                      ]}>
                      <View
                        style={{
                          width: wp(20),
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: wp(20),
                          borderRadius: wp(20) / 2,
                          backgroundColor: Colors.bg,
                        }}>
                        <Text style={ContainerStyles.text}>{'40%'}</Text>
                      </View>
                    </DropShadow>
                  </TouchableOpacity>
                )}
              </View>

              <View
                style={{
                  height: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                {viewResult === false ? (
                  <TouchableOpacity
                    style={[ContainerStyles.button, {width: '95%'}]}>
                    <Text style={[ContainerStyles.text]}>
                      {question?.option[1]?.op}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={[styles.button, {width: '95%'}]}>
                    <View
                      style={{
                        width: '60%',
                        backgroundColor: Colors.bg2,
                        height: '100%',
                        borderRadius: wp(29),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                    <Text
                      style={[
                        ContainerStyles.text,
                        {
                          color: Colors.bg,
                          textAlign: 'center',
                          position: 'absolute',
                          left: wp(3),
                        },
                      ]}>
                      {question?.option[1]?.op}
                    </Text>
                    <DropShadow
                      style={[
                        ContainerStyles.shadow1,
                        {position: 'absolute', right: '30%'},
                      ]}>
                      <View
                        style={{
                          width: wp(10),
                          height: wp(10),
                          borderRadius: wp(10) / 2,
                          borderWidth: 1,
                          backgroundColor: Colors.bg3,
                          borderColor: Colors.white,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <AntDesign
                          name="check"
                          color={Colors.bg}
                          size={wp(6)}
                        />
                      </View>
                    </DropShadow>
                    {/* </View> */}
                    <DropShadow
                      style={[
                        ContainerStyles.shadow,
                        {position: 'absolute', right: 0},
                      ]}>
                      <View
                        style={{
                          width: wp(20),
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: wp(20),
                          borderRadius: wp(20) / 2,
                          backgroundColor: Colors.bg,
                        }}>
                        <Text style={ContainerStyles.text}>{'60%'}</Text>
                      </View>
                    </DropShadow>
                  </TouchableOpacity>
                )}
              </View>
              {/* Duration,Votes */}
              <View
                style={{
                  height: '15%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '95%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '95%',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.value}>{value} Votes</Text>
                  <View
                    style={{
                      width: wp(1.5),
                      height: wp(2),
                      borderRadius: wp(1),
                      backgroundColor: Colors.bg1,
                    }}
                  />
                  <Text style={[styles.value, {color: Colors.lightblack}]}>
                    {moment(duration?.day).fromNow()}
                  </Text>
                  <View
                    style={{
                      width: wp(1.5),
                      height: wp(2),
                      borderRadius: wp(1),
                      backgroundColor: Colors.bg1,
                    }}
                  />
                  <TouchableOpacity onPress={() => setViewResult(!viewResult)}>
                    <Text style={styles.value}>{'View Results'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Like,com,sh */}
              <View
                style={{
                  height: '15%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '95%',
                }}>
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => LikePressP()}
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <AntDesign name="hearto" color={Colors.bg} size={wp(6)} />
                    <Text style={styles.text}>{totalLike_p}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    // onPress={}
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Ionicons
                      name="chatbubble-outline"
                      color={Colors.bg}
                      size={wp(6)}
                    />
                    <Text>{totalComment_p}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => SharePressP()}
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <EvilIcons
                      name="share-google"
                      color={Colors.bg}
                      size={wp(8)}
                    />
                    <Text>{totalShare_p}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </DropShadow>
      </View>
    </View>
  );
};
// post A Question Component
export const PostAQuestionCmp = ({
  question = {},
  setdel,
  onDelete,
  navigation,
}) => {
  const optionsList = question;
  let value = 0;
  const [show, setshow] = useState(false);
  const [viewResult, setViewResult] = useState([]);
  const [index, setindex] = useState(-1);
  const onPressViewResult = (index, status) => {
    setindex(index);
    setViewResult(viewResult.concat({index: index, status: true}));
  };
  const [reporticon, setreporticon] = useState(false);
  const [totalLike_q, setTotalLike_q] = useState(0);
  const [totalComment_q, setTotalComment_q] = useState(0);
  const [totalShare_q, settotalShare_q] = useState(0);
  const [mypost, setmypost] = useState(false);
  const [duration, setDuration] = useState(null);

  const _DeleteQuestion = () => {
    DeleteQuestion(optionsList?.id)
      .then(res => {
        console.log(res.data?.msg);
        onDelete();
        setdel(true);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    // MagicCommentCount(optionsList?.id).then(res=>{
    //     setTotalComment_q(res?.data?.data)
    // })
    QuestionLikeCount(optionsList?.id).then(res => {
      setTotalLike_q(res?.data?.data);
    });
    QuestionShareCount(optionsList?.id).then(res => {
      settotalShare_q(res?.data?.data);
    });
  });
  useEffect(() => {
    if (myID === optionsList?.user_id) {
      setmypost(true);
    }
    ViewQuestion(optionsList?.id)
      .then(res => {
        setDuration(res?.data?.data?.duration_id);
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  }, [optionsList]);
  // ------ Block -------- //
  const _BlockQuestion = () => {
    setreporticon(false);
    BlockQuestion(optionsList?.id, {
      U_ID: myID,
    })
      .then(res => {
        console.log(res?.data);
        onDelete();
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  };
  // Like
  const LikePressQ = () => {
    QuestionLike({
      qus_user_id: optionsList?.user_id,
      like_user_id: myID,
      qus_id: optionsList?.id,
    })
      .then(res => {
        console.log(res.data);
        setTotalLike_q(totalLike_q + 1);
      })
      .catch(err => {
        RemoveQuestionLike(optionsList?.id, {
          like_user_id: myID,
        })
          .then(res => {
            console.log(res.data?.msg);
            setTotalLike_q(totalLike_q - 1);
          })
          .catch(err => {
            console.log(err);
          });
      });
  };
  // ------- SHARE ------- //

  const SharePressQ = () => {
    QuestionShare({
      qus_user_id: optionsList?.user_id,
      share_user_id: myID,
      qus_id: optionsList?.id,
    })
      .then(res => {
        console.log(res.data?.msg);
        settotalShare_q(totalShare_q + 1);
      })
      .catch(err => {
        if (err) {
          alert('You already share this.');
        }
      });
  };
  return (
    <View style={{width: '100%', marginTop: wp(5)}}>
      {reporticon === true ? (
        <ModalCmp onPress={() => _BlockQuestion()} />
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{width: '90%', flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: '20%'}}>
            <TouchableOpacity
              style={{height: wp(15), width: wp(15), borderRadius: wp(15) / 2}}>
              <Image
                source={Images.ic_mainProfile}
                style={{height: '100%', width: '100%'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '40%'}}>
            <Text style={ContainerStyles.text19}>{'Pieroborgo'}</Text>
            <Text style={[ContainerStyles.text5, {textAlign: 'left'}]}>
              <Moment element={Text} fromNow>
                {optionsList?.createdAt}
              </Moment>
            </Text>
          </View>
          <View
            style={{
              width: '40%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setshow(!show)}
              style={{flexDirection: 'row'}}>
              {Array(3)
                .fill(3)
                .map(item => (
                  <View
                    style={{
                      height: 5,
                      width: 5,
                      borderRadius: 2.5,
                      borderWidth: 1.5,
                      marginHorizontal: 1,
                    }}
                  />
                ))}
            </TouchableOpacity>

            {mypost ? (
              <>
                <DropShadow
                  style={[
                    ContainerStyles.shadow,
                    {
                      display: show === false ? 'none' : 'flex',
                      position: 'absolute',
                      right: wp(17),
                      top: wp(1),
                    },
                  ]}>
                  <View
                    style={{
                      height: wp(10),
                      width: wp(10),
                      borderRadius: wp(10) / 2,
                      backgroundColor: Colors.bg,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={Images.ic_editPost}
                      style={{
                        width: wp(8),
                        height: wp(8),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </DropShadow>

                <DropShadow
                  style={[
                    ContainerStyles.shadow,
                    {
                      display: show === false ? 'none' : 'flex',
                      position: 'absolute',
                      right: wp(5),
                      top: wp(1),
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => _DeleteQuestion()}
                    style={{
                      height: wp(10),
                      width: wp(10),
                      borderRadius: wp(10) / 2,
                      backgroundColor: Colors.bg,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={Images.ic_deletepost}
                      style={{
                        width: wp(8),
                        height: wp(8),
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </DropShadow>
              </>
            ) : (
              <DropShadow
                style={[
                  ContainerStyles.shadow,
                  {
                    display: show === false ? 'none' : 'flex',
                    position: 'absolute',
                    right: wp(5),
                    top: wp(1),
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => setreporticon(!reporticon)}
                  style={{
                    height: wp(10),
                    width: wp(10),
                    borderRadius: wp(10) / 2,
                    backgroundColor: Colors.bg,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.reporticon}>
                    <Text style={{color: Colors.white}}>{'i'}</Text>
                  </View>
                </TouchableOpacity>
              </DropShadow>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          height: hp(80),
          maxHeight: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <DropShadow style={[ContainerStyles.shadow1]}>
          <View
            style={{
              width: '100%',
              borderRadius: wp(5),
              height: '90%',
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{width: '95%', alignItems: 'center'}}>
              <View style={{height: '20%', justifyContent: 'center'}}>
                <Text style={styles.question}>{optionsList.question}</Text>
              </View>
              {optionsList.option?.map((item, index) => (
                <View
                  style={{
                    height: hp(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <TouchableOpacity
                    onPress={() => onPressViewResult(index, item.status)}
                    style={[
                      ContainerStyles.button,
                      {
                        width: '95%',
                        justifyContent: 'space-between',
                        backgroundColor:
                          viewResult[index]?.status === true &&
                          item.status === undefined
                            ? Colors.bg2
                            : Colors.bg,
                      },
                    ]}>
                    <View
                      style={{
                        width:
                          viewResult.length === 0
                            ? '100%'
                            : viewResult[index]?.status === true
                            ? '80%'
                            : '100%',
                        justifyContent: 'center',
                        alignItems:
                          viewResult[index]?.status === true
                            ? 'flex-start'
                            : 'center',
                        // borderWidth: 1,
                        height: '100%',
                      }}>
                      <Text
                        style={[
                          ContainerStyles.text,
                          {
                            marginLeft:
                              viewResult[index]?.status === true
                                ? wp(4)
                                : wp(0),
                            color:
                              (viewResult[index]?.status === true &&
                                item.status === true) ||
                              viewResult.length === 0
                                ? Colors.white
                                : viewResult.length !== 0 &&
                                  viewResult[index]?.status === true
                                ? Colors.bg
                                : Colors.white,
                          },
                        ]}>
                        {item.op}
                      </Text>
                    </View>
                    {viewResult.length !== 0 &&
                    viewResult[index]?.status === true ? (
                      <View style={{width: '20%'}}>
                        <DropShadow style={ContainerStyles.shadow}>
                          <View
                            style={[
                              styles.checkStatus,
                              {
                                backgroundColor:
                                  viewResult[index]?.status === true &&
                                  item.status === true
                                    ? Colors.white
                                    : Colors.bg,
                                borderWidth: 1,
                                borderColor:
                                  viewResult[index]?.status === true &&
                                  item.status === true
                                    ? Colors.bg
                                    : Colors.white,
                              },
                            ]}>
                            {viewResult[index]?.status === true &&
                            item.status === true ? (
                              <AntDesign
                                name="check"
                                color={Colors.green}
                                size={wp(7)}
                              />
                            ) : (
                              <Entypo
                                name="cross"
                                color={Colors.red}
                                size={wp(7)}
                              />
                            )}
                          </View>
                        </DropShadow>
                      </View>
                    ) : null}
                  </TouchableOpacity>
                </View>
              ))}
              <View
                style={{
                  height: '15%',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '95%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.value}>{`${value} answers`}</Text>
                  <View
                    style={{
                      width: wp(1.5),
                      height: wp(2),
                      borderRadius: wp(1),
                      backgroundColor: Colors.bg1,
                    }}
                  />
                  <Text style={[styles.value, {color: Colors.lightblack}]}>
                    <Moment element={Text} fromNow>
                      {duration?.day}
                    </Moment>
                  </Text>

                  <TouchableOpacity>
                    <Text style={[styles.value, {color: Colors.green}]}>
                      {'Answer Link'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  height: hp(5),
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '95%',
                }}>
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => {
                      LikePressQ();
                    }}>
                    <AntDesign name="hearto" color={Colors.bg} size={wp(6)} />
                    <Text style={styles.text}>{totalLike_q}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Ionicons
                      name="chatbubble-outline"
                      color={Colors.bg}
                      size={wp(6)}
                    />
                    <Text>{totalComment_q}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => {
                      SharePressQ();
                    }}>
                    <EvilIcons
                      name="share-google"
                      color={Colors.bg}
                      size={wp(8)}
                    />
                    <Text>{totalShare_q}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </DropShadow>
      </View>
    </View>
  );
};
//post magic Question component
export const PostMagicQuestionCmp = ({question = {}, onDelete, navigation}) => {
  const optionsList = question;
  let value = 0;
  const [show, setshow] = useState(false);
  const [viewResult, setViewResult] = useState([]);
  const [mypost, setmypost] = useState(false);
  const [index, setindex] = useState(-1);
  const onPressViewResult = (index, status) => {
    setindex(index);
    setViewResult(viewResult.concat({index: index, status: true}));
  };
  const [totalLike_m, setTotalLike_m] = useState(0);
  const [totalComment_m, setTotalComment_m] = useState(0);
  const [totalShare_m, settotalShare_m] = useState(0);
  const [reporticon, setreporticon] = useState(false);
  const [del, setdel] = useState(false);
  const [duration, setduration] = useState(null);
  const DeleteMagic = () => {
    DeleteMagicQuestion(optionsList?.id)
      .then(res => {
        setshow(false);
        console.log(res.data?.data);
        onDelete();
        // setdel(true)
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    MagicCommentCount(optionsList?.id).then(res => {
      setTotalComment_m(res?.data?.data);
    });
    MagicLikeCount(optionsList?.id).then(res => {
      setTotalLike_m(res?.data?.data);
    });
    MagicShareCount(optionsList?.id).then(res => {
      settotalShare_m(res?.data?.data);
    });
  });
  useEffect(() => {
    if (optionsList?.user_id === myID) {
      setmypost(true);
    }
    ViewMagicQuestion(optionsList?.id)
      .then(res => {
        setduration(res?.data?.data?.duration_id);
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  }, [optionsList]);
  // ------ LIKE -------- //

  const LikePressM = () => {
    MagicLike({
      magic_user_id: optionsList?.user_id,
      like_user_id: myID,
      magic_id: optionsList?.id,
    })
      .then(res => {
        console.log(res.data);
        setTotalLike_m(totalLike_m + 1);
      })
      .catch(err => {
        MagicLikeRemove(optionsList?.id, {
          like_user_id: myID,
        })
          .then(res => {
            console.log(res.data);
            setTotalLike_m(totalLike_m - 1);
          })
          .catch(err => {
            console.log(err);
          });
      });
  };
  // ------- SHARE ------- //

  const SharePressM = () => {
    MagicShare({
      magic_user_id: optionsList?.user_id,
      share_user_id: myID,
      magic_id: optionsList?.id,
    })
      .then(res => {
        console.log(res.data?.msg);
        settotalShare_m(totalShare_m + 1);
      })
      .catch(err => {
        if (err) {
          alert('You already share this.');
        }
      });
  };
  const EditPress = () => {
    navigation.navigate('PostAMagicQuestions', {id: optionsList?.id});
    setshow(false);
  };
  return (
    <View style={{width: '100%', marginTop: wp(5)}}>
      {reporticon === true ? <ModalCmp /> : null}
      {del === true ? (
        <ModelCmp
          title={'Are You Sure to Delete Question ?'}
          modalVisible={del}
          setModalVisible={setdel}
          yesPress={() => {
            DeleteMagic();
            setdel(false);
          }}
        />
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{width: '90%', flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: '20%'}}>
            <TouchableOpacity
              style={{height: wp(15), width: wp(15), borderRadius: wp(15) / 2}}>
              <Image
                source={Images.ic_mainProfile}
                style={{height: '100%', width: '100%'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '40%'}}>
            <Text style={ContainerStyles.text19}>{'Pieroborgo'}</Text>
            <Text style={[ContainerStyles.text5, {textAlign: 'left'}]}>
              <Moment fromNow element={Text}>
                {optionsList?.createdAt}
              </Moment>
            </Text>
          </View>
          <View
            style={{
              width: '40%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setshow(!show)}
              style={{flexDirection: 'row'}}>
              {Array(3)
                .fill(3)
                .map(item => (
                  <View
                    style={{
                      height: 5,
                      width: 5,
                      borderRadius: 2.5,
                      borderWidth: 1.5,
                      marginHorizontal: 1,
                    }}
                  />
                ))}
            </TouchableOpacity>

            {mypost ? (
              <>
                <DropShadow
                  style={[
                    ContainerStyles.shadow,
                    {
                      display: show === false ? 'none' : 'flex',
                      position: 'absolute',
                      right: wp(17),
                      top: wp(1),
                    },
                  ]}>
                  <TouchableOpacity
                    style={{
                      height: wp(10),
                      width: wp(10),
                      borderRadius: wp(10) / 2,
                      backgroundColor: Colors.bg,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => EditPress()}>
                    <Image
                      source={Images.ic_editPost}
                      style={{
                        width: wp(8),
                        height: wp(8),
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </DropShadow>

                <DropShadow
                  style={[
                    ContainerStyles.shadow,
                    {
                      display: show === false ? 'none' : 'flex',
                      position: 'absolute',
                      right: wp(5),
                      top: wp(1),
                    },
                  ]}>
                  <TouchableOpacity
                    style={{
                      height: wp(10),
                      width: wp(10),
                      borderRadius: wp(10) / 2,
                      backgroundColor: Colors.bg,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      setdel(true);
                    }}>
                    <Image
                      source={Images.ic_deletepost}
                      style={{
                        width: wp(8),
                        height: wp(8),
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                </DropShadow>
              </>
            ) : (
              <DropShadow
                style={[
                  ContainerStyles.shadow,
                  {
                    display: show === false ? 'none' : 'flex',
                    position: 'absolute',
                    right: wp(5),
                    top: wp(1),
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => setreporticon(!reporticon)}
                  style={{
                    height: wp(10),
                    width: wp(10),
                    borderRadius: wp(10) / 2,
                    backgroundColor: Colors.bg,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.reporticon}>
                    <Text style={{color: Colors.white}}>{'i'}</Text>
                  </View>
                </TouchableOpacity>
              </DropShadow>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          height: hp(80),
          maxHeight: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <DropShadow style={[ContainerStyles.shadow1]}>
          <View
            style={{
              width: '100%',
              borderRadius: wp(5),
              height: '90%',
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{width: '95%', alignItems: 'center'}}>
              <View
                style={{height: '20%', justifyContent: 'center', width: '90%'}}>
                <Text style={styles.question}>{optionsList?.magic_qus}</Text>
              </View>
              {optionsList.option?.map((item, index) => (
                <View
                  style={{
                    height: hp(11),
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    style={[
                      ContainerStyles.button,
                      {
                        width: '95%',
                        justifyContent: 'space-between',
                        backgroundColor:
                          viewResult[index]?.status === true &&
                          item.status === undefined
                            ? Colors.bg2
                            : Colors.bg,
                      },
                    ]}
                    onPress={() => onPressViewResult(index, item?.status)}>
                    <View
                      style={{
                        width:
                          viewResult.length === 0
                            ? '100%'
                            : viewResult[index]?.status === true
                            ? '80%'
                            : '100%',
                        justifyContent: 'center',
                        alignItems:
                          viewResult[index]?.status === true
                            ? 'flex-start'
                            : 'center',
                        height: '100%',
                      }}>
                      <Text
                        style={[
                          ContainerStyles.text13,
                          {
                            width: '100%',
                            textAlign: 'center',
                            color:
                              (viewResult[index]?.status === true &&
                                item.status === true) ||
                              viewResult.length === 0
                                ? Colors.white
                                : viewResult.length !== 0 &&
                                  viewResult[index]?.status === true
                                ? Colors.bg
                                : Colors.white,
                          },
                        ]}>
                        {item.op}
                      </Text>
                    </View>
                    {viewResult.length !== 0 &&
                    viewResult[index]?.status === true ? (
                      <View style={{width: '20%'}}>
                        <DropShadow style={ContainerStyles.shadow}>
                          <View
                            style={[
                              styles.checkStatus,
                              {
                                backgroundColor:
                                  viewResult[index]?.status === true &&
                                  item.status === true
                                    ? Colors.white
                                    : Colors.bg,
                                borderWidth: 1,
                                borderColor:
                                  viewResult[index]?.status === true &&
                                  item.status === true
                                    ? Colors.bg
                                    : Colors.white,
                              },
                            ]}>
                            {viewResult[index]?.status === true &&
                            item.status === true ? (
                              <AntDesign
                                name="check"
                                color={Colors.green}
                                size={wp(7)}
                              />
                            ) : (
                              <Entypo
                                name="cross"
                                color={Colors.red}
                                size={wp(7)}
                              />
                            )}
                          </View>
                        </DropShadow>
                      </View>
                    ) : null}
                  </TouchableOpacity>
                  {viewResult[index]?.status === true &&
                  item.status === true ? (
                    <Text style={styles.viewAns}>{'View Ans.'}</Text>
                  ) : null}
                </View>
              ))}
              <View
                style={{
                  height: hp(7),
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '95%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '70%',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.value}>{`${value} answers`}</Text>
                  <View
                    style={{
                      width: wp(1.5),
                      height: wp(2),
                      borderRadius: wp(1),
                      backgroundColor: Colors.bg1,
                    }}
                  />
                  <Text style={[styles.value, {color: Colors.lightblack}]}>
                    <Moment element={Text} fromNow>
                      {duration?.day}
                    </Moment>
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: hp(5),
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '95%',
                }}>
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => LikePressM()}>
                    <AntDesign name="hearto" color={Colors.bg} size={wp(6)} />
                    <Text style={styles.text}>{totalLike_m}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Ionicons
                      name="chatbubble-outline"
                      color={Colors.bg}
                      size={wp(6)}
                    />
                    <Text>{totalComment_m}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '20%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => SharePressM()}>
                    <EvilIcons
                      name="share-google"
                      color={Colors.bg}
                      size={wp(8)}
                    />
                    <Text>{totalShare_m}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </DropShadow>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    fontFamily: Fonts.Montserrat_SemiBold,
    fontWeight: '500',
    fontSize: wp(4),
    color: Colors.bg,
  },
  value: {
    color: Colors.bg,
    fontWeight: '400',
    fontSize: wp(5),
    textAlign: 'left',
  },
  button: {
    height: hp(7.5),
    width: wp(90),
    borderColor: Colors.text2,
    borderRadius: wp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.bg3,
  },
  checkStatus: {
    width: wp(17),
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(17),
    borderRadius: wp(17) / 2,
    backgroundColor: Colors.bg,
    borderWidth: 1,
  },
  viewAns: {
    width: '95%',
    textAlign: 'right',
    color: Colors.bg,
  },
  reporticon: {
    height: wp(7),
    width: wp(7),
    borderRadius: wp(7) / 2.3,
    borderWidth: 1,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

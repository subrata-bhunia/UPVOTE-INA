import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../helper/Colors';
import FloatingButton from '../../component/FloatingButton';
import ContainerStyles from '../../helper/ContainerStyles';
import ButtonType from '../../component/ButtonType';
const TrendsScreen = ({ navigation }) => {
  return (
    <View style={[ContainerStyles.container, { justifyContent: 'flex-start' }]}>
      {/* -------------filter--------------------  */}
      <View style={[ContainerStyles.rowContainer]}>
        <View style={{ width: '85%', alignItems: 'flex-end' }}>
          <View style={styles.searchInput}>
            <View style={{ width: '20%', alignItems: 'flex-end' }}>
              <AntDesign name="search1" size={wp(7)} color={Colors.bg} />
            </View>
            <View style={{ width: '70%' }}>
              <TextInput
                placeholder="Search"
                placeholderTextColor={Colors.text3}
                style={{ marginLeft: wp(5) }}
              />
            </View>
          </View>
        </View>
        <View style={{ width: '15%', alignItems: 'center' }}>
          <AntDesign name="filter" size={wp(6)} color={Colors.bg} />
        </View>
      </View>

      <View
        style={[
          ContainerStyles.rowContainer,
          { height: hp(8), borderBottomWidth: 1, borderBottomColor: Colors.line },
        ]}>
        <Text style={[ContainerStyles.text14, { width: '90%' }]}>
          {'Trends for you'}
        </Text>
      </View>
      <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
        <Text style={[ContainerStyles.text14]}>{'No new trends for you'}</Text>
      </View>
      <View style={[ContainerStyles.rowContainer, { height: hp(10) }]}>
        <Text style={[ContainerStyles.text8, { width: '85%' }]}>
          {
            'It seems like there’s not a lot to show you right now, but you can see trends for other areas'
          }
        </Text>
      </View>
      <View
        style={[
          ContainerStyles.rowContainer,
          {
            height: hp(12),
            borderBottomWidth: 1,
            borderBottomColor: Colors.line,
          },
        ]}>
        <ButtonType
          navigation={navigation}
          text="Change Location"
          btnstyle={styles.btnstyle}
        />
      </View>
      <FloatingButton navigation={navigation} />
    </View>
  );
};

export default TrendsScreen;

const styles = StyleSheet.create({
  searchInput: {
    height: wp(14),
    width: wp(70),
    borderRadius: wp(5),
    backgroundColor: Colors.bg4,
    flexDirection: 'row',

    alignItems: 'center',
  },
  btnstyle: {
    height: wp(13),
    width: wp(50),
    borderRadius: wp(10),
    backgroundColor: Colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

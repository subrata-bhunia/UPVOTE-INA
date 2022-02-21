"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Colors = _interopRequireDefault(require("./Colors"));

var _Fonts = _interopRequireDefault(require("./Fonts"));

var _reactNativeResponsiveScreen = require("react-native-responsive-screen");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable prettier/prettier */
var _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var ContainerStyles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: _Colors["default"].white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStart: {
    flex: 1,
    backgroundColor: _Colors["default"].white,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerflexStart: {
    flex: 1,
    backgroundColor: _Colors["default"].white,
    alignItems: 'flex-start'
  },
  rowContainer: {
    width: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _Colors["default"].white
  },
  row10PerContainer: {
    width: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(100),
    height: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _Colors["default"].white
  },
  row15PerContainer: {
    width: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(100),
    height: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _Colors["default"].white
  },
  rowContainerStart: {
    width: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(100),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: _Colors["default"].white
  },
  text: {
    color: _Colors["default"].white,
    fontWeight: '600',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(2.5),
    fontFamily: _Fonts["default"].Montserrat_Medium
  },
  textwhite: {
    color: _Colors["default"].white,
    fontWeight: '600',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(2.5),
    fontFamily: _Fonts["default"].Montserrat_SemiBold,
    width: '80%'
  },
  texttwoWhite: {
    color: _Colors["default"].white,
    fontWeight: '400',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(2),
    fontFamily: _Fonts["default"].Montserrat_Medium
  },
  text1: {
    fontFamily: _Fonts["default"].Montserrat_ExtraBold,
    fontWeight: '700',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(3)
  },
  text2: {
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontWeight: '500',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(1.8),
    color: _Colors["default"].text1,
    textAlign: 'center',
    width: '90%'
  },
  text3: {
    fontFamily: _Fonts["default"].Montserrat_Regular,
    fontWeight: '300',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(1.8),
    color: _Colors["default"].text1,
    textAlign: 'center'
  },
  text4: {
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontWeight: '300',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(1.8),
    color: _Colors["default"].bg,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  text5: {
    fontFamily: _Fonts["default"].Montserrat_SemiBold,
    fontWeight: '500',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(1.8),
    color: _Colors["default"].black,
    textAlign: 'center'
  },
  text6: {
    fontFamily: _Fonts["default"].Montserrat_SemiBold,
    fontWeight: '600',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(2.2),
    color: _Colors["default"].text1,
    textAlign: 'center'
  },
  text7: {
    fontFamily: _Fonts["default"].Montserrat_SemiBold,
    fontWeight: '600',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(2.2),
    color: _Colors["default"].black,
    textAlign: 'center'
  },
  text8: {
    fontFamily: _Fonts["default"].Montserrat_SemiBold,
    fontWeight: '500',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(1.8),
    color: _Colors["default"].text1,
    textAlign: 'center'
  },
  text9: {
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontWeight: '500',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(1.8),
    color: _Colors["default"].red,
    textAlign: 'center'
  },
  text10: {
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontWeight: '400',
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(1.8 * 38 / 18),
    color: _Colors["default"].bg,
    textAlign: 'center'
  },
  text11: {
    textAlign: 'center',
    paddingHorizontal: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(3),
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(5)
  },
  text12: {
    fontFamily: _Fonts["default"].Montserrat_SemiBold,
    fontWeight: '600',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(1.8),
    color: _Colors["default"].black,
    textAlign: 'center'
  },
  text13: {
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontWeight: '600',
    fontSize: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(1.8),
    color: _Colors["default"].back,
    textAlign: 'center'
  },
  text14: {
    fontFamily: _Fonts["default"].Montserrat_ExtraBold,
    fontWeight: '700',
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(5)
  },
  text15: {
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontWeight: '700',
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(4),
    color: _Colors["default"].text4
  },
  text16: {
    color: _Colors["default"].text5,
    fontWeight: '400',
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(3)
  },
  text17: {
    fontFamily: _Fonts["default"].Montserrat_ExtraBold,
    fontWeight: '700',
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(4)
  },
  text18: {
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontWeight: '600',
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(5),
    color: _Colors["default"].back,
    textAlign: 'center'
  },
  text19: {
    // textAlign: 'center',
    fontFamily: _Fonts["default"].Montserrat_Medium,
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(5)
  },
  button: {
    height: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(7.5),
    width: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(90),
    borderColor: _Colors["default"].text2,
    borderRadius: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _Colors["default"].bg
  },
  ic_button: {
    height: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(7.5),
    width: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(30),
    borderColor: _Colors["default"].text2,
    borderRadius: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _Colors["default"].bg
  },
  img: {
    width: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(100),
    height: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(35)
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(7.5),
    borderRadius: (0, _reactNativeResponsiveScreen.heightPercentageToDP)(7.5 / 2),
    borderWidth: 1,
    borderColor: _Colors["default"].text2,
    marginHorizontal: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(2)
  },
  roundedTextInput: {
    borderRadius: 25,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: _Colors["default"].bg,
    borderTopColor: _Colors["default"].bg,
    borderLeftColor: _Colors["default"].bg,
    borderRightColor: _Colors["default"].bg,
    width: 50,
    height: 50,
    borderColor: _Colors["default"].bg,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 15,
    color: _Colors["default"].red,
    fontSize: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(7)
  },
  inputContainer: {
    height: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(20),
    width: '90%',
    borderRadius: (0, _reactNativeResponsiveScreen.widthPercentageToDP)(3),
    borderWidth: 1,
    borderColor: _Colors["default"].bg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  shadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.4,
    shadowRadius: 9
  },
  shadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.4,
    shadowRadius: 9
  }
});

var _default = ContainerStyles;
exports["default"] = _default;
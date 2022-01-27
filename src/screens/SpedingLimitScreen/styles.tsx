import {StyleSheet} from 'react-native';
import {
  DARK_BLUE,
  DARK_GREY,
  GRAY,
  LIGHT_GREEN,
  WHITE,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  FONTS
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BLUE,
  },
  headingTitle:{
    fontFamily: FONTS.fontFamily_bold,
    fontSize: FONTS.fontSize_20,
    color: WHITE,
  },
  noteText:{
    fontFamily: FONTS.fontFamily_medium,
    fontSize: FONTS.fontSize_12_5,
  },
  subView: {
    width: '100%',
    height: WINDOW_HEIGHT - 150,
    backgroundColor: DARK_GREY,
    borderTopStartRadius: WINDOW_WIDTH * 0.08,
    borderTopEndRadius: WINDOW_WIDTH * 0.08,
    flexDirection: 'column-reverse',
    overflow: 'hidden',
  },
  questionStyle: {
    color: WHITE,
    width: '95%',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 40,
    lineHeight: 40,
  },
  missingWordStyle: {
    color: WHITE,
    width: '100%',
    textAlign: 'center',
    marginTop: 40,
  },
  popMainViewStyle: {flex: 1, alignItems: 'center'},
  popScrollViewStyle: {width: '100%'},
  popSubViewStyle: {flex: 1, alignItems: 'center'},
  textBlankStyle: {
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txtAnsBlankVIewSTyle: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    bottom: -5,
    borderRadius: 17,
    overflow: 'hidden',
    color: WHITE,
  },
  txtAnsView: {textDecorationLine: 'underline', color: WHITE},
  creditCardMainView: {
    width: WINDOW_WIDTH - 40,
    aspectRatio: 1.55,
    backgroundColor: LIGHT_GREEN,
    borderRadius: 10,
    marginTop: -10,
  },
  creditCardView: {
    aspectRatio: 1.75,
  },
  creditCardImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  creditCardNumberText: {
    color: 'white',
    marginTop: '8%',
    marginLeft: '10%',
    width: '80%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputView: {paddingLeft: 10, flex: 1},
  amountView: {
    width: WINDOW_WIDTH / 3,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(32, 209, 103, 0.07)',
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  weeklyView: {width: '100%', alignItems: 'center', marginTop: 10},
  spendingLimitView: {
    width: WINDOW_WIDTH,
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  limitHeaderView: {width: '100%', flexDirection: 'row'},
  meterView: {
    width: 20,
    aspectRatio: 1,
    marginRight: 5,
  },
  imageMeter: {width: '100%', height: '100%', resizeMode: 'contain'},
  txtFieldMainView: {
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    flexDirection: 'row',
  },
  txtFieldAmount: {
    fontFamily: FONTS.fontFamily_semi_bold,
    fontSize: FONTS.fontSize_12,
    color: DARK_GREY,
    padding: 0,
    height: 45,
    flex: 1,  width: '80%'},
  txtWeekly: {
    fontFamily: FONTS.fontFamily_regular,
    fontSize: FONTS.fontSize_11,
    color: 'rgba(34,34,34,0.4)'
  },
  amountText:{
    fontFamily: FONTS.fontFamily_semi_bold,
    fontSize: FONTS.fontSize_12,
    color: LIGHT_GREEN
  }
});

export default styles;

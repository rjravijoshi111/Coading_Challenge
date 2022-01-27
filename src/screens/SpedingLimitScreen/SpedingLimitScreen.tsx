import React, {useState} from 'react';
import {View, Text, FlatList, Image, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import ButtonWithStatus from '../../components/SaveButton';
import {WHITE} from '../../styles';
import {appImages} from '../../styles/appImages';
import Header from '../../components/Header';
import DollarSign from '../../components/DollarSign';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {SetSpedingLimit} from '../DebitCardScreen/actions';
import styles from './styles';
import Lang from '../../localization';
function SpedingLimitScreen() {
  const navigation = useNavigation();
  const [limitValue, setLimitValue] = useState<string>('');
  const dispatch = useDispatch();
  const Data = [{amount: '5,000'}, {amount: '10,000'}, {amount: '20,000'}];

  const Amount = (props: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setLimitValue(`${props?.item?.amount?.toString().replace(',','')}`);
        }}
        style={styles.amountView}>
        <View>
          <Text style={styles.amountText}>S$ {props?.item?.amount}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <Header
          isShowBack={true}
          onBackPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={styles.headingTitle}>
          {Lang.spendingLimit.spending_limit}
        </Text>
      </View>

      <View style={styles.spendingLimitView}>
        <View style={styles.limitHeaderView}>
          <View style={styles.meterView}>
            <Image style={styles.imageMeter} source={appImages.meterIcon} />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={styles.noteText}>
              {Lang.spendingLimit.set_weekly_limit}
            </Text>
          </View>
        </View>
        <View style={styles.txtFieldMainView}>
          <DollarSign />
          <View style={styles.textInputView}>
            <TextInput
              style={styles.txtFieldAmount}
              value={limitValue}
              keyboardType="numeric"
              onChangeText={(val) => {
                setLimitValue(val);
              }}
            />
          </View>
        </View>

        <View style={styles.weeklyView}>
          <Text style={styles.txtWeekly}>
            {Lang.spendingLimit.description}
          </Text>
        </View>

        <View style={{width: '100%'}}>
          <FlatList
            data={Data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => `key-${i}`}
            renderItem={({item, index}) => <Amount item={item} />}
          />
        </View>
        <View style={{flex: 1}}></View>

        <ButtonWithStatus
          onPress={() => {
            if(limitValue.match(/^\d+$/)){
              dispatch(SetSpedingLimit(limitValue));
              navigation.goBack();
            } else {
              if(limitValue == ''){
                Alert.alert(Lang.error, Lang.errormsg.empty_value)
              }else{
                Alert.alert(Lang.error, Lang.errormsg.invalid_value)
              }
            }
          }}
        />
      </View>
    </View>
  );
}

export default SpedingLimitScreen;

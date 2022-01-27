import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {appImages} from '../../styles/appImages';
import Header from '../../components/Header';
import DollarSign from '../../components/DollarSign';
import DabitCardOption from '../../components/DabitCardOption';
import AtmCard from '../../components/AtmCard';
import styles from './styles';
import Lang from '../../localization';
function DebitCardScreen() {
  const [isShowCardNumber, setIsShowCardNumber] = useState<boolean>(false);
  const spedingLimit = useSelector(
    (state) => state.DebitCardReducer.spedingLimit,
  );
  const isFreezeCard = useSelector(
    (state) => state.DebitCardReducer.isFreezeCard,
  );
  
  const Data = [
    {
      image: appImages.topUp,
      title: Lang.debitCardScreen.top_up_account,
      detail: Lang.debitCardScreen.deposite_money_to,
    },
    {
      image: appImages.weeklyLimit,
      title: Lang.debitCardScreen.weekly_spending_limit,
      detail: spedingLimit != undefined
        ? `${Lang.debitCardScreen.weekly_spending_limit_is} S$ ${spedingLimit}`
        : Lang.debitCardScreen.no_weekly_spending_limit,
      isSelected: spedingLimit != undefined || false,
      isSwitchDisplay: true,
    },
    {
      image: appImages.FreezCard,
      title: Lang.debitCardScreen.freeze_card,
      detail: Lang.debitCardScreen.freeze_card_subtitle,
      isSelected: isFreezeCard || false,
      isSwitchDisplay: true,
    },
    {
      image: appImages.card,
      title: Lang.debitCardScreen.get_a_new_card,
      detail: Lang.debitCardScreen.get_a_new_card_subtitle,
    },
    {
      image: appImages.deactivateCard,
      title: Lang.debitCardScreen.deactivated_cards,
      detail: Lang.debitCardScreen.deactivated_cards_subtitle,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Header onBackPress={undefined} />
        <Text style={styles.txtDebit}>{Lang.debitCardScreen.debit_card}</Text>
        <Text style={styles.txtAvailable}>{Lang.debitCardScreen.available_balance}</Text>
        <View style={styles.mainViewAvailableBalance}>
          <DollarSign />
          <Text style={styles.txtAVailableBalance}>3,000</Text>
        </View>
      </View>
      <View style={styles.bottomView} />
      <ScrollView contentContainerStyle={{marginTop: 175, paddingBottom:175}}>
        <View style={styles.cardContainer}>
          <View style={styles.cardNumberView}>
            <TouchableOpacity
              onPress={() => {
                setIsShowCardNumber(!isShowCardNumber);
              }}
              style={styles.cardNumberTouch}>
              <View style={styles.imgViewCardShow}>
                <Image
                  style={styles.imgCardShowHide}
                  source={
                    isShowCardNumber
                      ? appImages.disableEye
                      : appImages.enableEye
                  }
                />
              </View>
              <Text style={styles.txtCardShowHide}>
                {isShowCardNumber ? 'Hide' : 'Show'} card number
              </Text>
            </TouchableOpacity>
            <AtmCard isHideCardNumber={!isShowCardNumber} />
          </View>
          
          {spedingLimit != undefined && <View style={styles.spendingLimitMainView}>
            <View style={styles.spendingLimitView}>
              <Text style={styles.spendingLimitTitle}>{Lang.debitCardScreen.debit_card_spending_limit}</Text>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.remainingLimitText}>{"$345"}</Text>
                <Text style={styles.limitText}>{` | $${spedingLimit}`}</Text>
              </View>
              
            </View>
            <View style={styles.mainProgreessView}>
              <View style={styles.subProgreessView} />
            </View>
          </View>}
          <View style={{flex: 1}}>
            {Data.map((item, index) => {
              return <DabitCardOption key={index} item={item} index={index} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default DebitCardScreen;

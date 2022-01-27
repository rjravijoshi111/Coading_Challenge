import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, Image, Switch } from "react-native";
import { BLUE_TEXT, GRAY, LIGHT_GREEN } from "../styles";
import { useDispatch } from "react-redux";
import {
  SetSpedingLimit,
  SetIsFreezeCard,
} from "../screens/DebitCardScreen/actions";
const DabitCardOption = ({
  item = {
    image: "",
    title: "",
    detail: "",
    isSelected: false,
    isSwitchDisplay: false,
  },
  index = 0,
}) => {
  const navigation = useNavigation();
  const [switchStatus, setSwitchStatus] = useState<boolean>(item.isSelected);
  const dispatch = useDispatch();

  useEffect(() => {
    setSwitchStatus(item.isSelected);
  }, [item]);

  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image style={styles.img} source={item?.image} />
      </View>
      <View style={styles.subView}>
        <Text style={styles.txtTitle}>{item?.title}</Text>
        <Text style={styles.txtDetails}>{item?.detail}</Text>
      </View>
      {item?.isSwitchDisplay === true && (
        <View style={styles.switchMainView}>
          <Switch
            thumbColor={"white"}
            value={switchStatus}
            onValueChange={(val) => {
              if (index == 1) {
                if (val) {
                  navigation.navigate("SpedingLimitScreen");
                  return;
                } else {
                  dispatch(SetSpedingLimit(undefined));
                }
              } else if (index == 2) {
                dispatch(SetIsFreezeCard(val));
              }
              setSwitchStatus(val);
            }}
            trackColor={{
              false: GRAY,
              true: LIGHT_GREEN,
            }}
            style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }}
          />
        </View>
      )}
    </View>
  );
};

export default DabitCardOption;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-between",
  },
  imgView: {
    width: 30,
    aspectRatio: 1,
    marginRight: 5,
  },
  img: { width: "100%", height: "100%", resizeMode: "contain" },
  subView: { flex: 1 },
  txtTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: BLUE_TEXT,
    marginBottom: 2,
  },
  txtDetails: { fontSize: 12, color: "rgba(34,34,34,0.6)" },
  switchMainView: {
    height: "100%",
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
});

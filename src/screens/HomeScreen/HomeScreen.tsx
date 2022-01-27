import React, {useEffect} from 'react';
import {
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import * as Action from './actions';
import {connect, useDispatch, useSelector} from 'react-redux';

function HomeScreen() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.HomeScreenReducer.usersData);

  const userDataLoading = useSelector((state) => state?.usersData);

  useEffect(() => {
    dispatch(Action.GetUserData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {userDataLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={usersData}
          ListHeaderComponent={() =>{
            return <Text style={styles.headingText}>{"Dummy API call"}</Text>;
          }}
          renderItem={({item, index}) => {
            return <Text style={styles.titleText}>{item.name}</Text>;
          }}
        />
      )}
    </SafeAreaView>
  );
}
const mapStateToProps = (state: any) => {
  return {
    usersData: state?.HomeScreenReducer?.usersData,
  };
};
export default connect(mapStateToProps, null)(HomeScreen);

import React from 'react';
import {StyleSheet, View} from 'react-native';
import CardDeal from './CardDeal';
const Items = ({item, navigation, setCart}) => {
  return (
    <View style={styles.rowView}>
      <CardDeal setCart={setCart} item={item} navigation={navigation} />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
  },
});

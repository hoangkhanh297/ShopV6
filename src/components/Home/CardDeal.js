import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardDeal = ({type, price}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/clothing.png')}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>{type}</Text>
        <Text style={styles.bodyPrice}>
          {price} <Text style={styles.bodyPriceOri}>$19</Text>
        </Text>
        <Text style={styles.bodyTime}>Ends in 05:21:46</Text>
      </View>
      <View style={styles.saleOff}>
        <Text style={styles.saleOffText}>-30%</Text>
      </View>
    </View>
  );
};

export default CardDeal;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,

    shadowColor: '#222',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },

  bodyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  bodyPrice: {
    fontWeight: '500',
    color: 'red',
    fontSize: 16,
    marginVertical: 3,
  },

  bodyPriceOri: {
    color: '#222',
    textDecorationLine: 'line-through',
  },

  bodyTime: {
    color: '#ABB0B8',
  },

  saleOff: {
    position: 'absolute',
    backgroundColor: '#E4828B',
    paddingHorizontal: 8,
    paddingVertical: 1,
    top: 8,
  },
  saleOffText: {
    color: '#fff',
  },
});
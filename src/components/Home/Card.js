import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ceil} from 'react-native-reanimated';
const screenWidth = Dimensions.get('window').width;
const CardDeal = ({item, setCart}) => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/clothing.png')}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.bodyDescription}>{item.description}</Text>
        <Text style={styles.bodyPrice}>
          {' '}
          ${(item.price - (item.price * item.saleOffText) / 100).toFixed(2)}
        </Text>
        <Text style={styles.bodyPriceOri}>${item.price}</Text>
        <Text style={styles.bodyTime}>Close at: {item.endIn}</Text>
        <View style={styles.itemsCounting}>
          <TouchableOpacity style={styles.button} onPress={setCart}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.numberOfItem}>{number}</Text>
          <TouchableOpacity style={styles.button} onPress={setCart}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.saleOff}>
        <Text style={styles.saleOffText}>-{item.saleOffText}</Text>
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
    width: screenWidth - 15,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 16,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFF66',
    padding: 10,
    marginLeft: 100,
  },
  image: {
    width: 50,
    height: 50,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },

  bodyDescription: {
    fontSize: 14,
  },

  bodyPrice: {
    fontWeight: '500',
    color: 'red',
    fontSize: 16,
    marginVertical: 3,
    marginRight: 10,
  },

  bodyPriceOri: {
    color: '#222',
    textDecorationLine: 'line-through',
    marginRight: 5,
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
  itemsCounting: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  numberOfItem: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: -60,
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const Card = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.cardTop}>
          <Image
            style={styles.image}
            source={require('../../assets/clothing.png')}
          />
        </View>
        <Text style={styles.cartTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },

  container: {
    width: '25%',
    flexDirection: 'row',
    marginBottom: 15,
  },

  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTop: {
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#222',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 8,
    width: Dimensions.get('screen').width / 5,
  },

  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import SearchBar from '../components/Home/SearchBar';
import Items from '../components/Home/Items';
import Card from '../components/Home/Card';

const Cart = ({navigation}) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    fetch('http://192.168.0.111:8888/products')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: 'hihi',
    }),
  };
  const addToCart = () => {
    return fetch('http://192.168.0.111:8888/add', requestOptions)
      .then((response) => response.json())
      .then((json) => {
        return json.cart;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const renderItem = ({item}) => (
    <View>
      <Card
        setCart={() => {
          setCart(cart + 1);
          addToCart();
        }}
        item={item}
        navigation={navigation}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <SearchBar
        navigation={navigation}
        cart={cart}
        setSearchInput={() => setSearchInput(searchInput)}></SearchBar>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {},
});

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const SearchBar = ({navigation, cart, setSearchInput}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Icon name="menu" size={30} color="#222" style={styles.menu} />
      </TouchableOpacity>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search"
          onEndEditing={setSearchInput}
          style={styles.input}
        />
      </View>
      <View style={styles.cart}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Icon
            name="shopping-cart"
            size={30}
            color="gray"
            style={styles.cart}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cart}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    marginLeft: 10,
  },
  cart: {
    marginRight: 10,
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 12,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    paddingVertical: 5,
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#E6848C',
    width: 18,
    height: 18,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    right: -4,
    top: -4,
  },
  badgeText: {
    color: '#fff',
  },
});

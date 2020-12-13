import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-gesture-handler';
const SearchBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Icon name="menu" size={30} color="#222" style={styles.menu}/>
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('SlideMenu');
        }} >
        <Icon name="search" size={20} color="gray" />
        <Text>Menu</Text>
        </TouchableOpacity>
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      <View style={styles.cart}>
        <Icon1 name="shoppingcart" size={30} color="gray" style={styles.cart}/>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>4</Text>
        </View>
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
    marginLeft: 10
  },
  cart:{
      marginRight: 10
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
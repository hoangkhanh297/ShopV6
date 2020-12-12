
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
const SearchBar = () => {
    return (
        <View style={styles.container}>
        <Icon name="menu" size={30} color="#222" />
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="gray" />
          <TextInput placeholder="Search" style={styles.input} > AHAHAHHAH</TextInput>
        </View>
        <View style={styles.cart}>
          <Icon name="shopping-cart" size={30} color="gray" />
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
      marginTop:50
    },
  
    searchBar: {
      flexDirection: 'row',
      flex: 1,
      borderWidth: 1,
      borderColor: '#EFEFEF',
      borderRadius: 8,
      paddingHorizontal: 10,
      alignItems: 'center',
      marginHorizontal: 12,
    },
    input: {
      fontSize: 18,
      marginLeft: 10,
      paddingVertical: 5,
      paddingTop: 20
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

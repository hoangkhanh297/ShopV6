import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Button
} from 'react-native';
import SideMenu from 'react-native-side-menu'

const Home = ({ navigation }) => {
  return (
    <SideMenu menu={menu}>

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
      </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
      </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
        Cmd+Control+Z for dev menu
      </Text>
      </View>
    </SideMenu>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }

});



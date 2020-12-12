import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import  SearchBar  from "../components/Home/SearchBar";
const Home = () => {
    return (
        <View style={styles.container}>
            <SearchBar></SearchBar>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});



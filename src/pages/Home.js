import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Button
} from 'react-native';
import SearchBar from "../components/Home/SearchBar";
import Items from "../components/Home/Items";

const Home = ({ navigation }) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState(0)
    useEffect(() => {
        fetch('http://192.168.137.1:8888/login')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);
    const getMoviesFromApi = () => {
        return fetch('http://192.168.137.1:8888/add')
            .then((response) => response.json())
            .then((json) => {
                return json.cart;
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const renderItem = ({ item }) => (
        <View>
            <Items
                setCart={() => { setCart(cart + 1) || getMoviesFromApi }}
                item={item}
                navigation={navigation} />
        </View>

    );
    return (
        <View style={styles.container}>
            <SearchBar navigation={navigation} cart={cart}></SearchBar>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>

    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowView: {
    }

});



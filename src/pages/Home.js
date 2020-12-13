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

const Home = ({navigation}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://10.20.28.201:8888/login')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);
    const renderItem = ({ item }) => (
        <View>
            <Items
                item={item} 
                navigation ={navigation}/>
        </View>

    );
    return (
        <View style={styles.container}>
            <SearchBar navigation={navigation}></SearchBar>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            {/* <Text>Public Landing Screen</Text>
            <Button
                title="Go to Sign In"
                onPress={() => navigation.navigate('History')}
            /> */}
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



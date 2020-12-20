import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    Button,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const UserProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.openDrawer();
                }}>
                    <Icon name="menu" size={30} color="#222" style={styles.menu} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Works!")}>
                    <Image
                        style={styles.avatar}
                        source={require('../assets/clothing.png')}
                        activeOpacity={0.7}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
                <Text numberOfLines={1} style={styles.userName}>Hoàng Văn Khánh</Text>
                <Text numberOfLines={1} style={styles.birthday}>Date of birth: 02/09/1997</Text>
                <Text numberOfLines={1} style={styles.address}>Address: 02/09/1997</Text>
            </View>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center'
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop: 80,
        marginLeft: 140
    },

    userInfo: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    userName: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10
    },
    birthday: {
        fontSize: 15,
    },
    address: {
        fontSize: 15,
    }

});
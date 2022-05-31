import React from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

//Custom Imports
import { updateUserFields } from '../../redux/action/usersAction';

const UsersFunctionalComponent = () => {

    const dispatch = useDispatch();
    const { data, loader } = useSelector((state) => state.users);

    const updateData = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        dispatch(updateUserFields('loader', true))
        Axios.get(url).then((response) => {
            const { data } = response;
            dispatch(updateUserFields('data', data))
            dispatch(updateUserFields('loader', false))
        }, (error) => {
            console.log('Axios error ', error);
            dispatch(updateUserFields('loader', false))
        })
    }

    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.cardContainer}>
                <Text style={styles.textStyle}>{item.name}</Text>
            </View>
        )
    }

    const renderConditionalData = () => {
        if (loader) {
            return (
                <ActivityIndicator size={'large'} color={'red'} />
            )
        } else {
            return (
                <View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={updateData}>
                        <Text style={styles.textStyle}>Update Redux</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderListData}
                        style={{ marginTop: 20 }}
                        contentContainerStyle={{ flexGrow: 1 }}
                    />
                </View>
            )
        }
    }

    return (
        <View style={styles.container} >
            {renderConditionalData()}
        </View>
    )
}

export default UsersFunctionalComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    buttonContainer: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    textStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    cardContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
        marginTop: 10
    }
})
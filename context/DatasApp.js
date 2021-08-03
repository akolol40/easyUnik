import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function DatasApp(){
    return {
        email: await AsyncStorage.getItem('@email'),
        pass: '123',
        token: await AsyncStorage.getItem('@token'),
        id: await AsyncStorage.getItem('@id')
    }
}
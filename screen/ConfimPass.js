import React, {useState} from 'react'
import styles from '../styles/styles'
import { View, SafeAreaView, KeyboardAvoidingView, Text, Alert, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Button from '../components/Button'
import Edit from '../components/Edit'
import SmallLogo from '../svg/SmallLogo'
import DatasApp from '../context/DatasApp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
const ConfimPass = (props) => {
    const [pass, setpass] = useState()
    const [pass2, setpass2] = useState()
    const [errorcode, seterrorcode] = useState('')

    async function checkPassword() {
        const app =  await DatasApp()
        
        console.log(app)
        if (pass !== pass2) 
            seterrorcode('Пароли не совпадают!')
        else {
            const url = 'http://easyunik.ru/api/v1/'
            try
            {
            let response = await fetch(url+'confimpass', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: "cors",
                method: "POST",
                body: JSON.stringify({email: JSON.parse(app.email),pwd: pass})
            })  

             response = await fetch(url+'login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  mode: "cors",
                  method: "POST",
                  body: JSON.stringify({email: JSON.parse(app.email), pwd: pass})
              })  
              
             result = await response.json()
              if (result.status === 'error') {
                seterrorcode('Неверный логин или пароль!')
              } else if (result.message === 'ok') {
                await AsyncStorage.setItem('@email',  JSON.parse(app.email))
                await AsyncStorage.setItem('@token', result.token)
                await AsyncStorage.setItem('@id', result.id)
                await AsyncStorage.setItem('@inAuth', JSON.stringify(true))
                props.navigation.push("Profile")
              }
            } catch (error) {
                console.log('Error:', error)
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center', marginTop: vmin(4)}} behavior={Platform.OS ==='ios' ? 'padding' : 'height'} enabled   keyboardVerticalOffset={100}>
                <SmallLogo/>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={[styles.textHeader, {marginTop: 47.6, marginBottom: 60}]}>
                        Придумайте пароль
                    </Text>
                    <Edit
                        val = {pass}
                        change = {setpass}
                        style={[styles.edit, {marginTop: 0, width: vmin(90)}]}
                        placeholders={'Пароль'}
                        pass={true}
                    />
                    <Edit
                        val = {pass2}
                        change = {setpass2}
                        style={[styles.edit, {marginTop: 11, width: vmin(90)}]}
                        placeholders={'Подтвердите пароль'}
                        pass={true}
                    />
                    <Text style={[styles.textStyle,{marginTop: 137, color: '#DA4040'}]}>{errorcode}</Text>
                    <Button
                        Style={[styles.button, {marginTop: 43, width: vmin(90)}]}
                        Press={() => checkPassword()}
                        Caption={'Далее'}
                        textStyle={styles.loginTextStyle}
                    />
                    
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ConfimPass
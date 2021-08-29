import React, {useState} from 'react'
import styles from '../styles/styles'
import { View, SafeAreaView, KeyboardAvoidingView, Text } from 'react-native'
import Button from '../components/Button'
import Edit from '../components/Edit'
import SmallLogo from '../svg/SmallLogo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
const EmailScreen = (props) => {
    const [email, changeEmail] = useState()
    const [errorcode, seterrorcode] = useState('')
    const EmailCodeSender = async () => {
        const code = Math.round(Math.random(100000)*10000)
        const url = 'http://easyunik.ru/api/v1/'
        try
        {
          let response = await fetch(url+'sendcode', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              mode: "cors",
              method: "POST",
              body: JSON.stringify({email: email.toLowerCase(), code: code})
          })  
          let result = await response.json()
          if (result.massage === 'reg') {
            seterrorcode('Аккаунт с этим E-mail уже \n существует')
          } else if (response.ok) {
          await AsyncStorage.setItem('@email', JSON.stringify(email.toLowerCase()))
          await AsyncStorage.setItem('@code', JSON.stringify(code))
          props.navigation.push("VerifCode")
        }
        } catch(error) {
            console.log('Error:', error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center', marginTop: vmin(4)}} behavior="padding" enabled   keyboardVerticalOffset={100}>
                <SmallLogo/>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={[styles.textHeader, {marginTop: 47.6}]}>
                        Введите ваш E-mail
                    </Text>
                    <Text style={[styles.textStyle]}>
                        Этот E-mail будет использоваться входа в аккаунт
                    </Text>
                    <Edit
                        val = {email}
                        change = {changeEmail}
                        style={[styles.edit, {marginTop: 20, width: vmin(90)}]}
                        placeholders={'Ваш E-mail'}
                    />
                    <Text style={[styles.textStyle,{marginTop: 130, color: '#DA4040'}]}>{errorcode}</Text>
                    <Button
                        Style={[styles.button, {marginTop: 30, width: vmin(90)}]}
                        Press={() => EmailCodeSender()}
                        Caption={'Далее'}
                        textStyle={styles.loginTextStyle}
                    />
                    <Button
                        Style={[styles.button, {marginTop: 10, width: vmin(90)}]}
                        Press={() => props.navigation.push('Home')}
                        Caption={'Назад'}
                        textStyle={styles.loginTextStyle}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default EmailScreen
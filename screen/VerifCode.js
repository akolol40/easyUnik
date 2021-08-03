import React, {useState, useContext, useEffect} from 'react'
import styles from '../styles/styles'
import { View, SafeAreaView, KeyboardAvoidingView, Text } from 'react-native'
import Button from '../components/Button'
import Edit from '../components/Edit'
import SmallLogo from '../svg/SmallLogo'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { AuthContext } from '../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
const VerifCode = (props) => {
    const [email, changeEmail] = useState()
    const [timer, setTimer] = useState(60)
    const [dis, setdis] = useState(true)
    const [errorcode, seterrorcode] = useState('')
    const [bgButton, setbgButton] = useState('#BCBCBC')
    const [colorT, setColorT] = useState('#5B5B5B')
    useEffect(() => {
        setTimeout(() => {
            if (timer === 0) 
            {
                setTimer(0)
                setbgButton('#FFFFFF')
                setColorT('#5B5B5B')
                setdis(false)
            } else
            {
                setTimer(timer-1)
                setbgButton('#BCBCBC')
                setColorT('#5B5B5B')
                setdis(true)
            }
        }, 1000)
    }) 
    const auth = useContext(AuthContext)
    async function getEmail() { return await AsyncStorage.getItem('@email')}
    async function getCode() { return await AsyncStorage.getItem('@code')}
    const Recheck = async() => {
        setTimer(60)
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
              body: JSON.stringify({email: await getEmail(), code: code})
          })  
          let result = await response.json()
          if (result.massage === 'reg') {
            seterrorcode('Аккаунт с этим E-mail уже \n существует')
          } else if (response.ok) {
          await AsyncStorage.setItem('@code', JSON.stringify(code))
        }
        } catch(error) {
            console.log('Error:', error)
        }
    }
    const PassCheck = async() => {
        let Email = await getEmail()
        let code = await getCode()
        if (Number.parseInt(email) === Number.parseInt(code) ) {
            props.navigation.navigate("RegData")
        } else seterrorcode('Неверный код!')
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center', marginTop: vmin(4)}} behavior="padding" enabled   keyboardVerticalOffset={100}>
                <SmallLogo/>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={[styles.textHeader, {marginTop: 47.6}]}>
                        Введите код
                    </Text>
                    <Text style={[styles.textStyle]}>
                        На Ваш E-mail был отправлен {'\n'} 4х-значный код
                    </Text>
                    <Edit
                        val = {email}
                        change = {changeEmail}
                        style={[styles.edit, {marginTop: 20, width: vmin(30), textAlign: 'center'}]}
                        placeholders={'1 2 3 4'}
                        max={4}
                    />
                    <View style={{marginHorizontal: 22}}>
                    <Text style={[styles.textStyle, {opacity: '0.5'}]}>Вы можете снова запросить код через {'\n'} 00:{timer}</Text>
                    </View>
                    <Button
                        dis={dis}
                        Style={[styles.button, {width: vmin(48),  backgroundColor: bgButton, borderRadius: 15, height: 30, padding: 8, marginTop: 22}]}
                        Press={() => 
                            {
                                if (bgButton === '#FFFFFF')
                                    Recheck()
                            }}
                        Caption={'Отправить повторно'}
                        textStyle={[styles.loginTextStyle, {fontSize: 12, lineHeight: 14, color: colorT,}]}
                    />
                    <Text style={[styles.textStyle,{marginTop: 78, color: '#DA4040'}]}>{errorcode}</Text>
                    <Button
                        Style={[styles.button, {marginTop: 30, width: vmin(90)}]}
                        Press={() => PassCheck()}
                        Caption={'Далее'}
                        textStyle={styles.loginTextStyle}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default VerifCode
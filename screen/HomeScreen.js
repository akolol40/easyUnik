import React, {useState} from 'react'
import {View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Text} from 'react-native'
import * as AuthSession from 'expo-auth-session';
import Edit from '../components/Edit'
import Button from '../components/Button'
import styles from '../styles/styles'
import Logo from '../svg/Logo'
import VkLogo from '../svg/VkLogo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const HomeScreen = (props) => {
 const [login, changelogin] = useState()
 const [pass, changepass] = useState() 
 const [errorcode, seterrorcode] = useState('')
 React.useEffect(async() => {
   try {
    const vkAuth = await AsyncStorage.getItem('@vk_auth')
    const Auth = await AsyncStorage.getItem('@inAuth')
    //
    if (vkAuth) {
     ///props.navigation.navigate("Profile")
     console.log('autorization')
    }
    if (Auth) {
     props.navigation.navigate("Profile") 
    } else {
      console.log('unAutorization')
    }
   } catch(e) {
     console.log(e)
   }
 }, [])

 const VkAuth = async() => {
  let redirectUrl = AuthSession.getRedirectUrl();
  let result = await AuthSession.startAsync({
      authUrl: 'https://oauth.vk.com/authorize?client_id=7878259&display=mobile&redirect_uri=' +
      encodeURIComponent(redirectUrl) + '&response_type=token&v=5.92',
  });
  if (result.type === 'success') {
     try {
       await AsyncStorage.setItem('@vk_auth', JSON.stringify(true))
     } catch (e) {
       console.log(e)
     }
  }
 }
 const Autorization = async () => {
  const url = 'http://easyunik.ru/api/v1/'
  try
  {
    let response = await fetch(url+'login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: "cors",
        method: "POST",
        body: JSON.stringify({email: login.toLowerCase(), pwd: pass})
    })  
    
    let result = await response.json()
    if (result.status === 'error') {
      seterrorcode('Неверный логин или пароль!')
    } else if (result.message === 'ok') {
      await AsyncStorage.setItem('@email',  login.toLowerCase())
      await AsyncStorage.setItem('@token', result.token)
      await AsyncStorage.setItem('@id', result.id)
      await AsyncStorage.setItem('@inAuth', JSON.stringify(true))
      props.navigation.navigate("Profile")
    }
  } catch(error) {
      console.log('Error:', error)
  }
}
 return(
     
     <SafeAreaView style={styles.container}>
       <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center'}} behavior="padding" enabled   keyboardVerticalOffset={100}>
         <View style={styles.logo}> 
          <Logo/> 
         </View>
         <View>
            <Edit
              val = {login}
              change = {changelogin}
              style={[styles.edit, {marginBottom: 12}]}
              placeholders={'E-mail или телефон'}
            />
            <Edit
              val = {pass}
              change = {changepass}
              style={[styles.edit, {marginBottom: 25}]}
              placeholders={'Пароль'}
              pass={true}
            />
            <Button
              Style={styles.button}
              Press={() => Autorization()}
              Caption={'Войти'}
              textStyle={styles.loginTextStyle}
            />
            <Text style={styles.textStyle}>
              Забыли пароль?
            </Text>
            <Text style={[styles.textStyle,{marginTop: 25, color: '#DA4040'}]}>{errorcode}</Text>
    
            <TouchableOpacity
                style={{
                  borderRadius: 10,
                  backgroundColor: '#373A40',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#5B5B5B',
                  padding: 12,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginTop: 40
                }}
                onPress={() => VkAuth()}
            >
              <VkLogo/>
              <Text
                style={{marginLeft: 15, fontSize: 14, color: '#ffffff', lineHeight: 17, fontWeight: '600'}}
              >
                
                Войти через VK
              </Text>
            </TouchableOpacity>
            <Text
              onPress={() => {
                props.navigation.navigate("Email")
              }}
              style={styles.textStyleReg}>
              Зарегистрироваться
            </Text>
         </View>
         </KeyboardAvoidingView>
     </SafeAreaView>
 )
}


  
export default HomeScreen;
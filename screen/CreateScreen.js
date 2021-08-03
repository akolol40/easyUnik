import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../styles/styles'
import Editor from '../svg/Editor';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
const CreateScreen = (props) => {
    console.log(props)
    return (
        <View style={styles.containerScr}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                style={{
                  borderRadius: 20,
                  backgroundColor: '#FFF',
                  borderWidth: 0,
                  borderStyle: 'solid',
                  borderColor: '#5B5B5B',
                  padding: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginBottom: 18,
                  height: 40,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
            
                  elevation: 2,
                  width: 308
                }}
                onPress={() => props.props.navigation.navigate("TextEditor")}
            >
              <Editor/>
              <Text
                style={{marginLeft: 5, fontSize: 14, color: '#5B5B5B', lineHeight: 17, fontWeight: '600'}}
              >
                
                Создать публикацию
              </Text>
            </TouchableOpacity>  
            </View>
            <View style={styles.postBody}>
                <View style={{marginVertical: 25, marginHorizontal: 33}}>
                    <Text style={styles.postHeader}>
                        Вопрос-ответ на экзамен по административному праву
                    </Text>
                    <Text style={styles.postUser}>
                        dsadasdas
                    </Text>
                    <Text style={styles.postUser}>
                        ВГУ : Юридический : Юриспруденция : Административное право 
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CreateScreen
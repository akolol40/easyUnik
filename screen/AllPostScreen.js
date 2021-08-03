import React from 'react'
import {View, Text} from 'react-native'
import styles from '../styles/styles'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
const AllPostScreen = (props) => {
    return (
        <View style={styles.containerScr}>
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

export default AllPostScreen
import React, {useState, Text, ToucheB} from 'react'
import { View } from 'react-native'
import Button from './Button'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import styles from '../styles/styles'
const Accordion = (props) => {
    const [openView, setOpenView] = useState(false)
    return (
        <View>
            <Button
                Style={[styles.button, { backgroundColor: '#ffffff', borderRadius: 25}]}
                Press={() => !openView? setOpenView(true) : setOpenView(false)}
                Caption={'Тест'}
                textStyle={[styles.loginTextStyle, {color: '#5B5B5B', fontSize: 14, lineHeight: 17}]}
            />
            {openView&&
            <View style={{marginLeft: 23, marginTop: 28}}>
                {props.children}
            </View>}
        </View>
    )
}

export default Accordion

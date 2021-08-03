import React, {useState, useEffect} from 'react'
import Button from '../components/Button'
import Settings from '../svg/Settings'
import {Text, SafeAreaView, View, ScrollView} from 'react-native'
import styles from '../styles/styles'
import { LinearGradient } from 'expo-linear-gradient';
import DatasApp from '../context/DatasApp'
import CreateScreen from './CreateScreen'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import AllPostScreen from './AllPostScreen'
const Profile =  (props) => {
    const [name, setName] = useState('')
    useEffect(async() => {
        const app = await DatasApp()
        setName(app.id)
    }, [])

    const [all, setAll] = useState('white')
    const [allText, setAllText] = useState('#5B5B5B')
    const [clickAll, setClickAll] = useState(false)

    const [create, setCreate] = useState('#17C6C6')
    const [createText, setCreateText] = useState('#FFFFFF')
    const [clickCreate, setclickCreate] = useState(true)

    const [editor, setEditor] = useState('white')
    const [editorText, setEditorText] = useState('#5B5B5B')

    return (
        <SafeAreaView style={[styles.container, {alignItems: 'center', justifyContent: 'flex-start'}]}>
         <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{ alignItems: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, overflow: 'hidden' }}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#47E4E4','#17C6C6']}
                style={styles.cardBody}
            
            >
                <Text style={[styles.textStyle,{textAlign: 'left', marginLeft: 33, marginTop: 0}]}>
                    {name}
                </Text>
                <Text style={{marginRight: 33}}>
                    <Settings/>
                </Text>
            </LinearGradient>
            </View>
            <View style={{marginTop: 18, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Button
                Style={[styles.button,{height: 30, width: 66, padding: 6, borderRadius: 15, backgroundColor: all}]}
                Press={() => {
                    setAll('#17C6C6')
                    setAllText('white')

                    setCreate('white')
                    setCreateText('#5B5B5B')

                    setEditor('white')
                    setEditorText('#5B5B5B')
                    setclickCreate(false)
                    setClickAll(true)
                }}
                Caption={'Все'}
                textStyle={[styles.textStyle, {marginTop: 0, fontSize: 12, color: allText}]}
            />
            <Button
                Style={[styles.button,{height: 30, width: 117, padding: 6, borderRadius: 15, marginLeft: vmin(2), marginRight: vmin(2), backgroundColor: create}]}
                Press={() => {
                    setAll('white')
                    setAllText('#5B5B5B')

                    setCreate('#17C6C6')
                    setCreateText('white')

                    setEditor('white')
                    setEditorText('#5B5B5B')
                    setclickCreate(true)
                    setClickAll(false)
                }}
                Caption={'Созданные'}
                textStyle={[styles.textStyle, {marginTop: 0, fontSize: 12, color: createText}]}
            />
            <Button
                Style={[styles.button,{height: 30, width: 117, padding: 6, borderRadius: 15, backgroundColor: editor}]}
                Press={() => {
                    setAll('white')
                    setAllText('#5B5B5B')

                    setCreate('white')
                    setCreateText('#5B5B5B')

                    setEditor('#17C6C6')
                    setEditorText('white')
                }}
                Caption={'Редактируемые'}
                textStyle={[styles.textStyle, {marginTop: 0, fontSize: 12, color: editorText}]}
            />
            </View>
             {clickAll&&<AllPostScreen/>}       
             {clickCreate&&<CreateScreen  props={props}/>}
            </View>
        </SafeAreaView>
    )
}

export default Profile
import React, {useState} from 'react'
import styles from '../styles/styles'
import { View, SafeAreaView, KeyboardAvoidingView, Text, ScrollView, Platform } from 'react-native'
import Button from '../components/Button'
import Edit from '../components/Edit'
import SmallLogo from '../svg/SmallLogo'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import DatasApp from '../context/DatasApp'
import DropDownPicker from 'react-native-dropdown-picker';
const RegData = (props) => {
    const [name, changeName] = useState()
    const [surname, changeSurname] = useState()
    /* DropDown */        
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'ВГУ', value: 'ВГУ'},
        {label: 'ВГАУ', value: 'ВГАУ'},
      ]);
      const [openFac, setOpenFac] = useState(false);
      const [valueFac, setValueFac] = useState(null);
      const [itemsFac, setItemsFac] = useState([
          {label: 'ПММ', value: 'ПММ'},
          {label: 'Юридический', value: 'Юридический'},
          {label: 'Физический', value: 'Физический'},
        ]);
     const [openSpec, setOpenSpec] = useState(false);
     const [valueSpec, setValueSpec] = useState(null);
     const [itemsSpec, setItemsSpec] = useState([
        {label: 'Физика', value: 'Физика'},
        {label: 'Право', value: 'Право'},
        {label: 'Программная инженерия', value: 'Программная инженерия'},

      ]);
     /* end DropDown */ 
    
    const RegConfig = async () => {
        const url = 'http://easyunik.ru/api/v1/'
        const app =  await DatasApp()
        try
        {
          let response = await fetch(url+'register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              mode: "cors",
              method: "POST",
              body: JSON.stringify({email: JSON.parse(app.email), name: name, surname: surname, faculty: valueFac, Unic: value, Napr: valueSpec})
          })  
          props.navigation.navigate("ConfimPass")
        } catch(error) {
            console.log('Error:', error)
        }
    } 
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center', marginTop: vmin(4)}} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled   keyboardVerticalOffset={40}>             
                <SmallLogo/>
                <ScrollView>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={[styles.textHeader, {marginTop: 47.6, marginBottom: 60}]}>
                        Информация о Вас
                    </Text>
                    
                    <Edit
                        val = {surname}
                        change = {changeSurname}
                        style={[styles.edit, {marginTop: 0, width: vmin(90)}]}
                        placeholders={'Фамилия'}
                    />
                    <Edit
                        val = {name}
                        change = {changeName}
                        style={[styles.edit, {marginTop: 11, width: vmin(90)}]}
                        placeholders={'Имя'}
                    />
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        dropDownDirection='TOP'
                        bottomOffset={100}
                        listMode="SCROLLVIEW"
                        dropDownContainerStyle={{backgroundColor: '#42454D', borderColor: '#5B5B5B', borderRadius: 10}}
                        placeholder={'Учебное заведение'}
                        style={[styles.edit, {width: vmin(90), marginTop: 11}]}
                        textStyle={{opacity: 0.5, fontSize: 14,lineHeight: 17, color: 'white'}}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                    <DropDownPicker
                        open={openFac}
                        value={valueFac}
                        items={itemsFac}
                        dropDownDirection='TOP'
                        bottomOffset={100}
                        listMode="SCROLLVIEW"
                        dropDownContainerStyle={{backgroundColor: '#42454D', borderColor: '#5B5B5B', borderRadius: 10}}
                        placeholder={'Факультет'}
                        style={[styles.edit, {width: vmin(90), marginTop: 11}]}
                        textStyle={{opacity: 0.5, fontSize: 14,lineHeight: 17, color: 'white'}}
                        setOpen={setOpenFac}
                        setValue={setValueFac}
                        setItems={setItemsFac}
                    />
                    <DropDownPicker
                        open={openSpec}
                        value={valueSpec}
                        items={itemsSpec}
                        dropDownDirection='TOP'
                        bottomOffset={100}
                        listMode="SCROLLVIEW"
                        dropDownContainerStyle={{backgroundColor: '#42454D', borderColor: '#5B5B5B', borderRadius: 10}}
                        placeholder={'Специальность'}
                        style={[styles.edit, {width: vmin(90), marginTop: 11}]}
                        textStyle={{opacity: 0.5, fontSize: 14,lineHeight: 17, color: 'white'}}
                        setOpen={setOpenSpec}
                        setValue={setValueSpec}
                        setItems={setItemsSpec}
                    />
                
                    <Button
                        Style={[styles.button, {marginTop: 30, width: vmin(90)}]}
                        Press={() => RegConfig()}
                        Caption={'Далее'}
                        textStyle={styles.loginTextStyle}
                    />
                </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default RegData
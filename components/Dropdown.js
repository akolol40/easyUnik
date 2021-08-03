import React, {useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
export const Dropdown = ({stl, caption, itm, opn, stpop, setitm}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
      ]);
  console.log(itm)
    return (
      <DropDownPicker
        open={opn}
        value={value}
        items={items}
        dropDownDirection='AUTO'
        bottomOffset={100}
        listMode="SCROLLVIEW"
        dropDownContainerStyle={{backgroundColor: '#42454D', borderColor: '#5B5B5B', borderRadius: 10}}
        placeholder={caption}
        style={[stl, {width: vmin(90), marginTop: 11}]}
        textStyle={{opacity: 0.5, fontSize: 14,lineHeight: 17, color: 'white'}}
        setOpen={stpop}
        setValue={setValue}
        setItems={setItems}
      />
    );
};
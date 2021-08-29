import { View, SafeAreaView,Text, TextInput, TouchableOpacity } from "react-native";
import styles from '../styles/styles'
import React, {useState} from 'react'
import Detail from '../svg/Detail'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import Button from '../components/Button'
import AddBtn from '../svg/AddBtn'
import Accordion from "../components/Accordion";
import { LinearGradient } from 'expo-linear-gradient';

const TextEditor = (props) => {
    const [state, setState] = useState({})
    const [elementList , setElementList] = useState([])
    const createElement = () => {
    let components = [...elementList]
    components.push(
    <View style={{marginTop: 11}}>
        <Accordion
        >
        <View>
        <TextInput
            multiline={true}
            style={{fontSize: 14,lineHeight: 17, color: '#737373'}}
            placeholder="Вы можете писать прямо здесь либо добавить вкладки и писать вних, это удобно например при составлении вопрос-ответа."
            numberOfLines={4}
            onChangeText={(text) => setState({text})}
            value={state.text}/>
        </View>
        </Accordion>
    </View>)
    setElementList(components)
    }
    const RenderElement = () => elementList.map((value) => value)
    
    return(
    <SafeAreaView style={[styles.container, {alignItems: 'center', justifyContent: 'flex-start'}]}>
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <View style={{ alignItems: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, overflow: 'hidden' }}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#47E4E4','#17C6C6']}
                style={styles.cardBody}
            
            >
                <Text style={[styles.textStyle,{textAlign: 'left', marginLeft: 33, marginTop: 0}]}>
                    'k'
                </Text>
                <Text style={{marginRight: 33}}>
                    <Detail/>
                </Text>
            </LinearGradient>
            </View>

            {RenderElement()}

            <View style={{position: 'absolute', bottom: 0, right: 0, zIndex: 9999}}>
            <TouchableOpacity style={{borderRadius: 37, borderWidth: 10, borderColor: 'white', marginBottom: 36, marginRight: 46,  shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.1,
                shadowRadius: 2,
            
                elevation: 2,}}
                
                onPress={() => setOpen(true)}
                >
                <Text style={{backgroundColor: 'white' }}>
                    <AddBtn/>
                </Text>
                </TouchableOpacity>
                
            </View>
            <View style={{ position: 'absolute', alignItems: 'flex-end',bottom: 0, width: vmin(100)}}>
            <View style={{ alignItems: 'center', borderTopRightRadius: 25, borderTopLeftRadius: 25, overflow: 'hidden' }}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#47E4E4','#17C6C6']}
                    style={styles.cardBody}
                
                >
                <View style={{marginLeft: 33, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{borderRadius: 37, borderWidth: 10, borderColor: 'white', shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                
                    elevation: 2,}}
                    
                    onPress={() => createElement()}
                    >
                    <Text style={{backgroundColor: 'white' }}>
                        <AddBtn/>
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius: 37, borderWidth: 10, marginLeft: 40, borderColor: 'white', shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                
                    elevation: 2,}}
                    
                    onPress={() => createElement()}
                    >
                    <Text style={{backgroundColor: 'white' }}>
                        <AddBtn/>
                    </Text>
                    </TouchableOpacity>
                </View>
                </LinearGradient>
                </View>
            </View>
            </View>
 
    </SafeAreaView>
    )
}

export default TextEditor
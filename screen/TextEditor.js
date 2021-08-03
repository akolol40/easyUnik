import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform
} from "react-native";
import Detail from "../svg/Detail";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import KeyboardSpacer from "react-native-keyboard-spacer";
import RNDraftView from "react-native-draftjs-editor";
import stl from "../styles/styles";
import * as Print from 'expo-print';
import * as Sharing from "expo-sharing";
import { LinearGradient } from 'expo-linear-gradient';
import DatasApp from "../context/DatasApp";
import AddBtn from "../svg/AddBtn";
const ControlButton = ({ text, action, isActive }) => {
    return (
      <TouchableOpacity
        style={[
          styles.controlButtonContainer,
          isActive ? { backgroundColor: "gold" } : {backgroundColor: 'white'},
          {borderRadius: 20, borderWidth: 5, borderColor: 'white',  paddingHorizontal: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2,
    
          elevation: 2,}
        ]}
        onPress={action}
      >
        <Text style={{color:'#17C6C6',  fontSize: 20, }}>{text}</Text>
      </TouchableOpacity>
    );
  };
   
  const EditorToolBar = ({
    activeStyles,
    blockType,
    toggleStyle,
    toggleBlockType
  }) => {
    return (
      <View style={{backgroundColor: 'white'}}>
      <View style={[styles.toolbarContainer, {backgroundColor: '#17C6C6', borderTopRightRadius: 25, borderTopLeftRadius: 25, height: 113}]}>
        <ControlButton
          text={"B"}
          isActive={activeStyles.includes("BOLD")}
          action={() => toggleStyle("BOLD")}
        />
        <ControlButton
          text={"I"}
          isActive={activeStyles.includes("ITALIC")}
          action={() => toggleStyle("ITALIC")}
        />
        <ControlButton
          text={"H"}
          isActive={blockType === "header-one"}
          action={() => toggleBlockType("header-one")}
        />
        <ControlButton
          text={"ul"}
          isActive={blockType === "unordered-list-item"}
          action={() => toggleBlockType("unordered-list-item")}
        />
        <ControlButton
          text={"ol"}
          isActive={blockType === "ordered-list-item"}
          action={() => toggleBlockType("ordered-list-item")}
        />
        <ControlButton
          text={"--"}
          isActive={activeStyles.includes("STRIKETHROUGH")}
          action={() => toggleStyle("STRIKETHROUGH")}
        />
      </View>
      </View>
    );
  };
   
  const styleMap = {
    STRIKETHROUGH: {
      textDecoration: "line-through"
    }
  };
   
  const TextEditor = (props) => {
    const _draftRef = React.createRef();
    const [activeStyles, setActiveStyles] = useState([]);
    const [blockType, setActiveBlockType] = useState("unstyled");
    const [editorState, setEditorState] = useState("");
    const [name, setname] = useState('')
    const [open, setOpen] = useState(false)
    const defaultValue =
      "<h1>Заголовок</p>";
    
    const getName = async() => {
      const app = await DatasApp()
      setname(app.id)
    }
    const editorLoaded = () => {
      _draftRef.current && _draftRef.current.focus();
    };
   
    const toggleStyle = style => {
      _draftRef.current && _draftRef.current.setStyle(style);
    };
   
    const toggleBlockType = blockType => {
      _draftRef.current && _draftRef.current.setBlockType(blockType);
    };
    const CreatePdf = async (html) => {
      try {
        const { uri } = await Print.printToFileAsync({ html });
        if (Platform.OS === "ios") {
          await Sharing.shareAsync(uri);
        } else {
          const permission = await MediaLibrary.requestPermissionsAsync();
    
          if (permission.granted) {
            await MediaLibrary.createAssetAsync(uri);
          }
        }
    
      } catch (error) {
        console.error(error);
      }
    };
    

    const getUri = async () => {
      const url = await CreatePdf(editorState)
    }
    useEffect(() => {
      /**
       * Get the current editor state in HTML.
       * Usually keep it in the submit or next action to get output after user has typed.
       */
      getName()
      
      setEditorState(_draftRef.current ? _draftRef.current.getEditorState() : "");
    }, [_draftRef]);
  
   
    return (
      <SafeAreaView style={styles.containerStyle}>
              <View style={{backgroundColor: '#fff'}}>
            <View style={{ alignItems: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, overflow: 'hidden' }}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#47E4E4','#17C6C6']}
                style={stl.cardBody}
            
            >
                <Text style={[stl.textStyle,{textAlign: 'left', marginLeft: 33, marginTop: 0}]}>
                    {name}
                </Text>
                <Text style={{marginRight: 10}}>
                    <Detail/>
                </Text>
            </LinearGradient>
            </View>
            <View style={{marginLeft: 33, flexDirection: 'row'}}>
            <Text onPress={() => props.navigation.navigate('Profile')} style={[stl.textStyle, {color: '#17C6C6', textAlign: 'left', 
            fontWeight: '600', lineHeight: 15, fontSize: 12}]}>
              Назад 
            </Text>
            <Text onPress={() => getUri()} style={[stl.textStyle, {color: '#17C6C6', textAlign: 'left', 
            fontWeight: '600', lineHeight: 15, fontSize: 12, marginLeft: 10}]}>
              Поделиться 
            </Text>
            </View>
            </View>
        <RNDraftView
          defaultValue={defaultValue}
          onEditorReady={editorLoaded}
          style={{ flex: 1, marginTop: 0 }}
          placeholder={"Add text here..."}
          ref={_draftRef}
          onStyleChanged={setActiveStyles}
          onBlockTypeChanged={setActiveBlockType}
          styleMap={styleMap}
        />
        <View style={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'center', width: vmin(100)}}>
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
        </View>
        {open&&<EditorToolBar
          activeStyles={activeStyles}
          blockType={blockType}
          toggleStyle={toggleStyle}
          toggleBlockType={toggleBlockType}
        />}
        
      </SafeAreaView>
    );
  };
   
  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: '#373A40',
    },
    toolbarContainer: {
      height: 56,
      flexDirection: "row",
      backgroundColor: "silver",
      alignItems: "center",
      justifyContent: "space-around"
    },
    controlButtonContainer: {
      padding: 8,
      borderRadius: 2
    }
  });

export default TextEditor
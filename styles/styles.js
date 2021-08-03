import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
const styles = StyleSheet.create({
    container: {
      //373A40
      flex: 1,
      backgroundColor: '#373A40',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerScr: {
     marginTop: 18

    },
    postBody: {
      justifyContent: 'flex-start', 
      width: vmin(100),
      borderRadius: 25,
      backgroundColor: 'white',
      marginBottom: 18,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,

      elevation: 2,
    },
    postHeader: {
      color: '#5B5B5B',
      fontSize: 14,
      fontWeight: 'normal',
      fontWeight: 'bold',
      lineHeight: 17
    },
    postUser: {
      color: '#5B5B5B',
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 15,
      marginTop: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#17C6C6",
        borderRadius: 10,
       // height: 40,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
  
        elevation: 2,
      },
    loginTextStyle: {
      fontSize: 14,
      lineHeight: 17,
      fontWeight: "600",
      fontStyle: 'normal',
      color: '#ffffff'
    },
    logo: {
      alignItems: 'center',
     // marginTop: vmin(18),
      marginBottom: 52.6
    },
    edit: {
      width: vmin(82),
      height: 41,
      borderWidth: 0.5,
      
      borderColor: '#5B5B5B',
      borderRadius: 10,
      backgroundColor: '#42454D',
      fontSize: 14,
      padding: 12,
      borderStyle: 'solid',
      lineHeight: 17,
      color: '#ffffff',
      //outlineStyle: 'none'
    },
    textStyle: {
      fontSize: 14,
      lineHeight: 17,
      fontStyle: 'normal',
      fontWeight: 'normal',
      color: '#FFFFFF',
      marginTop: 16,
      textAlign: 'center'
    },
    textStyleReg: {
      fontSize: 14,
      lineHeight: 17,
      fontStyle: 'normal',
      fontWeight: 'normal',
      color: '#FFFFFF',
      marginTop: 16,
      textAlign: 'center',
      fontWeight: '600' 
    },
    textHeader: {
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center', 
      color: '#FFFFFF'
    }, 
    cardBody: {
      width: vmin(100),
      paddingVertical: vmin(6),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: -9,
        height: 9,
      },
      shadowOpacity: 0.1,
      shadowRadius: 30,

      elevation: 9,
    }
});

export default styles
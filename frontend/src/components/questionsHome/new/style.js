import { StyleSheet } from 'react-native';
import { COLORS, WINDOW } from '../../../common/globals';

export const styles = StyleSheet.create({

    modalWrap:{
        position: "absolute",
        top:80,
        left:5,
        width:WINDOW.width-10,
        backgroundColor:'#fff',
        borderRadius: 10,
        borderWidth:1,
        overflow:'hidden',
        padding:20,
        paddingTop:30,
        paddingBottom:30
    },

});
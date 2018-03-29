import { StyleSheet } from 'react-native';

import {COLORS,WINDOW} from '../../common/globals';

export const styles = StyleSheet.create({
    editBtnTouch:{
        width:100, 
        alignSelf:'center', 
    }, 
    editBtn:{
        backgroundColor:COLORS.appColor, 
        textAlign: 'center', 
        color:'#fff', 
        paddingTop:5, 
        paddingBottom:5 
    },
    listContentWrap:{ 
        width:'100%', 
        backgroundColor:'#ddd', 
        paddingTop:15, 
        paddingBottom:15 
    },
    modalWrap:{
        position: 'absolute',
        top:25,
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
    updateModalBtnWrap:{
        width:'100%',
        marginTop:10,
        display:'flex',    
        flexDirection: 'row',
        alignItems: 'center'
    },
    updateModalBtn:{
        alignSelf:'center',
        flex:1,
        borderWidth:1,
        borderColor: COLORS.appColor,
        backgroundColor:'#fff',
        borderRadius:4,
        padding:10,
        margin: 5
    },
    updateModalBtnText:{
        color:COLORS.appColor,
        textAlign:'center'
    }
});
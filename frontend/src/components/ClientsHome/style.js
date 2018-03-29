import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS, WINDOW } from '../../common/globals';

export const styles = StyleSheet.create({

    newTechBtnWrap:{
        marginTop:10,
        paddingLeft:15,
        paddingRight:15,
        width:'50%'
    },
    modalWrap:{
        position: "absolute",
        top:60,
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
    modalBtnSaveWrap:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:20,
        justifyContent: 'space-between'        
    },
    updateModalBtn:{
        padding:10,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:COLORS.appColor,
        borderRadius:4,
        width:'45%'
    },
    updateModalBtnText:{
        textAlign: 'center',
        fontWeight: '600'
    },
    techListWrap:{
        backgroundColor:'#fff',
        marginTop:20
    },
    clientListItemWrap:{
        backgroundColor:'#fff',
        padding:10,
        borderBottomWidth:1,
        borderColor:'#e8e8e8',
        display:'flex',
        flexDirection:'row'
    },
    clientListItemText:{
        fontSize: 17,
        textAlign: 'center',
        color:'#333'
    },
    clientListItemContentWrap:{
        backgroundColor:'#f5f5f5',
        padding:10,
        borderBottomWidth:1,
        borderColor:'#e8e8e8',
        flexDirection: 'row',
        alignItems: 'center'
    },
    clientListItemContentEle:{
        padding:10,     
        flex:1,
        alignItems: 'center'
    },
    clientListItemContentText:{
        textAlign:'center',
        borderWidth:1,
        borderColor:COLORS.appColor,
        padding:5,
        width:100
    }
});
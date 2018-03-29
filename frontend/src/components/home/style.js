import { StyleSheet } from 'react-native';

import { COLORS, WINDOW } from '../../common/globals'

const styles = StyleSheet.create({

    root:{
        position: 'relative',
        backgroundColor:COLORS.appColor,
        height:WINDOW.height
    },
    headWrap:{
        height: 300,
        width:'100%'
    },
    heading:{
        textAlign:'center',
        color:'#fff',
        fontSize:30,
        marginTop: 100
    },
    bannerWrap:{
        position: 'absolute',
        left: 0, 
        top: WINDOW.height - 177, 
        width: WINDOW.width,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderColor: '#4285F4'
    },
    bannerImg:{
        width:'100%',
        height:120
    },
    btnWrap:{
        position: 'absolute',
        height: 40,
        left: 0, 
        top: WINDOW.height - 47, 
        width: WINDOW.width,
        display:'flex',
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnNav:{
        flex:1
    },
    btnView:{
        width:'100%'
    },
    btnTxt:{
        width:'100%',
        padding: 15,
        color: COLORS.appColor,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 19,
        borderColor: '#FFFFFF'
    }

});

export default styles;
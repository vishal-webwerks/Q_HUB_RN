import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import {WINDOW, COLORS} from '../globals';

const AdminPageWrap = (props) => {

    return (
        <View style={styles.rootStyle}>
            <View style={styles.pageHeadWrap}>
                <Text style={styles.pageHeading}>{props.title}</Text>
            </View>    
            {props.children}
        </View>   
    );

}

const styles = StyleSheet.create({

    rootStyle:{
        position: 'relative',
        height:WINDOW.height,
        width: WINDOW.width,
        paddingBottom:80,
        flex: 1
    },
    pageHeadWrap:{
        width:'100%',
        backgroundColor: COLORS.appColor,
        padding: 20
    },
    pageHeading:{
        fontSize: 19,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop:10,
        fontWeight: "700"
    }

});

export { AdminPageWrap };
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import {COLORS} from '../globals';

const AppButton = ({title, onBtnPress=()=>{}}) => {

    const { btnStyle } = styles;

    return (
        <View style={btnStyle}>
            <Button
                title={title}
                onPress={onBtnPress} 
            />
        </View>    
    )

}

var styles = StyleSheet.create({
    btnStyle:{
        borderWidth:2,
        borderRadius: 5,
        borderColor:COLORS.appColor,
        backgroundColor: '#fff'        
    }
});

export { AppButton };
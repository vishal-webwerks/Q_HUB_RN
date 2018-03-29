import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import {COLORS} from '../globals';

const Spinner = ({ size, style }) => {

    return (
        <View style={[styles.spinnerStyle, style]}>
            <ActivityIndicator size={size || 'large'}/>
        </View>    
    );

}

const styles = {
    spinnerStyle: {
        width: '100%',
        borderWidth:2,
        borderRadius: 5,
        borderColor:COLORS.appColor,
        backgroundColor: '#fff'
    }
};

export { Spinner };

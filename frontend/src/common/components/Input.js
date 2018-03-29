import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({label, value="", onChangeText={}, multiline=false, numberOfLines=1, autoCapitalize="none", secureText=false}) => {
    return (
        <View>
            <Text style={{backgroundColor:'#fff'}}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={numberOfLines}
                autoCapitalize={autoCapitalize}
                style={{minHeight: 25, width: '100%', height: multiline ? 25*numberOfLines : 25, borderBottomWidth:1, borderBottomColor:'#ddd'}} 
                secureTextEntry={secureText}
            />
        </View>    
    )
}
export { Input };
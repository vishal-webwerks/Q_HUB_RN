import { Dimensions } from 'react-native';

export const API_URL = "http://localhost:8088/api/";
export const WINDOW = Dimensions.get('window');

export const COLORS = {
    appColor:'#5792f2'
}

export const STYLES = {
    rootStyle:{
        position: 'relative',
        height:WINDOW.height,
        width: WINDOW.width,
        paddingBottom:80,
    }
}
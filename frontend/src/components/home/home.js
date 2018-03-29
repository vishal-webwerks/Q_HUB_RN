import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableHighlight, Image } from 'react-native';
import { NavigationActions } from 'react-navigation'

import styles from './style';

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.navigate = this.navigate.bind(this);

    }

    navigate(menu){
        switch(menu){
            case 'register': this.props.navigation.navigate('register'); break;
            case 'login': this.props.navigation.navigate('login'); break;
        }        
    }

    render(){
        return (
            <View style={styles.root}>
                <View style={styles.headWrap}>
                    <Text style={styles.heading}>Interview Q-Hub</Text>
                </View>
                {/* <View style={styles.bannerWrap}>
                    <Image source={require('../../assets/img/banner.jpg')} style={styles.bannerImg}/>
                </View> */}
                <View style={styles.btnWrap}>                
                    <TouchableHighlight onPress={() => { this.navigate('login') }} style={styles.btnNav}> 
                        <View style={styles.btnView}>   
                            <Text style={styles.btnTxt}>Login</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.navigate('register') }} style={styles.btnNav}> 
                        <View style={styles.btnView}>   
                            <Text style={styles.btnTxt}>Register</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )        
    }

} 
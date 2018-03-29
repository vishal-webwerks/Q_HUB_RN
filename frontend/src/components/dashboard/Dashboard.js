import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import QuestionsHome from '../questionsHome/QuestionsHome';
import NewQuestion from '../questionsHome/new/NewQuestion';
import TechnologyHome from '../technologyHome/TechnologyHome';
import EmpHome from '../EmpHome/EmpHome';
import ClientsHome from '../ClientsHome/ClientsHome';
import { WINDOW, COLORS } from '../../common/globals';

const DashboardNav = TabNavigator({
    questionsHome: {
        screen: QuestionsHome,
        navigationOptions:{
            tabBarLabel: 'Questions'
        }
    },
    clientHome: {
        screen: ClientsHome,
        navigationOptions:{
            tabBarLabel: 'Clients'
        }
    },
    technologyHome: {
        screen: TechnologyHome,
        navigationOptions:{
            tabBarLabel: 'Technology'
        }
    },
    empHome: {
        screen: EmpHome,
        navigationOptions:{
            tabBarLabel: 'Employee'
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'rgba(255,255,255,.6)',
        labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            paddingBottom:15
        },
        style: {
            backgroundColor: COLORS.appColor,
            borderTopColor: 'transparent',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0
        }
    },
    initialRouteName: 'questionsHome',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    navigationOptions: ({ navigation }) => ({
        tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
            const { route, focused, index } = scene;
            if (!focused) {
                navigation.navigate(route.routeName, { trigger: 'update' });
            }
        }
    })
}, []); 

class Dashboard extends Component{
    render(){
        return(
            <View style={{height:WINDOW.height, width:WINDOW.width}}>
                <DashboardNav/>
            </View>
        )
    }
}

export default Dashboard;
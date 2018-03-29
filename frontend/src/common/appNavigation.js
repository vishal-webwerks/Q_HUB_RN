import React from 'react';
import { StackNavigator } from 'react-navigation';

import Register from '../components/register/register';
import Login from '../components/login/login';
import Dashboard from '../components/dashboard/Dashboard';
import Home from '../components/home/home';

const AppNavigation = StackNavigator({
    home: {
      screen: Home,
      navigationOptions:{
        header: null
      }      
    },
    register: {
        screen: Register,
        navigationOptions:{
            title:'Register'
        }
    },
    login: {
        screen: Login,
        navigationOptions:{
            title:'Login'
        }
    },
    dashboard: {
        screen: Dashboard,
        navigationOptions:{
          header: null
        }
    }               
},
{
  mode: 'card'
});  

export default AppNavigation;
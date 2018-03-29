import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

import QueList from './QueList';
import New_Question from './new/NewQuestion';
import AnswersHome from './answers/AnswersHome';

const QuestionsHome = StackNavigator({
    queList: {
      screen: QueList,
      navigationOptions:{
        header: null
      }      
    },
    newQuestion: {
        screen: New_Question,
        navigationOptions:{
            title: 'New Question'
        }      
    },
    answersHome: {
        screen: AnswersHome,
        navigationOptions:{
            title: 'Answers'
        }      
    }      
},
{
  mode: 'card'
});  
export default QuestionsHome;
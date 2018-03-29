import React, { Component } from 'react';
import { View, Text, FlatList, Modal, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AdminPageWrap, AppButton, Dropdown, Input } from '../../../common/components';
import { queList, saveAns } from '../../../redux/actions/QuestionHomeAction';
import { COLORS } from '../../../common/globals';

class AnswersHome extends Component{

    constructor(props){
        super(props);

        this.state = {
            queInfo: this.props.navigation.state.params.queInfo,
            answerModal: {
                visible: false,
                answer: ''
            },
            newAnsModal: {
                visible: false,
                answer: ''
            }
        }
    }

    _showHideModal = (item) => {
        let answerState = { ...this.state.answerModal, visible: true, answer: item.answer };
        this.setState({
            answerModal: answerState
        })
    }

    _showNewAnsModal = (item) => {
        let answerState = { ...this.state.newAnsModal, visible: true, answer: '' };
        this.setState({
            newAnsModal: answerState
        })
    }

    _hideAnswerModal = () => {
        let answerState = { ...this.state.answerModal, visible: false };
        this.setState({
            answerModal: answerState
        })
    }

    _hideNewAnswerModal = () => {
        let answerState = { ...this.state.newAnsModal, visible: false };
        this.setState({
            newAnsModal: answerState
        })
    }

    newAnsVal = (value) => {
        let answerState = { ...this.state.newAnsModal, answer: value };
        this.setState({
            newAnsModal: answerState
        })
    }

    _save = () => {
        let data = {
            employee_id: this.props.auth.user_info._id,
            question_id: this.state.queInfo._id,
            answer: this.state.newAnsModal.answer
        }
        this.props.saveAns(data);
    }

    render(){
        return (
            <View>
                <View style={{ display:'flex', backgroundColor:'#fff', padding:10, borderBottomWidth:1, borderBottomColor:'#ddd', marginBottom:10 }}>
                    <Text>Q. {this.state.queInfo.question}</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row', padding:10}}>
                    <View style={{flex:1, borderWidth:1, borderColor: COLORS.appColor, marginRight:5}}>
                        <Button
                        onPress={()=>{  }}
                        title="Edit"
                        />
                    </View>
                    <View style={{flex:1, borderWidth:1, borderColor: COLORS.appColor, marginLeft:5}}>
                        <Button
                        onPress={()=>{ this._showNewAnsModal() }}
                        title="New Answer"
                        />
                    </View>
                </View>
                <View style={{ display:'flex', backgroundColor:'#fff', padding:10, borderBottomWidth:1, borderBottomColor:'#ddd', marginBottom:10 }}>
                    <Text>Answers ({ this.state.queInfo.answers.length })</Text>
                </View>
                <View style={{ padding:15, marginTop:20, display:'flex', backgroundColor:'#ddd', flexDirection:'row', flexWrap: 'wrap', alignItems:'center', justifyContent:'center' }}>
                    {
                        this.state.queInfo.answers.map((item, index)=>{
                            return (   
                                <TouchableOpacity onPress={()=>{ this._showHideModal(item) }}>
                                    <View style={{padding:5, backgroundColor:'#fff', width:100, marginRight:10, marginBottom:5}}>
                                        <Text style={{textAlign: 'center'}}>Show Ans-{ index+1 }</Text>
                                    </View>                              
                                </TouchableOpacity>                             
                            )
                        })
                    }
                    
                </View>
                <Modal
                    visible={this.state.answerModal.visible}
                    animationType={'slide'}
                >
                    <View style={{flex:1, padding:20, paddingTop:40, backgroundColor:'#fff'}}>
                        <View>
                            <Text style={{padding:10, backgroundColor:'#ddd'}}>Q. {this.state.queInfo.question}</Text>
                            <Text style={{padding:10}}>=> {this.state.answerModal.answer}</Text>
                        </View>
                        <View style={{borderTopWidth:1, borderTopColor:'#ddd', marginTop:10}}>
                            <Button
                                onPress={()=>{ this._hideAnswerModal() }}
                                title="Close"
                            />
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={this.state.newAnsModal.visible}
                    animationType={'slide'}
                >
                    <View style={{flex:1, padding:20, paddingTop:40, backgroundColor:'#fff'}}>
                        <View>
                            <Text style={{padding:10, backgroundColor:'#ddd'}}>Q. {this.state.queInfo.question}</Text>
                        </View>
                        <View style={{padding:20}}>
                            <Input label="Answer" value={this.state.newAnsModal.answer} multiline = {true}
         numberOfLines = {4} onChangeText={value=>{ this.newAnsVal(value) }}/> 
                        </View>
                        <View style={{display:'flex', flexDirection:'row', borderTopWidth:1, borderTopColor:'#ddd', marginTop:10, paddingTop:20, paddingBottom: 20}}>
                            <View style={{flex:1}}>
                                <Button
                                    onPress={()=>{ this._hideNewAnswerModal() }}
                                    title="Close"
                                />
                            </View>
                            <View style={{flex:1}}>
                                <Button
                                    onPress={()=>{ this._save() }}
                                    title="Save"
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    const { que_list }  = state.questionData;
    const { client_list } = state.clientData;
    const { technology_list } = state.technologyData;
    const { auth } = state.loginData;
    return { que_list, client_list, technology_list, auth };    
}
export default connect(mapStateToProps, { saveAns })(AnswersHome);
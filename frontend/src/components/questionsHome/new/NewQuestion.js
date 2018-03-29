import React, { Component } from "react";
import { Text, View, FlatList, Alert } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import { COLORS, WINDOW, STYLES } from "../../../common/globals";
import { AdminPageWrap, AppButton, Dropdown, Input, Spinner } from "../../../common/components";

import { clientList } from "../../../redux/actions/ClientsHomeAction";
import { techList } from "../../../redux/actions/TechnologyHomeAction";
import { questionPropSet, questionsSave, newQueReset } from "../../../redux/actions/QuestionHomeAction";
import { styles } from "./style";


class New_Question extends Component{

    constructor(props){
        super(props);

        this.state = {
            modal_visibility:false
        }  
    }

    componentWillMount(){
        this.props.clientList();
        this.props.techList();
    }  

    _questionPropSet = ({prop, value}) => {  
        this.props.questionPropSet({ prop, value });
    }  

    _keyExtractor = (item, index) => index;

    _renderQuestions = (item) => {
        item = item.item;
        return (
            <View style={{display:'flex'}}>
                <Text style={{padding:5, paddingTop:10, paddingBottom:10, marginBottom:5, borderBottomWidth:1, borderBottomColor:'#f5f5f5', backgroundColor:'#fff'}}>{item.question}</Text>
            </View>
        )
    }

    _tempQueAdd = () => {
        
        this._toggleModal(false);

        var arr = this.props.temp_que_list;
        arr.push({
            question:this.props.temp_que,
            answer:this.props.temp_ans
        });

        this._questionPropSet({prop:'temp_que_list', value:arr});      
    }

    _toggleModal = (status) => {   
        this.setState({
            modal_visibility:status
        });
    }

    _saveQuestion = () => {
        const { client_id, technology_id, temp_que_list, employee_id } = this.props;
        this.props.questionsSave({ client_id, technology_id, employee_id: this.props.auth.user_info._id, temp_que_list });
    }

    _saveBtnRender = () => {

        if(this.props.save_btn_loading){
            return <Spinner size="large" style={{flex:1}}/>
        }

        return (
            <View style={{padding:15}}>
                <AppButton title="Save" onBtnPress={()=>{ this._saveQuestion() }}/>
            </View>
        )

    }    

    render(){        

        var modal_show = (this.state.modal_visibility) ? "flex" : "none";

        return(
            <View style={[{  }, STYLES.rootStyle]}>
                <View style={{ marginTop:20 }}>
                    <Dropdown listItems={this.props.client_list} prompt="Select Client" uniqueKey="_id" keyName="client_id" text="client_name" key="1" onDropdownChange={this._questionPropSet} />
                </View>
                <View style={{ marginTop:5 }}>
                    <Dropdown listItems={this.props.technology_list} prompt="Select Technology" uniqueKey="_id"  keyName="technology_id" text="technology_name" key="2" onDropdownChange={this._questionPropSet} />
                </View>
                <View style={{padding:15}}>
                    <View style={{width:180, marginBottom:10}}>
                        <AppButton title="Add Question" onBtnPress={()=>{ this._toggleModal(true) }}/>
                    </View>
                    <View style={{height:270, backgroundColor:"#ddd", padding:10 }}>
                        {
                            (this.props.temp_que_list.length==0) ? (
                                <Text>No Question Added Yet</Text>
                            ) : (
                                <FlatList
                                    data={this.props.temp_que_list}
                                    extraData={this.state}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this._renderQuestions}
                                />
                            )
                        }
                    </View>
                </View>
                {this._saveBtnRender()}
                <View style={[styles.modalWrap, {display:modal_show}]}>
                    <View>
                        <Input label="Question" value={this.props.temp_que} onChangeText={value=>{ this._questionPropSet({prop:'temp_que', value}) }}/>                        
                    </View>
                    <View style={{marginTop:20}}>
                        <Input label="Answer" value={this.props.temp_ans} multiline={true} numberOfLines={4} onChangeText={value=>{ this._questionPropSet({prop:'temp_ans', value}) }}/>
                    </View>
                    <View style={{marginTop:20, display:'flex', flexDirection:'row'}}>
                        <View style={{flex:1, padding:5}}>
                            <AppButton title="Add" onBtnPress={()=>{ this._tempQueAdd() }}/>
                        </View>
                        <View style={{flex:1, padding:5}}>
                            <AppButton title="Cancel" onBtnPress={()=>{ this._toggleModal(false) }}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

const mapStateToProps = (state) => {

    const { client_list } = state.clientData;
    const { technology_list } = state.technologyData;
    const { temp_que_list, temp_que, temp_ans, save_btn_loading, save_success_msg, save_error_msg, client_id, technology_id } = state.questionData;
    const { auth } = state.loginData;

    return { client_list, technology_list, temp_que_list, temp_que, temp_ans, save_btn_loading, save_success_msg, save_error_msg, client_id, technology_id, auth };
}
export default connect(mapStateToProps, { clientList, techList, questionPropSet, questionsSave, newQueReset })(New_Question);
import React  from 'react';
import { View, Text, FlatList, Modal, Button, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AdminPageWrap, AppButton, Dropdown } from '../../common/components';
import { queList } from '../../redux/actions/QuestionHomeAction';
import { COLORS } from '../../common/globals';

class QueList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            modalVisible: false,
            technologyFilterVal: '',
            clientFilterVal: ''
        }
    }

    componentWillMount(){
        this.props.queList();
    }

    _keyExtractor = (item, index) => index;

    _renderQuestionsList = ({ item })=> {
        return (
            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('answersHome', { queInfo: item }) }}>
                <View style={{borderBottomWidth:1, borderColor:'#f5f5f5', backgroundColor:"#fff", display:'flex', flexDirection:'row', padding:10}}>
                    <Icon name="keyboard-arrow-right" size={22}/>
                    <Text style={{backgroundColor:'#fff', paddingTop:5}}>                    
                        {item.question}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    technologyFilterSet = ({prop, value}) => {
        this.setState({
            technologyFilterVal: value
        })
    }

    clientFilterSet = ({prop, value}) => {
        this.setState({
            clientFilterVal: value
        })
    }

    _filterModal = (status) => {
        this.setState({
            modalVisible: status
        })
    }

    render(){

        var queList = this.props.que_list;
        var techPromp = "Select Technology";
        var clientPrompt = "Select Client";

        if(this.state.technologyFilterVal!=''){
            queList = queList.filter((item)=>{
                if(item.technology_id===this.state.technologyFilterVal){
                    this.props.technology_list.map((ele)=>{
                        if(ele._id===item.technology_id){
                            techPromp = ele.technology_name;
                            console.log('prompt', techPromp);
                        }
                    });
                }
                return item.technology_id===this.state.technologyFilterVal ? true : false;
            })
        }
        if(this.state.clientFilterVal!=''){
            queList = queList.filter((item)=>{
                if(item.client_id===this.state.clientFilterVal){
                    this.props.client_list.map((ele)=>{
                        if(ele._id===item.client_id){
                            clientPrompt = ele.client_name;
                        }
                    });
                }
                return item.client_id===this.state.clientFilterVal ? true : false;
            })
        }
        

        return (
            <AdminPageWrap title="Questions">  
                <View style={{flexDirection: 'row'}}>              
                    <View style={{padding:15, flex:1}}>
                        <AppButton title="New Question" onBtnPress={()=>{ this.props.navigation.navigate('newQuestion') }}/>
                    </View>
                    <View style={{padding:15, flex:1}}>
                        <AppButton title="Filter" onBtnPress={()=>{ this._filterModal(true) }}/>
                    </View>
                </View>              
                <View>
                    <FlatList
                        data={queList}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderQuestionsList}
                    />
                </View>
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}                    
                >
                    <View style={{flex: 1, backgroundColor:'#ddd'}}>
                        <View style={{paddingTop:100}}>

                            <View style={{marginBottom:20}}>   
                                <Dropdown listItems={this.props.technology_list} prompt={techPromp} uniqueKey="_id"  keyName="technology_id1" text="technology_name" key="2" onDropdownChange={this.technologyFilterSet} />
                            </View>

                            <View style={{marginBottom:20}}>   
                                <Dropdown listItems={this.props.client_list} prompt={clientPrompt} uniqueKey="_id"  keyName="client_id2" text="client_name" key="2" onDropdownChange={this.clientFilterSet} />
                            </View>
                            
                            <Button
                                onPress={() => this._filterModal(false)}
                                title="Filter"
                            >
                            </Button>
                        </View>
                    </View>
                </Modal>
            </AdminPageWrap>
        )
        
    }

}

const mapStateToProps = (state) => {
    const { que_list }  = state.questionData;
    const { client_list } = state.clientData;
    const { technology_list } = state.technologyData;
    return { que_list, client_list, technology_list };    
}
export default connect(mapStateToProps, { queList })(QueList);

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Modal, Alert } from 'react-native';
import { connect } from 'react-redux';

import { setClientProps, saveClient, updateClient, clientList } from '../../redux/actions/ClientsHomeAction';
import { AppButton, Input, Spinner } from '../../common/components';
import { styles } from './style'

class ClientModal extends Component{

    constructor(props){
        super(props); 
        
    }    

    _saveClient = () => {

        var data = {
            _id: this.props._id,
            client_name: this.props.client_name,
            client_info: this.props.client_info
        }

        if(this.props.modal_type=='save'){
            this.props.saveClient(data);
        }
        else{
            this.props.updateClient(data);
        }

    }

    _renderButton = () => {

        if(this.props.modal_btn_loading){
            return <Spinner size="small" style={{flex:1}}/>
        }

        var btn_text = (this.props.modal_type=='save') ? 'Save' : 'Update';

        return (
            <TouchableHighlight
                onPress={()=>{ this._saveClient() }}
                style={styles.updateModalBtn}
            >
                <Text style={styles.updateModalBtnText}>{btn_text}</Text>
            </TouchableHighlight>
        )

    }

    render(){       
        

        if(this.props.error_msg!=''){
            Alert.alert(
                'Error',
                this.props.error_msg,
                [
                    {text: 'OK', onPress: () => this.props.setClientProps({ prop:'error_msg', value:'' })}
                ]
            )
        }
        if(this.props.success_msg!=''){
            
            Alert.alert(
                'Success',
                this.props.success_msg,
                [
                    {text: 'OK', onPress: () => {  this.props.setClientProps({ prop:'success_msg', value:'' });  this.props.clientList();  }}
                ]
            )
        }

        var modal_visibility = (this.props.modal_visibility) ? 'flex' : 'none';

        return(                        

                <View style={[{display:modal_visibility}, styles.modalWrap]}>
                    <View style={{marginBottom:20}}>
                        <Input
                            label="Clientnology Name"
                            value={this.props.client_name}
                            onChangeText={(value)=>{ this.props.setClientProps({ prop:'client_name', value }) }}
                        />
                    </View>  
                    <View>
                        <Input
                            label="Client Info"
                            value={this.props.client_info}
                            onChangeText={(value)=>{ this.props.setClientProps({ prop:'client_info', value }) }}
                        />
                    </View>   
                    <View style={styles.modalBtnSaveWrap}>                                           
                        {this._renderButton()}                               
                        <TouchableHighlight
                            onPress={this.props._toggleModal}
                            style={styles.updateModalBtn}
                        >
                            <Text style={styles.updateModalBtnText}>Cancel</Text>
                        </TouchableHighlight>    
                    </View>             
                </View>    
        );

    }

}

const mapStateToProps = (state) => {
    const { _id, client_name, client_info, modal_visibility, modal_btn_loading, modal_type, error_msg, success_msg } = state.clientData;

    return { _id, client_name, client_info, modal_visibility, modal_btn_loading, modal_type, error_msg, success_msg };
}
export default connect(mapStateToProps, { setClientProps, saveClient, updateClient, clientList })(ClientModal);
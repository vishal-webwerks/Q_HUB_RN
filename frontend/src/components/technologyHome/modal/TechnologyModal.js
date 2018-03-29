import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Modal, Alert } from 'react-native';
import { connect } from 'react-redux';

import { setTechProps, saveTech, updateTech, techList } from '../../../redux/actions/TechnologyHomeAction';
import { AppButton, Input, Spinner } from '../../../common/components';
import { styles } from '../style'

class TechnologyModal extends Component{

    constructor(props){
        super(props); 
        
    }    

    _saveTech = () => {

        var data = {
            _id: this.props._id,
            technology_name: this.props.technology_name,
            technology_desc: this.props.technology_desc
        }

        if(this.props.modal_type=='save'){
            this.props.saveTech(data);
        }
        else{
            this.props.updateTech(data);
        }

    }

    _renderButton = () => {

        if(this.props.modal_btn_loading){
            return <Spinner size="small" style={{flex:1}}/>
        }

        var btn_text = (this.props.modal_type=='save') ? 'Save' : 'Update';

        return (
            <TouchableHighlight
                onPress={()=>{ this._saveTech() }}
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
                    {text: 'OK', onPress: () => this.props.setTechProps({ prop:'error_msg', value:'' })}
                ]
            )
        }
        if(this.props.success_msg!=''){
            
            Alert.alert(
                'Success',
                this.props.success_msg,
                [
                    {text: 'OK', onPress: () => {  this.props.setTechProps({ prop:'success_msg', value:'' });  this.props.techList();  }}
                ]
            )
        }

        var modal_visibility = (this.props.modal_visibility) ? 'flex' : 'none';

        return(                        

                <View style={[{display:modal_visibility}, styles.modalWrap]}>
                    <View style={{marginBottom:20}}>
                        <Input
                            label="Technology Name"
                            value={this.props.technology_name}
                            onChangeText={(value)=>{ this.props.setTechProps({ prop:'technology_name', value }) }}
                        />
                    </View>  
                    <View>
                        <Input
                            label="Description"
                            value={this.props.technology_desc}
                            onChangeText={(value)=>{ this.props.setTechProps({ prop:'technology_desc', value }) }}
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
    const { _id, technology_name, technology_desc, modal_visibility, modal_btn_loading, modal_type, error_msg, success_msg } = state.technologyData;

    return { _id, technology_name, technology_desc, modal_visibility, modal_btn_loading, modal_type, error_msg, success_msg };
}
export default connect(mapStateToProps, { setTechProps, saveTech, updateTech, techList })(TechnologyModal);
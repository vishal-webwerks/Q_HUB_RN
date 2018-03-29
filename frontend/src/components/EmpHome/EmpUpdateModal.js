import React, { Component } from 'react';
import { View, Text, LayoutAnimation, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';

import { Input, Spinner } from '../../common/components';
import { styles } from './style';
import { setEmpHomeProp, empUpdate, empList } from '../../redux/actions';

class EmpUpdateModal extends Component{

    constructor(props){
        super(props);

    }

    setEmpHomeProp = ({ prop, value }) => {
        this.props.setEmpHomeProp({ prop, value });
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    _renderButton = () => {

        if(this.props.update_btn_loading){
            return <Spinner size="small" style={{flex:1}}/>
        }

        return (
            <TouchableHighlight
                onPress={()=>{ this._updateEmp() }}
                style={styles.updateModalBtn}
            >
                <Text style={styles.updateModalBtnText}>Update</Text>
            </TouchableHighlight>
        )

    }

    _closeModal = () => {
        this.setEmpHomeProp({prop:'update_btn_loading', value:false});
        this.setEmpHomeProp({prop:'modal_visibility', value:false});
    }

    _updateEmp = () => {

        var data = { 
            _id: this.props._id, 
            name: this.props.name, 
            email: this.props.email, 
            designation: this.props.designation
        }
        this.props.empUpdate(data);       

    }

    render(){

        var visibility = (this.props.visibility) ? 'flex' : 'none';

        return(
           <View style={[styles.modalWrap, { display:visibility }]}>
              <View style={{marginBottom:20}}>
                    <Input
                        label="Name"
                        value={this.props.name}
                        onChangeText={(value)=>{ this.setEmpHomeProp({ prop:'name', value }) }}
                    />
                </View>     
                <View style={{marginBottom:20}}>
                    <Input
                        label="Email"
                        value={this.props.email}
                        onChangeText={(value)=>{this.setEmpHomeProp({prop:'email', value})}}
                    />
                </View>     
                <View style={{marginBottom:20}}>
                    <Input
                        label="Designation"
                        value={this.props.designation}
                        onChangeText={(value)=>{this.setEmpHomeProp({prop:'designation', value})}}
                    />
                </View>   
                <View style={styles.updateModalBtnWrap}>                                           
                    {this._renderButton()}                               
                    <TouchableHighlight
                       onPress={()=>{ this._closeModal() }}
                       style={styles.updateModalBtn}
                    >
                        <Text style={styles.updateModalBtnText}>Cancel</Text>
                    </TouchableHighlight>    
                </View>             
           </View> 
        )

    }

}

const mapStateToProps = (state) => {
    
    const { _id, name, email, designation, update_btn_loading, update_error, update_success } = state.empHome;
    return { _id, name, email, designation, update_btn_loading, update_error, update_success };

}
export default connect(mapStateToProps, { setEmpHomeProp, empUpdate, empList })(EmpUpdateModal);
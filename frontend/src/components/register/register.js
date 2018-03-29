import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, AppButton, Spinner } from '../../common/components';
import { connect } from 'react-redux';

import { employeeInit, employeeSave } from '../../redux/actions';
import { styles } from './style';

class Register extends React.Component{ 
    
    constructor(props){
        super(props);

        //this.employeeSave = this.employeeSave.bind(this);
        //this.renderButton = this.renderButton.bind(this);
    }

    employeeSave=()=>{
        const { name, email, designation, password } = this.props;

        this.props.employeeSave({ name, email, designation, password });
    }

    renderButton = () => {

        const { loading } = this.props;

        if(loading){
            return <Spinner size="large" />
        }

        return (
            <View>
                <AppButton
                    title="Sign Up"
                    onBtnPress={this.employeeSave}
                />                   
            </View>                
        );

    }

    render(){

        if(this.props.success_msg!="" || this.props.err_msg!=""){

            var title = (this.props.success_msg=="") ? "Error" : "Success";
            var msg = (this.props.success_msg=="") ? this.props.err_msg : this.props.success_msg;

            Alert.alert(
                title,
                msg
            )
        }

        return (
            <View style={styles.root}>
                <View style={{marginBottom:20}}>
                    <Input
                        label="Name"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeInit({ prop: 'name', value }) }
                    />
                </View>     
                <View style={{marginBottom:20}}>
                    <Input
                        label="Email"
                        value={this.props.email}
                        onChangeText={value => this.props.employeeInit({ prop: 'email', value }) }
                    />
                </View>     
                <View style={{marginBottom:20}}>
                    <Input
                        label="Designation"
                        value={this.props.designation}
                        onChangeText={value => this.props.employeeInit({ prop: 'designation', value }) }
                    />
                </View>
                <View style={{marginBottom:20}}>
                    <Input
                        label="Password"
                        value={this.props.password}
                        onChangeText={value => this.props.employeeInit({ prop: 'password', value }) }
                        secureText={true}
                    />
                </View> 
                {this.renderButton()}              

            </View>    
        )

    }

}

const mapStateToProps = (state) => {
    const { name, email, designation, password, success_msg, err_msg, loading } = state.employee;

    return { name, email, designation, password, success_msg, err_msg, loading };
}
export default connect(mapStateToProps, { employeeInit, employeeSave })(Register);

import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { styles } from './style';
import { Input, AppButton, Spinner } from '../../common/components';

import { loginInit, loginAction, loginReset } from '../../redux/actions';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.renderButton = this.renderButton.bind(this);
        this.redirectToDashboard = this.redirectToDashboard.bind(this);
    }

    login = () => {
        const { email, password } = this.props;

        this.props.loginAction({ email, password });
    }

    renderButton(){

        if(this.props.loading){
            return <Spinner size="large" />
        }

        return (
            <View>
                <AppButton
                    title="Sign In"
                    onBtnPress = {this.login}
                />                   
            </View>
        );

    }

    redirectToDashboard(){
        this.props.loginInit({ prop:'err_msg', value:''});
        if(this.props.success_msg!=""){
            this.props.loginReset();
            this.props.navigation.navigate('dashboard')
        }
    }

    render(){

        if(this.props.success_msg!="" || this.props.err_msg!=""){
            
            var title = (this.props.success_msg=="") ? "Error" : "Success";
            var msg = (this.props.success_msg=="") ? this.props.err_msg : this.props.success_msg;

            Alert.alert(
                title,
                msg,
                [
                    {text: 'OK', onPress: () => this.redirectToDashboard() },
                ],
            )

        }

        return(
            <View style={styles.root}>
                <View style={{marginBottom:20}}>
                    <Input
                        label="Email"
                        value={this.props.email}
                        autoCapitalize="none"
                        onChangeText={ value => { this.props.loginInit({ prop:'email', value  }) } }
                    />
                </View>     
                <View style={{marginBottom:20}}>
                    <Input
                        autoCapitalize="none"
                        label="Password"
                        value={this.props.password}
                        onChangeText={ value => { this.props.loginInit({ prop:'password', value  }) } }
                        secureText={true}
                    />
                </View>                  
                {this.renderButton()}

            </View>    
        )

    }

}

const mapStateToProps = state => {

    console.log(state);
    const {  email, password, success_msg, err_msg, loading } = state.loginData;

    return {  email, password, success_msg, err_msg, loading };

};

export default connect(mapStateToProps, { loginInit, loginAction, loginReset })(Login);
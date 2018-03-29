import React, { Component } from 'react';
import { Text, View, TouchableHighlight, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { COLORS } from '../../common/globals';
import { styles } from './style';
import { empList } from '../../redux/actions';

class EmpList extends Component{

    constructor(props){
        super(props);

        this.state = {
            expandable:false
        };
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    _toggleEmpDesc = () => {

        var expandable = (this.state.expandable) ? false : true;

        this.setState({
            expandable:expandable
        });
    }    

    _renderListContent = (item, index) => {

        if(this.state.expandable){
            return (
                <View style={styles.listContentWrap}>
                    <TouchableHighlight 
                      style={styles.editBtnTouch} 
                      onPress={this.props.editModalToggle}
                    >
                        <Text style={styles.editBtn}>Edit</Text>
                    </TouchableHighlight>
                </View>
            )
        }   
    }

    render(){

        const index = this.props.index;
        const item = this.props.item;

        return (
            <View>
                <TouchableHighlight onPress={()=>{ this._toggleEmpDesc() }}>
                    <View style={{borderBottomWidth:1, borderBottomColor:'#ddd', backgroundColor:'#fff', display:'flex', flexDirection:'row', padding:5, paddingTop:15, paddingBottom:15}}>
                        <Text style={{flex:2, fontSize:13}}>{ item.name }</Text>
                        <Text style={{flex:2, fontSize:13}}>{ item.email }</Text>
                        <Text style={{flex:1, fontSize:13}}>{ item.designation }</Text>
                    </View>
                </TouchableHighlight>
                {this._renderListContent(item, index)}               
            </View>
        )
    }

}

export default connect()(EmpList);
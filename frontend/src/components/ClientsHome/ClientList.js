import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setClientProps } from '../../redux/actions/ClientsHomeAction';
import { styles } from './style';

class ClientList extends Component{

    constructor(props){
        super(props);

        this.state = {
            expandable:false
        }

    }

    showListContent = () => {
        var expandable = (this.state.expandable) ? false : true;
        this.setState({
            expandable: expandable
        });
    }

    _updateModal = (item) => {
        this.props.setClientProps({ prop:'_id', value:item._id });
        this.props.setClientProps({ prop:'client_name', value:item.client_name });
        this.props.setClientProps({ prop:'client_info', value:item.client_info });
        this.props.setClientProps({ prop:'modal_type', value:'update' });
        this.props._toggleModal(true);
    }

    render(){

        var expandable = (this.state.expandable) ? 'flex' : 'none';

        return(
            <View style={{display:'flex'}}>
                <TouchableOpacity onPress={()=>{ this.showListContent() }}>
                    <View style={[styles.clientListItemWrap]}>
                        <Icon name="keyboard-arrow-right" size={22}/>
                        <Text style={styles.clientListItemText}>{ this.props.item.client_name }</Text>                     
                    </View>
                </TouchableOpacity>
                <View style={[styles.clientListItemContentWrap, {display:expandable}]}>                   
                    <View style={styles.clientListItemContentEle}>
                        <TouchableOpacity onPress={()=>{ this._updateModal(this.props.item) }}>
                            <Text style={styles.clientListItemContentText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.clientListItemContentEle}>
                        <TouchableOpacity>
                            <Text style={styles.clientListItemContentText}>Questions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )

    }

}

const mapStateToProps = (state) =>{

    const { } = state.clientData;

    return {  };

}
export default connect(mapStateToProps, { setClientProps })(ClientList);
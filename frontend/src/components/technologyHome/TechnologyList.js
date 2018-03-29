import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setTechProps } from '../../redux/actions';
import { styles } from './style';

class TechnologyList extends Component{

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
        this.props.setTechProps({ prop:'_id', value:item._id });
        this.props.setTechProps({ prop:'technology_name', value:item.technology_name });
        this.props.setTechProps({ prop:'technology_desc', value:item.technology_desc });
        this.props.setTechProps({ prop:'modal_type', value:'update' });
        this.props._toggleModal(true);
    }

    render(){

        var expandable = (this.state.expandable) ? 'flex' : 'none';

        return(
            <View style={{display:'flex'}}>
                <TouchableOpacity onPress={()=>{ this.showListContent() }}>
                    <View style={styles.techListItemWrap}>                    
                        <Icon name="keyboard-arrow-right" size={22}/>
                        <Text style={styles.techListItemText}>{ this.props.item.technology_name }</Text>                     
                    </View>
                </TouchableOpacity>
                <View style={[styles.techListItemContentWrap, {display:expandable}]}>                   
                    <View style={styles.techListItemContentEle}>
                        <TouchableOpacity onPress={()=>{ this._updateModal(this.props.item) }}>
                            <Text style={styles.techListItemContentText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.techListItemContentEle}>
                        <TouchableOpacity>
                            <Text style={styles.techListItemContentText}>Questions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )

    }

}

const mapStateToProps = (state) =>{

    const { } = state.technologyData;

    return {  };

}
export default connect(mapStateToProps, { setTechProps })(TechnologyList);
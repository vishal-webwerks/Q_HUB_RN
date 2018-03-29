import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, Animated, ListView } from 'react-native';
import { connect } from 'react-redux';

import { AdminPageWrap } from '../../common/components';
import styles from './style';
import { empList, empUpdateFormSet } from '../../redux/actions';
import EmpList from './EmpList';
import EmpUpdateModal from './EmpUpdateModal';


class EmpHome extends Component{

    constructor(props){
        super(props);

        this._editModalToggle = this._editModalToggle.bind(this);
    }
    componentWillMount(){
        this.props.empList();
    }

    componentWillReceiveProps(nextProps){
        if(this.props!=nextProps){
            //this.props.empList();   
        }        
    }

    _updateEmpList = () => {
        this.props.empList();
    }

    _editModalToggle(item){
        this.props.empUpdateFormSet(item);
    }

    render(){    
        return(
            <AdminPageWrap title="Employee Home">
                {this.props.emp_list.map((item, index) => 
                        <EmpList key={item._id} item={item} index={index} editModalToggle={ ()=>{ this._editModalToggle(item) } }/>
                )}
                <EmpUpdateModal visibility={this.props.modal_visibility} _updateEmpList={()=>{ this._updateEmpList() }}/>
            </AdminPageWrap>    
        );
    }

}

const mapStateToProps = (state) => {
    const { emp_list, modal_visibility } = state.empHome;

    return { emp_list, modal_visibility };
}
export default connect(mapStateToProps, { empList, empUpdateFormSet })(EmpHome);
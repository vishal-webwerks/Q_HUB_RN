import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { AdminPageWrap, AppButton } from '../../common/components';
import TechnologyModal from './modal/TechnologyModal';
import TechnologyList from './TechnologyList';
import { techList, setTechProps, resetModal } from '../../redux/actions';
import { styles } from './style';

class TechnologyHome extends Component{

    constructor(props){
        super(props);

        this.props.techList();        
    }

    _toggleModal = (status) => {        
        this.props.setTechProps({ prop:'modal_visibility', value:status });
    }

    render(){        

        return (
            <AdminPageWrap title="Technology">
                <View style={styles.newTechBtnWrap}>
                    <AppButton title="New Technology" onBtnPress={()=>{ this.props.resetModal(); this._toggleModal(true) }}/>
                </View>
                <View style={styles.techListWrap}>
                    {
                        this.props.technology_list.map((item, index)=>
                            <TechnologyList key={item._id} item={item} _toggleModal={()=>{ this._toggleModal(true) }} />
                        )
                    }     
                </View>           
                <TechnologyModal _toggleModal={ ()=>{ this._toggleModal(false) } }/>
            </AdminPageWrap>
        )
    }

}

const mapStateToProps = (state) =>{
    const { technology_list } = state.technologyData;

    return { technology_list };
}

export default connect(mapStateToProps, {techList, setTechProps, resetModal})(TechnologyHome);
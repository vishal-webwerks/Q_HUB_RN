import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { AdminPageWrap, AppButton } from '../../common/components';
import { clientList, setClientProps, resetModal } from '../../redux/actions/ClientsHomeAction';
import { styles } from './style';
import ClientModal from './ClientModal';
import ClientList from './ClientList';

class ClientsHome extends Component{

    constructor(props){
        super(props);

        this.props.clientList();
    }

    _toggleModal = (status) => {        
        this.props.setClientProps({ prop:'modal_visibility', value:status });
    }

    render(){

        return(
            <AdminPageWrap title="Clients">
                <View style={styles.newTechBtnWrap}>
                    <AppButton title="New Client" onBtnPress={()=>{ this.props.resetModal(); this._toggleModal(true) }}/>
                </View>
                <View style={styles.techListWrap}>
                    {
                        this.props.client_list.map((item, index)=>
                            <ClientList key={item._id} item={item} _toggleModal={()=>{ this._toggleModal(true) }} />
                        )
                    }     
                </View>           
                <ClientModal _toggleModal={ ()=>{ this._toggleModal(false) } }/>             
            </AdminPageWrap>
        )

    }

}

const mapStateToProps = (state) =>{
    const { client_list } = state.clientData;

    return { client_list };
}
export default connect(mapStateToProps, {clientList, setClientProps, resetModal})(ClientsHome);
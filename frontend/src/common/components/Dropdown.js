import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";

import { COLORS, WINDOW } from "../../common/globals";

export default class Dropdown extends Component{  
    
    constructor(props){
        super(props);

        this.state = {
            visibility:false,
            selectedText:this.props.prompt
        }
    }

    _keyExtractor = (item, index) => item[this.props.uniqueKey];

    _toggleDropdown = () => {

        this.setState({
            visibility: !this.state.visibility
        });     

    }

    _renderItem = ({ item }) => {

        return(
            <View>
                <TouchableOpacity onPress={()=>{ this._toggleSelectedText(item[this.props.text], item[this.props.uniqueKey]) }}>
                    <Text style={{backgroundColor:'#f5f5f5', padding:10, borderBottomWidth:1, borderColor:'#ddd'}}>{item[this.props.text]}</Text>
                </TouchableOpacity>
            </View>
        );

    }

    _toggleSelectedText = (value, id) => {

        this.setState({
            selectedText: value,
            visibility: !this.state.visibility
        });

        this.props.onDropdownChange({prop:this.props.keyName, value:id});

    }

    render(){  
        
        var height = (this.state.visibility) ? 100 : 0;

        return(
            <View style={{ paddingLeft:15, paddingRight:10, flexWrap:'wrap'}}>
                <View>
                    <TouchableOpacity onPress={()=>{ this._toggleDropdown() }}>
                        <Text style={{paddingTop:10, paddingBottom:10, paddingLeft:5, paddingRight:5, backgroundColor:'#fff', borderWidth:1, borderColor:'#f5f5f5'}} >{this.state.selectedText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height:height }}>
                    <FlatList
                        data={this.props.listItems}
                        keyExtractor={this._keyExtractor}
                        renderItem={(item)=>this._renderItem(item)}
                    />
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({



});
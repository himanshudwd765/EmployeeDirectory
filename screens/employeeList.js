import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import DataSource from 'EmployeeDirectory/data/dataSource.json';

export default class EmployeeList extends Component{

    _keyExtractor = (item, index) => index;

    constructor(props){
        super(props);
        this.state = {
            dataSource: DataSource
        };
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderEmployeeListRow.bind(this)}
                    ItemSeparatorComponent={this._renderSeparator}
                    keyExtractor={this._keyExtractor}
                    style={{margin:8}}
                />
            </View>
        );
    }

    _renderEmployeeListRow(rowData){
        var empData = rowData.item;
        return(
            <TouchableHighlight underlayColor = '#F4F4F4' onPress={this._openEmployeeDetailView.bind(this,empData)}>
                <View style={{flexDirection:'row', padding:10}}>
                    <Image
                        style={{width: 50, height: 50, borderRadius:10}}
                        source={{uri: empData.image}}
                    />
                    <View style={{padding:5, marginLeft:5}}>
                        <Text style={{fontSize:15, fontWeight:'500', color:'#000000'}}>{rowData.item.name}</Text>
                        <Text style={{fontSize:12, color:'#696969'}}>{rowData.item.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _openEmployeeDetailView(empData){
        Actions.employeeDetailScreen({title: empData.name, empData:empData})
    }

    _renderSeparator() {
        return (
          <View style={{flex: 1,height: 1,backgroundColor: '#CCCCCC'}}></View>
        );
    }

}
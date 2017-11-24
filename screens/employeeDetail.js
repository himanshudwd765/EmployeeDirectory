import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import TextHeader from 'EmployeeDirectory/components/textHeader';

export default class EmployeeDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            empData:this.props.empData
        }
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <Image
                    style={{width: 200, height: 200, alignSelf:'center', marginTop:10, borderRadius:15}}
                    source={{uri: this.state.empData.image}}
                />
                <View style={{marginTop:10}}>
                    <TextHeader text={"* Bio *"}/>
                    <Text style={{fontSize:15,color:'#000000',padding:8}}>{this.state.empData.description}</Text>
                    <TextHeader text={"* Contact Number *"}/>
                    <Text style={{fontSize:15,color:'#000000',padding:8}}>{this.state.empData.telephoneNumber}</Text>
                    <TextHeader text={"* Email *"}/>
                    <Text style={{fontSize:15,color:'#000000',padding:8}}>{this.state.empData.email}</Text>
                </View>
            </View>
        );
    }
}
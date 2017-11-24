/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, ActionConst, Scene } from 'react-native-router-flux';
import EmployeeList from 'EmployeeDirectory/screens/employeeList';
import EmployeeDetail from 'EmployeeDirectory/screens/employeeDetail';

export default class App extends Component {
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene
            key="employeeListScreen"
            component={EmployeeList}
            title="Employee List"
            initial={true}
            headerStyle= {{backgroundColor: '#0065a4'}}
            headerTitleStyle= {{color: '#FFFFFF',alignSelf:'center'}}
          />
          <Scene
            key="employeeDetailScreen"
            component={EmployeeDetail}
            title="Employee Detail"
            headerStyle= {{backgroundColor: '#0065a4'}}
            headerTitleStyle= {{color: '#FFFFFF'}}
            headerTintColor="#FFFFFF"
          />
        </Scene>
      </Router>
    );
  }
}

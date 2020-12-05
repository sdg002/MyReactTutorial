import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import SampleComponent from './components/SampleComponent'
import SampleComponentCreateElement from "./components/SampleComponentCreateElement"
import SampleWithProps from "./components/SampleWithProps"
import ClickCounter from "./components/ClickCounter"

import MyBootStrapNav from "./components/MyBootStrapNav"
import MyBootStrapLayout from  "./components/MyBootStrapLayout"

import MyBootStrapDemo from  "./components/MyBootStrapDemo"
import MyDataGrid from  "./components/MyDataGrid"
import MyModalDemo from  "./components/MyModalDemo"
import BootstrapModal from "./components/BootstrapModal"
import  MyBootstrapNavIntelligent from "./components/MyBootstrapNavIntelligent"

import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


class App extends Component
{
  render()
  {

  return( 
      <HashRouter>
        <MyBootstrapNavIntelligent></MyBootstrapNavIntelligent>
        <Switch>
          <Route path="/" exact>
            <MyBootStrapDemo></MyBootStrapDemo>
          </Route>
          <Route path="/tasklist">
            <MyBootStrapDemo></MyBootStrapDemo>
          </Route>
          <Route path="/modaldemo" >
            <MyModalDemo></MyModalDemo>
          </Route>
          <Route path="/datagriddemo" >
            <MyDataGrid></MyDataGrid>
          </Route>
          <Route path="/bootstrapmodal" >
            <BootstrapModal></BootstrapModal>
          </Route>
        </Switch>                  
    </HashRouter>);    
  }
}

export default App;

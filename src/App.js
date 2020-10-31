import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import SampleComponent from './components/SampleComponent'
import SampleComponentCreateElement from "./components/SampleComponentCreateElement"
import SampleWithProps from "./components/SampleWithProps"
import ClickCounter from "./components/ClickCounter"

class App extends Component
{
  render()
  {
  return (
    <div className='App'>
      <img src={logo} className="App-logo" alt="logo" />
      <div>This is a Class component in App.js</div>
      <SampleComponent></SampleComponent>
      <SampleComponent></SampleComponent>
      <SampleComponentCreateElement></SampleComponentCreateElement>
      <SampleWithProps firstName="John" lastName="Doe"></SampleWithProps>
      <SampleWithProps firstName="Jane" lastName="Doe"></SampleWithProps>
      <ClickCounter></ClickCounter>
    </div>
    );
  }
}

export default App;

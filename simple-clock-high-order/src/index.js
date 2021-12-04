import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mystyles.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import InnerComponent  from './components/InnerComponent';
import OuterComponent  from './components/OuterComponent';
import Clock from './components/Clock'
import Clock2 from './components/Clock2'

ReactDOM.render(
  <React.StrictMode>
    {/* <InnerComponent firstName="john doe"></InnerComponent> */}
    
      <div>
        <Clock></Clock>
        <hr/>
        <Clock2></Clock2>
        <hr/>
        <OuterComponent></OuterComponent>
      </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

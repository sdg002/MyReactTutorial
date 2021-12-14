import logo from './logo.svg';
import './App.css';
import InnerComponent  from './components/InnerComponent';
import OuterComponent  from './components/OuterComponent';
import Clock from './components/Clock'
import Clock2 from './components/Clock2'
import {Route,Routes ,BrowserRouter as Router} from 'react-router-dom'








function App() {
  
  const ClockLayout = () => {
    return (
      <div>
        <Clock></Clock>
        <hr/>
        <Clock2></Clock2>
        <hr/>
        <OuterComponent></OuterComponent>
      </div>
    );
  };
  

  return (
    <Router basename="/MyReactTutorial/static/simple-clock-high-order">
      <Routes>
        <Route path="/" element={ClockLayout()}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

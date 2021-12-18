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
  
  console.log(document.location.pathname)
  let frags=document.location.pathname.split('/')
  let basename=`/${frags[1]}/${frags[2]}/simple-clock-high-order`
  console.log(`The basename is ${basename}`)
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={ClockLayout()}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

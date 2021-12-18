import './App.css';
import simplenav from './components/simplenav'
import reactmodal from './components/reactmodal';
import bsmodal from './components/bsmodal';
import home from './components/home';
import {Route,Routes ,BrowserRouter as Router} from 'react-router-dom'

function App() {
  let simple1=()=>{ return <div>blah 1</div>};
  let simple2=()=>{ return <div>blah 2</div>}
return (
    <div>
      <div>{simplenav()}</div>
      <Router>
        <Routes>
          <Route path="/" element={home()}></Route>          
          <Route path="/simplemodal/" element={reactmodal()}>
          </Route>
          <Route path="/bootstrapmodal/" element={bsmodal()}>
          </Route>          
        </Routes>
    </Router>

    </div>
    
  );
}

export default App;

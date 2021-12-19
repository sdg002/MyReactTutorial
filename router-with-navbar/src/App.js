import './App.css';
import simplenav from './components/simplenav';
import page1 from './components/page1';
import page2 from './components/page2';
import home from './components/home';
import nonexistent from './components/nonexistent';
import {Route,Routes ,BrowserRouter as Router} from 'react-router-dom'

function App() {
  let frags=document.location.pathname.split('/')
  let basename=`/${frags[1]}/${frags[2]}/router-with-navbar`

  return (
    <div>
      <Router basename={basename}>
        <div>{simplenav()}</div>
        <Routes>
          <Route path="/" element={home()}></Route>
          <Route path="/link1" element={page1()}></Route>
          <Route path="/link2" element={page2()}></Route>
          <Route path="/*" element={nonexistent()}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

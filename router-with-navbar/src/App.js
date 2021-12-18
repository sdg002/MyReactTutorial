import './App.css';
import simplenav from './components/simplenav';
import page1 from './components/page1';
import page2 from './components/page2';
import home from './components/home';
import nonexistent from './components/nonexistent';
import {Route,Routes ,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
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

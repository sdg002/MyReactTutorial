import logo from './logo.svg';
import './App.css';

import * as pages from './pages';
import {DemoStore} from './data/DemoStore';

function App() {
  return (
    <div>
      <pages.ParticipantPage store={DemoStore}/>
    </div>
    
  );
}

export default App;

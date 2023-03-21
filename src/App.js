import logo from './logo.svg';
import './App.css';
import {links} from './constants';
import './components/Sidebar';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="App">
      <Sidebar />
      <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
      <header className="App-header">
        <p>
          Boaz Kaufman's Personal Website
        </p>
        <p>
        <i>Under Construction</i>
        </p>
      </header>
      </div>
      
    </div>
  );
}

export default App;

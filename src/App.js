import logo from './logo.svg';
import './App.css';
import {links} from './constants.js';

function App() {
  const personalLinks = links.map((link) => (
    <div><a
        className="App-link"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >{link.text}</a>
      <br/></div>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Boaz Kaufman's Personal Website
        </p>
        <p>
        <i>Under Construction</i>
        </p>
      </header>
      
      <h2>Quick Links</h2>
      
      <br/>
      {personalLinks}
    </div>
  );
}

export default App;

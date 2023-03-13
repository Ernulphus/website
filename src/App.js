import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boaz Kaufman's Personal Website
        </p>
        <p>
        <i>Under Construction</i>
        </p>
      </header>
      
      <h2>Quick Links</h2>
      <a
        className="App-link"
        href="https://github.com/Ernulphus"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Profile
      </a><br/>
      <a
        className="App-link"
        href="https://www.linkedin.com/in/boaz-kaufman-4281b0174/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn Profile
      </a>

      <h2>Projects</h2>
      <p>CS Capstone: AI Instrument Classification 
      <a
        className="App-link"
        href="https://github.com/Ernulphus/capstone-Bsharp-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Native App
      </a></p>
      <br/>
      <a
        className="App-link"
        href="https://eportfolios.macaulay.cuny.edu/kaufmanspringboard/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Undergraduate Thesis on AI
      </a>
    </div>
  );
}

export default App;

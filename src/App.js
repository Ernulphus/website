import './App.css';
import './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

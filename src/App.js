import './App.css';
import './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  useEffect(() => {
    document.title = 'Boaz Kaufman';
  })
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/website" element={<Home />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

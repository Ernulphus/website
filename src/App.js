import './App.css';
import './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects/ProjectRoutes';
import { Neko } from "./neko/app/neko.ts"

function App() {
  useEffect(() => {
    document.title = 'Boaz Kaufman';

    const neko = new Neko({
      nekoName: "peach",
      nekoImageUrl: "/peach.png",
      initialPosX: 1000,
      initialPosY: 50,
      startFollowing: true,
     });
    neko.init();

    return () => {
      neko.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/website" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

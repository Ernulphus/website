import './App.css';
import './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects/ProjectRoutes';
import { Neko } from "./neko/app/neko.ts"
import Education from './components/Education/Education.jsx';
import Experience from './components/Employment/Experience.jsx';

function App() {
  useEffect(() => {
    document.title = 'Boaz Kaufman';

    const neko = new Neko({
      nekoName: "peach",
      nekoImageUrl: "/peach.png",
      initialPosX: 500,
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
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/website" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

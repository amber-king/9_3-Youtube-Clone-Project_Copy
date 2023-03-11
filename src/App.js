import React from 'react';
import { Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"

import About from "./Components/about"
import Videos from "./Components/Videos"
import NavBar from "./Components/navbar"

// import SelectedVids from "./Components/SoloVideo"

function App() {
 

  return (
    <div className="App">
     <Router>
      <NavBar />
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<Videos/>}  />
      </Routes>
     </Router>
    </div>
  );
}

export default App;

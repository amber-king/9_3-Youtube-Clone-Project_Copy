<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import SearchBar from './SearchBar';
=======
import React from 'react';
<<<<<<< HEAD

>>>>>>> 019964846eaeed845de7d3d6275d9ab6c36f4b63
=======
import { Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
// import Nav from "./Compnents/Nav"
import About from "./Components/About"
import Videos from "./Components/Videos"
// import SelectedVids from "./Components/SoloVideo"
>>>>>>> 7d8a58f64e0b7a90524b9ae669a1cff613f4d808

function App() {
 

  return (
    <div className="App">
     <Router>
      {/* <Nav /> */}
    
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

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
        {/* might be an option to hook to app.js if not the lines underneath --v */}
        {/* <Route path="/navbar" element={<NavBar/>}/> */} 
        <Route path="/" element={<Home/>} /> */
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<Videos/>}  />
      </Routes>
     </Router>
    </div>
  );
}

export default App;

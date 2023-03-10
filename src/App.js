import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Nav from "./Compnents/Nav"
import About from "./Components/About"
import Videos from "./Components/Videos"

function App() {
 

  return (
    <div className="App">
     <Router>
      <Nav />
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

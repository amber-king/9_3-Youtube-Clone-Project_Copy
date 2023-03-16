<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
// import { useEffect } from 'react';
// import SearchBar from './SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/about';
import Videos from './Components/Videos';
import Navbar from './Components/navbar';
import SoloVideo from './Components/SoloVideo';
import './Components/allStyle.css';
=======

=======
// TODO Main js where all the routes are & imports needed -AK
>>>>>>> 5b237133a96c4c05639735b8fac3cd9cbbd473f2
import './App.css';
// import { useEffect } from 'react';
//  import SearchBar from './Components/SearchBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/about"
import Videos from "./Components/Videos"
import Navbar from "./Components/navbar"
import SoloVideo from "./Components/SoloVideo"
import "./Components/allStyle.css"
>>>>>>> 9ff24d15c99012689cd6153ce97ca5d93029bbfc

//import Youtube from "react-youtube"
//  import {useEffect} from "react"
// import SelectedVids from "./Components/SoloVideo"
<<<<<<< HEAD
=======

>>>>>>> 9ff24d15c99012689cd6153ce97ca5d93029bbfc

function App() {
  // // TODO -> helper function to test api key fucntionality -- v
  // const testYoutubeAPI = () => {
  //   console.log(process.env.REACT_APP_YOUTUBE_API_KEY) //must attach this key to you app call for it function
  //   //fetch('');
  // }

  // useEffect (()=>{
  //   testYoutubeAPI()
  // })

  return (
    <div className="App">
     
      <Router>
<<<<<<< HEAD
        <Navbar />

        <Routes>
          {/* might be an option to hook to app.js if not the lines underneath --v */}
          {/* <Route path="/navbar" element={<NavBar/>}/> */}
          <Route path="/" element={<Home />} /> */
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<Videos />} />
          <Route path="/video/:id" element={<SoloVideo />} />
        </Routes>
      </Router>
=======
      <Navbar />
    
      <Routes>
        {/* might be an option to hook to app.js if not the lines underneath --v */}
        {/* <Route path="/navbar" element={<NavBar/>}/> */} 
        <Route path="/" element={<Home/>} /> */
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Videos/>}  />
        <Route path="/video/:id" element={<SoloVideo/>}  />
      </Routes>
     </Router>
>>>>>>> 9ff24d15c99012689cd6153ce97ca5d93029bbfc
    </div>
  );
}

export default App;

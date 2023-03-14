import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/about"
import Videos from "./Components/Videos"
import Navbar from "./Components/navbar"
import SoloVideo from "./Components/SoloVideo"
import "./Components/allStyle.css"

//import Youtube from "react-youtube"
//  import {useEffect} from "react"
// import SelectedVids from "./Components/SoloVideo"

function App() {
  // // TODO -> helper function to test api key fucntionality -- v
  // const testYoutubeAPI = () => {
  //   console.log(process.env.REACT_APP_YOUTUBE_API_KEY) //must attach this key to you app call for it function
  //   //fetch('');
  // }

  // useEffect (()=>{
  //   testYoutubeAPI()
  // })



// ! for 3/14/2023 --v
// ! put all forms on js files & make sure to import properly the data

  return (
    <div className="App">
      <Router>
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
    </div>
  );
}

export default App;


// import React, { useState } from "react"
import SearchBar from "./SearchBar"
import "./Home.css"

// import React, { useState } from "react"
// import {Navigate} from "react-router-dom"
//import SoloVideo from "./SoloVideo"
// import "./allStyle.css"
//  import Navbar from "./Components/navbar"

// ! URL of Live Server to see pg -> http://localhost:3000
// * 3/16/2023 -> shows home page with links to the about page and a search enging form - AK

export default function Home() {

    console.log("test") // ? testing to see if function is connective to page, console.log to see in inspect

//   * standard form for a search engine where user inputs desires search info
    return (
        <div className="home-pg">
            {/* <Navbar/> */}
            <div className="search-engine">
                {/* onSubmit={handle for click search}  inside of <form>*/}
                <form >

                    <input

                        // onChange={handle for change search} here

                        className="search-engine"
                        type="text"
                        name="search"
                        placeholder="Search...🤔" />
                    <button className="searchEngine" type="submit" value="search">Search</button>

                </form>
            </div>
            <div className="error-msg">
                {/* <p className="error-result">
                    No Search Reasults Yet!, Please submit a search above!
                </p> */}
            </div>
           
            


        </div>
    )
}

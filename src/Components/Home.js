import React, { useState } from "react"
// import "./allStyle.css"

//  import Navbar from "./Components/navbar"

export default function Home() {
    console.log("test")

    return (
        <div className="home-pg">
            {/* <Navbar/> */}
            <div className="search-engine">
                {/* onSubmit={handle for click search}  */}
                <form >

                    <input

                        // onChange={handle for change search} here

                        className="search-engine"
                        type="text"
                        name="search"
                        placeholder="Search..." />
                    <button className="searchEngine" type="submit" value="search">Search</button>

                </form>
            </div>
            <div className="error-msg">
                <p className="error-result">
                    No Search Reasults Yet!, Please submit a search above!
                </p>
            </div>
            


        </div>
    )
}

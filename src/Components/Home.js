import React, { useState } from "react"


//  import Navbar from "./Components/navbar"

export default function Home() {
    console.log("test")

    return (
        <div className="home-pg">
            {/* <Navbar/> */}
            <div className="search-engine">
                {/* onSubmit={handle for click search}  */}
                <form>

                    <input

                        // onChange={handle for change search}

                        className="search-engine"
                        type="text"
                        name="search"
                        placeholder="Search..." />
                    <button className="searchEngine" type="submit" value="search">Search</button>

                </form>
            </div>
            <p> No Search Reasults Yet!, Please submit a search above!</p>

        </div>
    )
}

// TODO ---v View Page of videos 
// TODO map through videos connected to user search
// ! I can see the individual "View" page of a video. 


// ! URL of Live Server to see pg -> http://localhost:3000/video/

// * 3/16/2023 -> should show the video listing pg after user inputs a search but not lick on functionality yet, unclear of fetch URL -AK

import React from 'react';
// import Link from "react-router-dom" 
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
//  import Youtube from "react-youtube"

export default function Videos({ videos }) {
    console.log("test") // ? testing to see if function is connective to page, console.log to see in inspect

    const { id } = useParams() // * useParams gives us access to the parameters we set in out paths in our routing
    
    //  const urlKey = process.env.REACT_APP_YOUTUBE_API_KEY
    // const [inputSearch, setInputSearch] = useState([])
    const [listedVids, setListedVids] = useState([]) // * states for the listed videos after user input into search

// *  effect that fetches the info & sets it according to the search request
    useEffect(() => {
        fetch(``)
        
            .then((response) => response.json())
            .then((response) => {
                setListedVids(response.items)
                console.log(response.items)
            })
            .catch((error) => {
                console.log(error)
            })
    })

// * returns the related listed videos to topic searched
    return (

        <section className="video-shown">
            <h3>Video Listing</h3>



            {/* {listedVids.length > 0 && listedVids.map((videos) => {

            {listedVids.length > 0 && listedVids.map((videos) => {

                return (
                    <ul>
                        <li>
                            <img src={videos.snippet.thumbnails.medium.url} alt={id}>

                                {videos?.snippet?.channelTitle}


                            </img>
                        </li>
                    </ul>
                    // <div key={videos.id.videoId} className="loaded-video">
                    //     <Link to={`/video/${videos.id.videoId}`}>
                    //         <img
                    //             src={videos.snippet.thumbnails.medium.url}
                    //             alt={inputSearch} />
                    //         <p className="title"> {videos.snippet.title}</p>
                    //     </Link>
                    //     <p className="channel">{videos.snippet.channelTitle}</p>

                    // </div>
                )
            })} */}
        </section>
    )

}





// TODO ---v Selected video the user searched
// ! The individual video view.
// ! This video view should, at minimum, have a playable video from YouTube.

// ! URL of Live Server to see pg -> http://localhost:3000/video/:id

// * 3/16/2023 -> should show the clicked video the vis the users request, the player appears on the screen but does not work -AK
 

import React, { useEffect } from 'react'
import Youtube from "react-youtube"
import { useParams } from "react-router-dom"

export default function SoloVideo() {
    console.log("test")  // ? testing to see if function is connective to page, console.log to see in inspect
    const { id } = useParams() // * useParams gives us access to the parameters we set in out paths in our routing

    
// *  effect that fetches clicked video & sets it according to the search request 
//  ? this will be a temp. storage of the video playing
// ? could be used too to temp. store comments the users but in a faux comment section on the pg 
    useEffect(() => {
        window.localStorage.setItem(id, JSON.stringify())
    }, [id])

// * returns the physical video player that wher the users video will be clickable to play 
   
return (
        <div className="clicked-vid">
            <h3>Selected Video</h3>

            <form >
                <Youtube videoId={id} />
            </form>

        </div>
    )


}



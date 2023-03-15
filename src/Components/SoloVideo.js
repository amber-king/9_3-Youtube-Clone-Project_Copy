// TODO ---v Selected video the user searched
// ! The individual video view.
// ! This video view should, at minimum, have a playable video from YouTube.

// ? fetching the selected video via users search; using api key w/i fecth info
// ? make a state for search & user search 
import React, { useState, useEffect } from 'react'
//  import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import "./SoloVideo.css"

export default function SoloVideo() {
    console.log("test")
    const { id } = useParams()

    useEffect(() => {
        window.localStorage.setItem(id, JSON.stringify())
    }, [id])


    return (
        <div className="clicked-vid">
            <h3>Selected Video</h3>

            <form >
                <Youtube videoId={id} />
            </form>

        </div>
    )


}



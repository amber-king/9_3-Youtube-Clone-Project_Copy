// TODO ---v Selected video the user searched
// ! The individual video view.
// ! This video view should, at minimum, have a playable video from YouTube.

import React, { useEffect } from 'react'
import Youtube from "react-youtube"
import { useParams } from "react-router-dom"

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



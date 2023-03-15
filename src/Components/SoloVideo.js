// TODO ---v Selected video the user searched
// ! The individual video view.
// ! This video view should, at minimum, have a playable video from YouTube.

// ? fetching the selected video via users search; using api key w/i fecth info
// ? make a state for search & user search 
import React, { useState, useEffect } from 'react'
//  import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"


export default function SoloVideo({ setSearchVid, searchVid, search }) {
    const URL = process.env.REACT_APP_YOUTUBE_API_KEY

    // const [searchVid, setSearchVid] = useState([])
    // const {id} = useParams()
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${search}&key=${URL}&part=snippet,player`)
            .then((response) => response.json())
            .then((response) => {
                setSearchVid(searchVid)
                console.log("test")

            })
            .catch((error) => {
                console.log(error)
            }, [])
    })


    return null;

}



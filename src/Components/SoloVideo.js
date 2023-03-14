// TODO ---v Selected video the user searched
// ! The individual video view.
// ! This video view should, at minimum, have a playable video from YouTube.

// ? fetching the selected video via users search; using api key w/i fecth info
// ? make a state for search & user search 


import React, {useEffect,useState} from 'react'
import Youtube from "react-youtube"
import {useParams } from "react-router-dom"


export default function SoloVideo({solovid}) {
    console.log("test")
    const {id} = useParams()
    const [soloVideo, setSoloVideo] = useState([])
    


    // const URL = process.env.REACT_APP_YOUTUBE_API_KEY
    // const { id } = useParams() // -> to see if you can pull that video id from the 
    // useEffect(() => {
    //     fetch(`https://www.googleapis.com/youtube/v3/videos?id=${search}&key=${URL}&part=snippet,player`)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             // setSearchVid(searchVid)
    //             console.log("test")

    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         }, [])
    // })

 return null;
   

}



// TODO ---v View Page of videos 
// TODO map through videos connected to user search
// ! I can see the individual "View" page of a video. The URL should be /videos/:id where :id is the video ID from the Youtube API. The page should have:

import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
//  import SoloVideo from "./Components/SoloVideo"

// ?  --v another way to possibly show the video listings 
// {/* <div>
// {solovideo.map((video,index)=>{
//     return(
//     <div key={index} className="video-list">
//         <Link 
//         to={`/video/${video.id.videoId}`}
//         state={{title: video.snippet.title}}>
//             <div className="vid-img">
//                 <img 
//                 className="vid-img2"
//                 src={video.snippet.thumbmails.meduim.url}
//                 alt={video.snippet.title}/>
//                 <div>
//                     <h5>{video.snippet.title}</h5>
//                     <p>{video.snippet.description}</p>
//                     {(console.log(video))}
//                 </div>
//             </div>
//         </Link>
//     </div>)
// })}
// </div> */}

export default function Videos({ search, inputSearch, setInputSearch }) {
    console.log("test")
    const urlKey = process.env.REACT_APP_YOUTUBE_API_KEY
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${urlKey}`)
            .then((response) => response.json())
            .then((response) => {
                setInputSearch(response.items)
                console.log(response.items)
            })
            .catch((error) => {
                console.log(error)
            })
    })
    return (
        <section className="video-shown">
            <h3>Video Listing</h3>
            {inputSearch?.map((videos) => {
                return (
                    <div key={videos.id.videoId} className="loaded-video">
                        <Link to={`/video/${videos.id.videoId}`}>
                            <img
                                src={videos.snippet.thumbnails.medium.url}
                                alt={inputSearch} />
                            <p className="title"> {videos.snippet.title}</p>
                        </Link>
                        <p className="channel">{videos.snippet.channelTitle}</p>

                    </div>
                )
            })}
        </section>

    )



}





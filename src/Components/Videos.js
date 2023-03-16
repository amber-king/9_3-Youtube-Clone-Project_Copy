// TODO ---v View Page of videos 
// TODO map through videos connected to user search
// ! I can see the individual "View" page of a video. 

import React from 'react';
import { Link } from "react-router-dom";
import "./Videos.css"

    function Videos (){
        return (
        <section className="video-shown">
            <h3>Video Listing</h3>


            {/* {listedVids.length > 0 && listedVids.map((videos) => {
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

export default Videos



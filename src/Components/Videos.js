// TODO ---v View Page of videos 
// TODO map through videos connected to user search
// ! I can see the individual "View" page of a video. The URL should be /videos/:id where :id is the video ID from the Youtube API. The page should have:


import React from 'react';
import { Link } from "react-router-dom";
import "./Videos.css"

export default function videoViewPage({ videos,search }) {
    return (
        <section className="video-shown">
            {videos.map((video, index) => {
                return (
                    <div key={index} className="loaded-video">
                        <Link to={`/video/${video.id.videoId}}`}>
                            <img src={video.snippet.thumbnails.high.url} alt={search} />
                            <p>{video.snippet.title}</p>
                        </Link>
                    </div>
                )
            })}
        </section>

    )
}





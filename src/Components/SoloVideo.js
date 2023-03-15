// TODO ---v Selected video the user searched
// ! The individual video view.
// ! This video view should, at minimum, have a playable video from YouTube.

// ? fetching the selected video via users search; using api key w/i fecth info
// ? make a state for search & user search 


import React, { useEffect, useState } from 'react'
import Youtube from "react-youtube"
import { useParams } from "react-router-dom"


export default function SoloVideo({ solovid }) {
    console.log("test")
    const { id } = useParams()

    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({
        commenter: "",
        comment: "",
    })
    function handleTextChange(event) {
        setNewComment({ ...newComment, [event.target.id]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setComments([...comments, newComment])
        setNewComment({
            commenter: "",
            comment: "",
        })
    }

    const storageComments = JSON.parse(window.localStorage.getItem(id))


    useEffect(() => {
        window.localStorage.setItem(id, JSON.stringify(comments))
    }, [id, comments])



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

    return (
        <div className="clicked-vid">
            <h3>Selected Video</h3>
            <Youtube videoId={id} />
            <form onSubmit={handleSubmit}>
                <label htmlFor="commenter">
                    Name:{""}
                    <input
                        type="text"
                        id="commenter"
                        value={newComment.commenter}
                        onChange={handleTextChange}>

                    </input>
                </label>
                <label htmlFor="comment">
                    {""}
                    Comment:{""}
                    <input
                        type="text"
                        id="comment"
                        value={newComment.comment}
                        onChange={handleTextChange}>

                    </input>
                    {""}
                </label>
                <button type="submit">Comment Added</button>
                <ul id="comments-here"></ul>
            </form>
            {storageComments?.map((comment, after) => {
                return (
                    <li id={after}>
                        <p>
                            {comment.commenter} ➡️ {comment.comment}
                        </p>
                    </li>
                )
            })}
        </div>
    )


}



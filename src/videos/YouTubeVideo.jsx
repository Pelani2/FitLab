import React from "react";
import ReactPlayer from "react-player";
import "../styles/YouTubeVideoStyles.css";

const YouTubeVideo = (props) => { 
    return(
        <div className="player-wrapper">
            <ReactPlayer 
                className="react-player"
                url={props.url}
                height="250px"
                width="250px"
            />
        </div>
    )
}

export default YouTubeVideo;
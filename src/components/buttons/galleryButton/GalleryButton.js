import React from "react";
import "../../../styles/GalleryButton.css";

export default function GalleryButton({
    text, click
}) {
    return(
        <button 
            onClick={click}
            className="gallery-button"
        >
            {text}
        </button>
    );
};
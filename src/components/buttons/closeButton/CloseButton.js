import React from "react";
import "../../../styles/CloseButtonStyles.css";

export default function CloseButton({
    text, closeFunc
}) {
    return(
        <button className="close-button" onClick={closeFunc} >
            {text}
        </button>
    );
}
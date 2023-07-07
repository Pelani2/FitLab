import React from "react";
import "../../../styles/ApplyNowButtonStyles.css";

export default function ApplyNowButton({
    text
}) {
    return(
        <button className="apply-now__button" >
            {text}
        </button>
    );
}
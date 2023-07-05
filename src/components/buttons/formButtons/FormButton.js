import React from "react";
import "../../../styles/FormButtonStyles.css";

export default function Button({text}) {
    return(
        <button className="form-button" >
            {text}
        </button>
    );
}
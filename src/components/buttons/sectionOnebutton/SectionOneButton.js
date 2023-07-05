import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/SectionOneButton.css";

export default function SectionOneButton({text}) {
    return(
        <Link  
            className="section-one__link"
            to="/descriptionpage"
        >
            {text}
        </Link>
    );
}
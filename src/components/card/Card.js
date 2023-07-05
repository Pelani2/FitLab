import React from "react";
import "../../styles/CardStyles.css";

export default function Card({
    name, 
    personality, 
    job, 
    image, 
    ratingStar
}) {
    return(
        <div>
            <img 
                src={image} 
                alt="cardimage"
                className="card__image"
            />
            <p className="card__name">
                {name}
            </p>
            <p className="card__status">
                {personality}
            </p>
            <p className="card__position" >
                {job}
            </p>
            <div className="card__rating" >
                Rating: 
                <img src={ratingStar} alt="star"/>
                <img src={ratingStar} alt="star"/>
                <img src={ratingStar} alt="star"/>
                <img src={ratingStar} alt="star"/>
                <img src={ratingStar} alt="star"/>
            </div>
        </div>
    );
}
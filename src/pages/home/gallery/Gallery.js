import React from "react";
import "../../../styles/GalleryStyles.css";
import { useState } from "react";
import GalleryButton from "../../../components/buttons/galleryButton/GalleryButton";

export default function Gallery() {
    const images = [
        "https://upgradedpoints.com/wp-content/uploads/2021/02/Gym.jpg",
        "https://www.aestheticascetics.com/wp-content/uploads/2020/08/Empty-Gym-scaled.jpg",
        "https://www.laviezine.com/wp-content/uploads/2015/11/Wills-Gym.jpeg",
        "https://images2.alphacoders.com/692/thumb-1920-692040.jpg",
        "https://static.payasugym.com/upload/homepage/gym/Xercise4less.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return(
        <div className="gallery" >
            <div className="gallery__wrapper" >
                <img 
                    src={images[currentImageIndex]}
                    alt="gymimage"
                />
                <div className="gallery__buttons" >
                    <GalleryButton 
                        text="Back"
                        click={handlePreviousImage}
                    />
                    <GalleryButton 
                        text="Next"
                        click={handleNextImage}
                    />
                </div>
            </div>
        </div>
    );
}
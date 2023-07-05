import React from "react";
import "../../styles/DescriptionPageStyles.css";
import Gym from "../../assets/images/gym.webp";

export default function DescriptionPage() {
    return(
        <div className="description" >
            <img 
                alt="logo"
                src={Gym}
                className="description__image"
            />

            <p className="description__p1" >
                Step inside our state-of-the-art facility, designed to harmonize with the island's natural surroundings. With panoramic views of the ocean and open-air workout areas, you'll find yourself motivated and inspired from the moment you walk through our doors. Our team of expert trainers and instructors are dedicated to guiding you through personalized fitness programs, tailored to your specific needs and preferences.
            </p>

            <p className="description__p2" >
                From high-intensity workouts to serene yoga sessions on the beach, Island FitLab offers a wide range of classes and training options that will challenge and rejuvenate both your body and mind. Come embark on a fitness journey like no other and discover the perfect blend of tropical bliss and physical well-being at Island FitLab!
            </p>
        </div>
    );
}
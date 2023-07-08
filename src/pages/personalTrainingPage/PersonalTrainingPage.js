import React, { useState } from "react";
import "../../styles/PersonalTrainingPageStyles.css";
import StrengthTraining from "../../assets/images/strength.jpg";
import HIITTraining from "../../assets/images/HIIT.jpg";
import YogaTraining from "../../assets/images/yoga flow.jpg";
import PilatesTraining from "../../assets/images/core power pilates.jpg";
import KickboxingCardioTraining from "../../assets/images/cardio kickboxing.jpg";

export default function PersonalTrainingPage() {
    const [trainingName, setTrainingName] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    const generateTraining = () => {
        const trainings = [
            {
                name: "Strength & Conditioning",
                description: "Build strenth and improve overall conditioning through variety of exercises and techniques",
                duration: "60 minutes",
                intensity: "High",
                image: StrengthTraining,
            },
            {
                name: "HIIT Circuit",
                description: "Experience a high-intensity interval training (HIIT) workout that targets multiple muscle groups for maximum calorie burn.",
                duration: "45 minutes",
                intensity: "Very high",
                image: HIITTraining,
            },
            {
                name: "Yoga Flow & Flexibility Class",
                description: "Experience a dynamic yoga practice that combines fluid movements and breathwork to improve flexibility, strength, and balance. This class focuses on enhancing body awareness and promoting a sense of inner calm and relaxation.",
                duration: "60 minutes",
                intensity: "Moderate",
                image: YogaTraining,
            },
            {
                name: "Core Power Pilates",
                description: "Engage your core and strengthen your entire body with Core Power Pilates. This class combines Pilates exercises with a focus on building core strength, improving posture, and enhancing flexibility. Develop long, lean muscles and improve overall body stability.",
                duration: "45 minutes",
                intensity: "Moderate",
                image: PilatesTraining,
            },
            {
                name: "Cardio Kickboxing Workout",
                description: "Get ready to sweat and unleash your inner fighter with a high-energy cardio kickboxing workout. This class combines martial arts-inspired moves, punches, and kicks to provide an intense full-body workout. Improve cardiovascular endurance, coordination, and strength while having fun.",
                duration: "60 minutes",
                intensity: "High",
                image: KickboxingCardioTraining,
            },
        ];

        const randomIndex = Math.floor(Math.random() * trainings.length);
        const randomTraining = trainings[randomIndex];

        setTrainingName(randomTraining);
        setButtonClicked(true);
    };

    return(
        <div>
            <button
                onClick={generateTraining}
                className="generate-button"

            >
                Generate Your Training
            </button>
            {trainingName && (
                <div className="training__info" >
                    <h2 className="training__title">
                        {trainingName.name}
                    </h2>
                    <p className="training__description" >
                        {trainingName.description}
                    </p>
                    <p className="training__duration" >
                        Duration: {trainingName.duration}
                    </p>
                    <p className="training__intensity">
                        Intensity: {trainingName.intensity}
                    </p>
                    <img 
                        alt="training"
                        src={trainingName.image}
                    />
                </div>
            )}
        </div>
    );
}
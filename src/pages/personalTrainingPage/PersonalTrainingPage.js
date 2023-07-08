import React, { useState } from "react";
import "../../styles/PersonalTrainingPageStyles.css";

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
            },
            {
                name: "HIIT Circuit",
                description: "Experience a high-intensity interval training (HIIT) workout that targets multiple muscle groups for maximum calorie burn.",
                duration: "45 minutes",
                intensity: "Very high",
            },
            {
                name: "Yoga Flow & Flexibility Class",
                description: "Experience a dynamic yoga practice that combines fluid movements and breathwork to improve flexibility, strength, and balance. This class focuses on enhancing body awareness and promoting a sense of inner calm and relaxation.",
                duration: "60 minutes",
                intensity: "Moderate",
            },
            {
                name: "Core Power Pilates",
                description: "Engage your core and strengthen your entire body with Core Power Pilates. This class combines Pilates exercises with a focus on building core strength, improving posture, and enhancing flexibility. Develop long, lean muscles and improve overall body stability.",
                duration: "45 minutes",
                intensity: "Moderate",
            },
            {
                name: "Cardio Kickboxing Workout",
                description: "Get ready to sweat and unleash your inner fighter with a high-energy cardio kickboxing workout. This class combines martial arts-inspired moves, punches, and kicks to provide an intense full-body workout. Improve cardiovascular endurance, coordination, and strength while having fun.",
                duration: "60 minutes",
                intensity: "High",
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
                disabled={buttonClicked}
            >
                Generate Your Training
            </button>
            {trainingName && (
                <div className="training-info" >
                    <h2>
                        {trainingName.name}
                    </h2>
                    <p>
                        {trainingName.description}
                    </p>
                    <p>
                        Duration: {trainingName.duration}
                    </p>
                    <p>
                        Intensity: {trainingName.intensity}
                    </p>
                </div>
            )}
        </div>
    );
}
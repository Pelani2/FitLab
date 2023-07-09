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
    const [popupVisible, setPopupVisible] = useState(false);

    const openPopup = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const generateTraining = () => {
        const trainings = [
            {
                name: "Strength & Conditioning",
                description: "Build strength and improve overall conditioning through variety of exercises and techniques",
                duration: "60 minutes",
                intensity: "High",
                image: StrengthTraining,
                exercises: {
                    exercise1: "Squats", 
                    exercise2: "Bench Press",
                    exercise3: "Deadlifts",
                    exercise4: "Shoulder Press",
                    exercise5: "Pull-Ups"
                }
            },
            {
                name: "HIIT Circuit",
                description: "Experience a high-intensity interval training (HIIT) workout that targets multiple muscle groups for maximum calorie burn.",
                duration: "45 minutes",
                intensity: "Very high",
                image: HIITTraining,
                exercises: {
                    exercise1: "Burpees", 
                    exercise2: "Mountain Climber",
                    exercise3: "Jump Squats",
                    exercise4: "High Knees",
                    exercise5: "Plank Jacks"
                }
            },
            {
                name: "Yoga Flow & Flexibility Class",
                description: "Experience a dynamic yoga practice that combines fluid movements and breathwork to improve flexibility, strength, and balance. This class focuses on enhancing body awareness and promoting a sense of inner calm and relaxation.",
                duration: "60 minutes",
                intensity: "Moderate",
                image: YogaTraining,
                exercises: {
                    exercise1: "Sun Salutations", 
                    exercise2: "Warrior Pose",
                    exercise3: "Triangle Pose",
                    exercise4: "Forward Folds",
                    exercise5: "Pigeon Pose"
                }
            },
            {
                name: "Core Power Pilates",
                description: "Engage your core and strengthen your entire body with Core Power Pilates. This class combines Pilates exercises with a focus on building core strength, improving posture, and enhancing flexibility. Develop long, lean muscles and improve overall body stability.",
                duration: "45 minutes",
                intensity: "Moderate",
                image: PilatesTraining,
                exercises: {
                    exercise1: "Hundred", 
                    exercise2: "Roll-Up",
                    exercise3: "Single-leg Strength",
                    exercise4: "Plank",
                    exercise5: "Teaser"
                }
            },
            {
                name: "Cardio Kickboxing Workout",
                description: "Get ready to sweat and unleash your inner fighter with a high-energy cardio kickboxing workout. This class combines martial arts-inspired moves, punches, and kicks to provide an intense full-body workout. Improve cardiovascular endurance, coordination, and strength while having fun.",
                duration: "60 minutes",
                intensity: "High",
                image: KickboxingCardioTraining,
                exercises: {
                    exercise1: "Jab-Cross", 
                    exercise2: "Front Kicks",
                    exercise3: "Hooks",
                    exercise4: "Roundhouse Kicks",
                    exercise5: "Jumping Jacks"
                }
            },
        ];

        const randomIndex = Math.floor(Math.random() * trainings.length);
        const randomTraining = trainings[randomIndex];

        setTrainingName(randomTraining);
        setButtonClicked(true);
    };

    return(
        <div className="training__container" >
            <button
                onClick={generateTraining}
                className="generate-button"
                disabled={buttonClicked}
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
                    <a 
                        href="#" 
                        onClick={openPopup} 
                    >
                        <img 
                            alt="training"
                            src={trainingName.image}
                            className="training__image"
                        />
                    </a>
                    {popupVisible && (
                        <div className="popup__container" >
                            <div className="popup__content" >
                                <div className="popup__workout" >
                                    <h1 className="workout__title" >
                                        Workout
                                    </h1>
                                    <p className="workout__exercise" >
                                        {trainingName.exercises.exercise1}
                                    </p>
                                    <p className="workout__exercise" >
                                        {trainingName.exercises.exercise2}
                                    </p>
                                    <p className="workout__exercise" >
                                        {trainingName.exercises.exercise3}
                                    </p>
                                    <p className="workout__exercise" >
                                        {trainingName.exercises.exercise4}
                                    </p>
                                    <p className="workout__exercise" >
                                        {trainingName.exercises.exercise5}
                                    </p>
                                </div>
                                <button 
                                    onClick={closePopup} 
                                    className="close-button"
                                >
                                    Close 
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
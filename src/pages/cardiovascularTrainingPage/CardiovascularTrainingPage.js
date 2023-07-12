import React, { useState } from "react";
import "../../styles/CardiovascularTrainingPageStyles.css";

export default function CardiovascularTrainingPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    const handlePopupClose = () => {
        setSelectedItem(null);
    }

    return(
        <div className="cardiovascular-container" >
            <h1 className="cardiovascular-title" >
                Cardiovascular Training
            </h1>

            <div className="cardiovascular-section" >
                <h2 className="cardiovascular-section__title" >
                    What is Cardiovascular Training
                </h2>
                <p className="cardiovascular-section__description" >
                    Cardiovascular training, also known as cardio or aerobic exercise,
                    refers to physical activities that increase the heart rate and
                    breathing rate for a sustained period. It aims to improve the
                    efficiency of the cardiovascular system, including the heart, lungs,
                    and blood vessels.
                </p>
                <p className="cardiovascular-section__details" >
                    Regular cardiovascular training has numerous benefits for overall
                    health and fitness. It helps strengthen the heart, improves lung
                    capacity, increases endurance, and promotes weight loss. Cardiovascular
                    exercises can include activities such as running, swimming, cycling,
                    and dancing.
                </p>
            </div>

            <div className="cardiovascular-section">
                <h2 className="cardiovascular-section__title">
                    Benefits of Cardiovascular Training
                </h2>
                <p className="cardiovascular-section__description">
                    Engaging in regular cardiovascular training can provide various
                    benefits for both physical and mental well-being. Some of the key benefits include:
                </p>
                <ul className="cardiovascular-section__details">
                    <li onClick={() => handleItemClick("Improved cardiovascular health")} >
                        Improved Cardiovascular Health
                    </li>
                    <li onClick={() => handleItemClick("Increased stamina and endurance")} >
                        Increased stamina and endurance
                    </li>
                    <li onClick={() => handleItemClick("Weight loss managment")} >
                        Weight loss managment
                    </li>
                    <li onClick={() => handleItemClick("Reduced risk of chronic diseases")} >
                        Reduced risk of chronic diseases
                    </li>
                    <li onClick={() => handleItemClick("Enhanced mood and reduced stress")} >
                        Enhanced mood and reduced stress
                    </li>
                </ul>
            </div>
            
            <div className="cardiovascular-section" >
                <h2 className="cardiovascular-section__title">
                    Types of Cardiovascular Training
                </h2>
                <p className="cardiovascular-section__description">
                    There are various types of cardiovascular exercises that you can
                    incorporate into your fitness routine. Some popular options include:
                </p>
                <ul className="cardiovascular-section__details">
                    <li>
                        Running or jogging
                    </li>
                    <li>
                        Swimming
                    </li>
                    <li>
                        Cycling
                    </li>
                    <li>
                        Brisk walking
                    </li>
                    <li>
                        Aerobic dance classes
                    </li>
                    <li>
                        HIIT "High-Intensity Interval Training"
                    </li>
                </ul>
                <p>
                    It's important to choose activities that you enjoy and that suit your fitness level and preferences. Remember to start gradually and gradually increase the intensity and duration of your workouts.
                </p>
            </div>
            {selectedItem && (
                <div className="cardiovascular-popup" >
                    <div className="cardiovascular-popup__content" >
                        <h3>
                            {selectedItem}
                        </h3>
                        {selectedItem === "Improved cardiovascular health" && (
                            <p>
                                Cardio info
                            </p>
                        )}
                        {selectedItem === "Increased stamina and endurance" && (
                            <p>
                                Stamina
                            </p>
                        )}
                        {selectedItem === "Weight loss managment" && (
                            <p>
                                Weight loss
                            </p>
                        )}
                        {selectedItem === "Reduced risk of chronic diseases" && (
                            <p>
                                Reduced risk
                            </p>
                        )}
                        {selectedItem === "Enhanced mood and reduced stress" && (
                            <p>
                                Enhanced mood
                            </p>
                        )}
                        <button onClick={handlePopupClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
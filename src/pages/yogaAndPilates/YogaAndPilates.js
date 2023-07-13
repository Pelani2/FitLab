import React from "react";

export default function YogaAndPilates() {
    const yogaTrainers = [
        "BKS Iyengar",
        "Kino MacGregor",
        "Sri Sri Ravi Shankar",
        "Elena Brower",
        "Tara Stiles"
    ]

    return(
        <div className="yoga__container" >
            <h2 className="yoga__title" >
                General Workouts:
            </h2>
            <div className="yoga__section" >
                <h3 className="section__title">
                    Yoga Workouts: 
                </h3>
                <ul className="section__list">
                    <li className="list__item">
                        Hatha Yoga
                    </li>
                    <li className="list__item">
                        Vinysa Yoga
                    </li>
                    <li className="list__item">
                        Ashtanga Yoga
                    </li>
                    <li className="list__item">
                        Bikram Yoga
                    </li>
                    <li className="list__item">
                        Kundalini Yoga
                    </li>
                </ul>
            </div>

            <div className="yoga__section">
                <h3 className="section__title">
                    Popular Yoga Trainers
                </h3>
                <ul className="section__list">
                    {yogaTrainers.map((trainer, index) => (
                        <li key={index} className="list__item"> {trainer} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
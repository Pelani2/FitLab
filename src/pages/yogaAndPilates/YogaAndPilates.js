import React, { useState } from "react";
import "../../styles/YogaAndPilatesStyles.css";
import BKSYsengar from "../../assets/images/yogaTrainers/BKS.jpg";
import KinoMacGregor  from "../../assets/images/yogaTrainers/kino-macgregor.jpg";
import SriSri from "../../assets/images/yogaTrainers/sri-sri.jpg";
import ElenaBrower from "../../assets/images/yogaTrainers/elena-brower.jpg";
import TaraStiles from "../../assets/images/yogaTrainers/tara stiles.jpg";

export default function YogaAndPilates() {
    const yogaTrainers = [
        {
            name: "BKS Iyengar",
            info: "BKS Iyengar is a renowned yoga teacher known for his emphasis on precision and alignment in yoga postures.",
            image: BKSYsengar,
        },
        {
            name: "Kino MacGregor",
            info: "Kino MacGregor is an international yoga teacher, author, and co-founder of the Miami Life Center.",
            image: KinoMacGregor,
        },
        {
            name: "Sri-Sri Ravi Shankar",
            info: "Sri Sri Ravi Shankar is a spiritual leader and founder of the Art of Living Foundation, which promotes yoga, meditation, and breathing techniques.",
            image: SriSri,
        },
        {
            name: "Elena Brower",
            info: "Elena Brower is a yoga instructor, speaker, and author who has contributed to various yoga and wellness publications.",
            image: ElenaBrower,
        },
        {
            name: "Tara Stiles",
            info: "Tara Stiles is a leading yoga instructor and founder of Strala Yoga, known for her approachable and inclusive style of teaching.",
            image: TaraStiles,
        }
    ]

    const [selectedTrainer, setSelectedTrainer] = useState(null);

    const handleTrainerClick = (trainer) => {
        setSelectedTrainer(trainer);
    }

    const closePopup = () => {
        setSelectedTrainer(null);
    }

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
                        <li 
                            key={index} 
                            className="list__item"
                            onClick={() => handleTrainerClick(trainer)}
                        > {trainer.name} </li>
                    ))}
                </ul>
            </div>

            {selectedTrainer && (
                <div className="trainer-info__container" >
                    <div className="trainer-info__content" >
                        <h3 className="trainer-info__title" >
                            {selectedTrainer.name}
                        </h3>
                        <p>
                            {selectedTrainer.info}
                        </p>
                        <img 
                            src={selectedTrainer.image}
                            alt="trainer"
                            className="trainer-info__image"
                        />
                        <button 
                            className="trainer-info__close"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
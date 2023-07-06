import React from "react";
import "../../styles/InfoPageStyles.css";
import { Link } from "react-router-dom";

export default function InfoPage() {
    return(
        <div className="info-container" >
            <h2>
                Information
            </h2>
            <div className="info-section" >
                <h3>
                    Gym: Island FitLab
                </h3>
                <p>
                    Island FitLab is a premier fitness facility dedicated to helping individuals achieve their fitness goals and lead a healthy lifestyle. With state-of-the-art equipment, expert trainers, and a supportive community, we provide an exceptional fitness experience for our members.
                </p>
            </div>
            <div className="info-section">
                <h3>
                    Services
                </h3>
                <ul>
                    <li>
                        <Link>
                            Personal Training
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Group Fitness Classes
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Strength and Conditioning
                        </Link>  
                    </li>
                    <li>
                        <Link>
                            Cardiovascular Training
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Yoga and Pilates
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Nutrition Counseling
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
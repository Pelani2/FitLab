import React from "react";
import "../../styles/ContentGuidePage.css";

export default function ContentGuidePage() {
    return(
        <div className="content-guide__container" >
            <h2>
                Island FitLab Content Guide
            </h2>
            <p>
                Welcome to the Island FitLab Content Guide! This guide provides you with
                the necessary information and guidelines for creating and sharing content
                related to Island FitLab on our platform. Please follow these guidelines
                to ensure consistency and maintain the high-quality standards of our brand.
            </p>
            <div className="content-guide__section" >
                <h3>
                    Brand Colors
                </h3>
                <div className="color-guide">
                    <div className="color-item">
                        <div className="color-sample" style={{background: "#6AC8FF"}} >
                            <p>
                                Sky Blue
                            </p>
                        </div>
                    </div>

                    <div className="color-item">
                        <div className="color-sample" style={{background: "#336BFF"}} >
                            <p>
                                Royal Blue
                            </p>
                        </div>
                    </div>

                    <div className="color-item">
                        <div className="color-sample" style={{background: "#1C2331"}} >
                            <p>
                                Midnight Black
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-guide__tone-of-voice">
                <h3>
                    Tone of Voice
                </h3>
                <p>
                    At Island FitLab, we strive to maintain a friendly, motivational, and
                    inclusive tone of voice in all our communications. Here are some key
                    characteristics of our tone of voice:
                </p>
                <ul>
                    <li>
                        Positive and uplifting
                    </li>
                    <li>
                        Inspiring and motivating
                    </li>
                    <li>
                        Inclusive and supporting
                    </li>
                    <li>
                        Clear and concise
                    </li>
                    <li>
                        Authentic and relatable
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}
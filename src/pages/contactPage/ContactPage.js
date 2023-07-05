import React, { useState } from "react";
import "../../styles/ContactPageStyles.css";

export default function ContactPage() {
    const [message, setMessage] = useState("");
    const [isProfanityDetected, setIsProfanityDetected] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const checkForProfanity = (text) => {
        const profanityList = [
            "Asshole",
            "Bastard",
            "Bitch",
            "Damn",
            "Fuck",
            "Dick",
            "Shit",
            "Piss",
            "Cum",
            "Retard"
        ];
        const isProfanity = profanityList.some((word) =>
            text.toLowerCase().includes(word.toLowerCase())
        );
        setIsProfanityDetected(isProfanity);
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
        checkForProfanity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isProfanityDetected) {
          alert("Profanity detected, please refrain from using inappropriate language");
        } else {
          alert("Form submitted successfully!");
          setMessage("");
          setIsProfanityDetected(false);
          setIsSubmitted(true);
        }
    }

    return(
        <div className="contact-container" >
            <h2>
                Contact Us
            </h2>
            <div className="contact-info" >
                <div className="contact-item" >
                    <h3>
                        Location
                    </h3>
                    <p>
                        123 Main Street
                    </p>
                    <p>
                        City, State, Zip
                    </p>
                </div>
                <div className="contact-item" >
                    <h3>
                        Email
                    </h3>
                    <p>
                        info@islandfitlab.com
                    </p>
                </div>
                <div className="contact-item" >
                    <h3>
                        Phone
                    </h3>
                    <p>
                        +1 (123) 456-7890
                    </p>
                </div>
            </div>

            <div className="contact-form" >
                <h3>
                    Send us a message
                </h3>
                <form onSubmit={handleSubmit} >
                    <input 
                        type="text"
                        placeholder="Your name..."
                    />
                    <input 
                        type="text"
                        placeholder="Your Email..."
                    />
                    <textarea 
                        placeholder="Your message..."
                        value={message} 
                        onChange={handleInputChange}
                        className={isProfanityDetected ? "profanity-detected" : ""}
                    ></textarea>
                    
                    {isSubmitted ? (
                        <p className="submission-message" >
                            Form submitted successfully
                        </p>
                    ) : (
                        <button
                            type="submit"
                            className={isProfanityDetected ? "disabled" : ""}
                            disabled={isProfanityDetected}
                        >
                            Submit
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
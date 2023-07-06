import React from "react";
import "../../styles/NeedHelpPageStyles.css";

export default function NeedHelpPage() {
    return(
        <div>
            <div className="need-help__container" >
                <h2>
                    Need Help?
                </h2>
                <p>
                    We're here to assist you with any questions or concerns you may have. Our dedicated support team is ready to provide you with the help you need to make the most out of your fitness journey at Island FitLab.
                </p>
                <p>
                    Please fill out the contact form below, and we'll get back to you as soon as possible.
                </p>
                <form className="need-help__contact-form" >
                    <label htmlFor="name" >
                        Name: 
                    </label>
                    <input  
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name..."
                    />

                    <label htmlFor="email" >
                        Email: 
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email..."
                    />

                    <label htmlFor="message" >
                        Message
                    </label>
                    <textarea  
                        id="message"
                        name="message"
                        placeholder="Your Message..."
                    ></textarea>
                    <button type="submit" >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
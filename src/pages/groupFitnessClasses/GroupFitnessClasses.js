import React, { useState } from "react";
import "../../styles/GroupFitnessClassesStyles.css";

export default function GroupFitnessClasses() {
    const [selectedClass, setSelectedClass] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleClassSelection = (event) => {
        setSelectedClass(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        setSelectedClass("");
        setName("");
        setEmail("");
        setPhone("");
    }

    return(
        <div className="group-fitness__container" >
            <h1 className="group-fitness__title" >
                Group Fitness Classes
            </h1>
            <form 
                onSubmit={handleSubmit} className="group-fitness__form-container" 
            >
                <div className="form-container__form-group" >
                    <label 
                        htmlFor="classSelection"             className="form-group__label" 
                    >
                        Select a class:
                    </label>
                    <select
                        id="classSelection"
                        required
                        value={selectedClass}
                        onChange={handleClassSelection}
                        className="form-group__input"
                    >
                        <option value="" >
                            Select a class
                        </option>
                        <option value="Cardio Kickboxing" >
                            Cardio Kickboxing
                        </option>
                        <option value="Yoga Flow" >
                            Yoga Flow
                        </option>
                        <option value="HIIT Circuit" >
                            HIIT Circuit
                        </option>
                        <option value="Strength and Conditioning" >
                            Strength and Conditioning
                        </option>
                    </select>
                </div>
                <div className="form-container__form-group">
                    <label 
                        htmlFor="name" 
                        className="form-group__label"
                    >
                        Name:
                    </label>
                    <input 
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={handleNameChange}
                        className="form-group__input"
                    />
                </div>
                <div className="form-container__form-group">
                    <label 
                        htmlFor="email" 
                        className="form-group__label"
                    >
                        Email:
                    </label>
                    <input 
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="form-group__input"
                    />
                </div>
                <div className="form-container__form-group">
                    <label 
                        htmlFor="phone" 
                        className="form-group__label"
                    >
                        Phone:
                    </label>
                    <input 
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={handlePhoneChange}className="form-group__input"
                    />
                </div>
                <button 
                    type="submit"
                    className="form-group__submit-button"
                >

                    Book Class
                </button>
            </form>
        </div>
    );
}
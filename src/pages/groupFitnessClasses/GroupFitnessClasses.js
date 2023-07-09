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
        <div>
            <h1>
                Group Fitness Classes
            </h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="classSelection" >
                        Select a class:
                    </label>
                    <select
                        id="classSelection"
                        required
                        value={selectedClass}
                        onChange={handleClassSelection}
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
                <div>
                    <label htmlFor="name" >
                        Name:
                    </label>
                    <input 
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" >
                        Email:
                    </label>
                    <input 
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone" >
                        Phone:
                    </label>
                    <input 
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>
                <button type="submit" >
                    Book Class
                </button>
            </form>
        </div>
    );
}
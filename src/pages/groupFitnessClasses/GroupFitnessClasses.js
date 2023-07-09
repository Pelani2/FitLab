import React from "react";
import "../../styles/GroupFitnessClassesStyles.css";

export default function GroupFitnessClasses() {

    return(
        <div>
            <h1>
                Group Fitness Classes
            </h1>
            <form>
                <div>
                    <label htmlFor="classSelection" >
                        Select a class:
                    </label>
                    <select
                        id="classSelection"
                        required
                    >
                        <option>
                            Select a class
                        </option>
                        <option>
                            Cardio Kickboxing
                        </option>
                        <option>
                            Yoga Flow
                        </option>
                        <option>
                            HIIT Circuit
                        </option>
                        <option>
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
                    />
                </div>
                <button type="submit" >
                    Book Class
                </button>
            </form>
        </div>
    );
}
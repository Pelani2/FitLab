import React, { useState } from "react";
import "../../styles/SignUpPageStyles.css";

export default function SignUpPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordMatch(confirmPassword === value);
    }

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setPasswordMatch(password === value);
    }

    return(
        <div className="signup-background" >
            <div className="signup-container" >
                <h2>
                    Sign Up
                </h2>
                <form
                    action="/signup"
                    method="POST"
                >
                    <label htmlFor="name" >
                        Name: 
                    </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        required
                    />

                    <label htmlFor="email" >
                        Email: 
                    </label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        required
                    />

                    <label htmlFor="password">
                        Password: 
                    </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        className={passwordMatch ? "password-match" : "password-mismatch"}
                    />

                    <label htmlFor="confirm-password" >
                        Confirm password: 
                    </label>
                    <input 
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        required
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className={passwordMatch ? "password-match" : "password-mismatch"}
                    />

                    <input 
                        type="submit"
                        value="Sign Up"
                    />
                </form>
            </div>
        </div>
    );
}
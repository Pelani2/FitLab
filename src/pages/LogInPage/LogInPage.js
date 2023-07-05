import React, { useState } from "react";
import "../../styles/LoginStyles.css";

export default function LogInPage() {
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const haandleUsernameFocus = () => {
        setUsernameFocused(true);
    };

    const handleUsernameBlur = () => {
        setUsernameFocused(false);
    };

    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        setPasswordFocused(false);
    };

    return(
        <div className="login-background" >
             <div className="login-container" >
                <h2>
                    Login
                </h2>
                <form
                    action="/login"
                    method="POST"
                >
                    <label htmlFor="username" >
                        Username:
                    </label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        required
                        className={usernameFocused ? "focused" : ""}
                        onFocus={haandleUsernameFocus}
                        onBlur={handleUsernameBlur}
                    />
                    <label htmlFor="password" >
                        Password:
                    </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        required
                        className={passwordFocused ? "focused" : ""}
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordBlur}
                    />
                    <input 
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div> 
    );
}
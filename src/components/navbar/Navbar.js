import React from "react";
import "../../../src/styles/NavbarStyles.css";
import GymLogo from "../../assets/images/logos/gymlogo.png";
import FormButton from "../buttons/formButtons/FormButton";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar" >
            <img
                className="navbar__logo"
                alt="random logo"
                src={GymLogo}
            />

            <ul className="navbar__links" >
                <li>
                    <Link
                        to="/aboutpage" 
                        className="navbar__link"
                    >
                        About
                    </Link>
                </li>
                <li>
                     <Link
                        className="navbar__link"
                        to="/contactpage"
                     >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        className="navbar__link"
                        to="/infopage"
                    >
                        Info
                    </Link>
                </li>
            </ul>

            <div className="navbar__buttons" >
                <Link 
                    to="/loginpage" 
                >
                    <FormButton text="Log in" />
                </Link>
                <Link
                    to="/signuppage"
                >
                    <FormButton text="Sign up" />
                </Link>
            </div>
        </nav>
    );
}
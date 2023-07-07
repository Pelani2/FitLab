import React from "react";
import "../../../../../styles/FooterLinksStyles.css";
import { Link } from "react-router-dom";

export default function FooterLinks() {
    return(
        <ul className="footer-links" >
            <li>
                <Link to="/needhelppage" >
                    Need Help?
                </Link>
            </li>
            <li>
                <Link to="/contentguidepage" >
                    Content Guide
                </Link>
            </li>
            <li>
                <Link to="/termsofusepage" >
                    Terms of Use
                </Link>
            </li>
            <li>
                <Link>
                    Jobs
                </Link>
            </li>
        </ul>
    );
}
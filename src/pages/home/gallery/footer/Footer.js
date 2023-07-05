import React from "react";
import "../../../../styles/FooterStyles.css";
import MediaIcons from "./mediaIcons/MediaIcons";
import FooterLinks from "./footerLinks/FooterLinks";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer" >
            <MediaIcons />
            <FooterLinks />
            <p className="copyright" >
                &copy; {currentYear} Island FitLab. All rights reserved.
            </p>
        </footer>
    );
}
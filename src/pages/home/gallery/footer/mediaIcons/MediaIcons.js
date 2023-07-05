import React from "react";
import "../../../../../styles/MediaIconsStyles.css";
import FacebookIcon from "../../../../../assets/images/icons/facebook.png";
import InstagramIcon from "../../../../../assets/images/icons/instagram.png";
import TwitterIcon from "../../../../../assets/images/icons/twitter.png";
import WhatsAppIcon from "../../../../../assets/images/icons/whatsapp.png";
import TelegramIcon from "../../../../../assets/images/icons/telegram.png";

export default function MediaIcons() {
    return(
        <div className="footer__media-icons" >
            <img 
                src={FacebookIcon}
                alt="footericon"
            />
            <img 
                alt="footericon"
                src={InstagramIcon}
            />
            <img 
                alt="footericon"
                src={TwitterIcon}
            />
            <img 
                alt="footericon"
                src={WhatsAppIcon}
            />
            <img 
                alt="footericon"
                src={TelegramIcon}
            />
        </div>
    );
}
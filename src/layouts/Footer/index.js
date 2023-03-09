import "./index.css"
import SocialMediaLinks from "../../components/SocialMediaLinks";
import LogoIcon from "../../assests/icons/Logo";


function Footer() {
    return ( 
        <div className="footer">
            <div className="footer-logo-links-container">
              <div className="footer-logor"> 
                <LogoIcon />
              </div>
              <SocialMediaLinks />
            </div>

        </div>
     );
}

export default Footer;
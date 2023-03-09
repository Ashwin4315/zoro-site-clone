import "./index.css"
import SocialMediaLinks from "../../components/SocialMediaLinks";
import LogoIcon from "../../assests/icons/Logo";

function Navbar() {
    return (

        <div className="navbar">
                 <div className="navbar-logo-bar-container">
              <div className="navbar-logo"> 
                <LogoIcon />
              </div>
              <SocialMediaLinks />
            </div>
             </div>


    );
}

export default Navbar;
import discord from "../../assests/Images/discord.png"
import telegram from "../../assests/Images/telegram.png"
import reddit from "../../assests/Images/reddit.png"
import twitter from "../../assests/Images/twitter.png"
import "./index.css"

function SocialMediaLinks() {
    return (
        <div className="social-media-links-main-container">
                <ul className="social-media-links-container">
                    <li><img src={discord} alt="discord"  /></li>
                    <li><img src={telegram} alt="telegram"  /></li>
                    <li><img src={reddit} alt="reddit"  /></li>
                    <li><img src={twitter} alt="twitter"  /></li>
                </ul>
        </div>
    );
}

export default SocialMediaLinks;
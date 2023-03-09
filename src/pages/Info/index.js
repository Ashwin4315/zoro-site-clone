import InfoBanner from "../../components/InfoBanner";
import ViewSiteIcon from "../../assests/icons/ViewSiteIcon";
import { useNavigate } from "react-router-dom";
import "./index.css"

function Info() {

    const navigate = useNavigate();
    return (
        <div>
            <InfoBanner />
            <div className="info-view-site-container">
                <div className="info-view-site-btn-container">
                    <button className="info-view-site-btn"
                        onClick={() => navigate("/home")}
                    >
                        View Full Site <ViewSiteIcon />
                    </button>
                </div>
                <div className="info-view-site-content-container">
                    <h2>Zoro.to - The best site to watch anime online for Free</h2>
                    <p>Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites.
                        <br></br>
                        <br></br>
                        Just like free online movie streaming sites, anime watching sites are not created equally, some are better than the rest, so we've decided to build Zoro.to to be one of the best free anime streaming site for all anime fans on the world.</p>

                    <h2>2/ Is Zoro.to safe?</h2>
                    <p>Yes we are, we do have only one Ads to cover the server cost and we keep scanning the ads 24/7 to make sure all are clean, If you find any ads that is suspicious, please forward us the info and we will remove it</p>

                    <h2>3/ So what make Zoro.to the best site to watch anime free online?</h2>
                    <p>Before building Zoro.to, we've checked many other free anime sites, and learnt from them. We only keep the good things and remove all the bad things from all the competitors, to put it in our Zoro website. Let's see how we're so confident about being the best site for anime streaming:

                        <span>Safety :</span> We try our best to not having harmful ads on Zoro.
                        <br></br>
                        <br></br>
                        <span>Content library :</span> Our main focus is anime. You can find here popular, classic, as well as current titles from all genres such as action, drama, kids, fantasy, horror, mystery, police, romance, school, comedy, music, game and many more. All these titles come with English subtitles or are dubbed in many languages.
                        <br></br>
                        <br></br>

                        <span>Quality/Resolution :</span> All titles are in excellent resolution, the best quality possible. Zoro.to also has a quality setting function to make sure our users can enjoy streaming no matter how fast your Internet speed is. You can stream the anime at 360p if your Internet is being ridiculous, Or if it is good, you can go with 720p or even 1080p anime.
                        <br></br>
                        <br></br>

                        <span>Streaming experience :</span> Compared to other anime streaming sites, the loading speed at Zoro.to is faster. Downloading is just as easy as streaming, you won't have any problem saving the videos to watch offline later.
                        <br></br>
                        <br></br>

                        <span>Updates :</span> We updates new titles as well as fulfill the requests on a daily basis so be warned, you will never run out of what to watch on Zoro.
                        <br></br>
                        <br></br>

                        <span>User interface :</span> Our UI and UX makes it easy for anyone, no matter how old you are, how long have you been on the Internet. Literally, you can figure out how to navigate our site after a quick look. If you want to watch a specific title, search for it via the search box. If you want to look for suggestions, you can use the site's categories or simply scroll down for new releases.
                        <br></br>
                        <br></br>

                        <span>Device compatibility :</span> Zoro works alright on both your mobile and desktop. However, we'd recommend you use your desktop for a smoother streaming experience.
                        <br></br>
                        <br></br>

                        <span>Customer care :</span> We are in active mode 24/7. You can always contact us for any help, query, or business-related inquiry. On our previous projects, we were known for our great customer service as we were quick to fix broken links or upload requested content.
                        So if you're looking for a trustworthy and safe site for your Anime streaming, let's give Zoro.to a try. And if you like us, please help us to spread the words and do not forget to bookmark our site.
                        <br></br>
                        <br></br>
                        <br></br>


                        Thank you!</p>

                   

                </div>
            </div>
        </div>
    );
}

export default Info;
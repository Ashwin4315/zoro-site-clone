import { Link,useNavigate } from "react-router-dom";
import zoroImage from "../../assests/Images/zoro-min.png";
import logo from "../../assests/Images/logo.png";
import "./index.css"


function InfoBanner() {


    const navigate=useNavigate();

    const submitFunction =(e)=>{
        e.preventDefault()
        navigate(`/search/${e.target[0].value}`)

    }
    return (

        <div className="info-banner-container">
            <div className="info-banner-links-container">
                <ul className="info-banner-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/">TV Series</Link></li>
                    <li><Link to="/"> Most Popular</Link></li>
                    <li><Link to="/">Top Airing</Link></li>
                </ul>
            </div>

            <div className="info-banner-content-container">
                <div className="info-banner-content">
                    <img 
                    src={logo} 
                    alt="logo" 
                    width="15%" 
                    style={{ cursor: "pointer" }}
                    onClick={()=>{navigate("/home")}}
                     />
                     <form onSubmit={submitFunction}>
                    <div className="info-banner-input-container">
                       
                        <input type="text" placeholder="Search anime..." />
                        <button 
                        type="submit"
                        className="input-banner-search-btn">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        
                    </div>
                    </form>

                    <div className="input-banner-top-search">
                        <p>
                            <span>Top search:</span>&nbsp;
                            One Piece, My Hero Academia Season 6 ,Naruto, Blue LockNaruto: Shippuden, The Eminence in Shadow, Black Clover, Boruto: Naruto Next Generations, Jujutsu Kaisen (TV), Tomo-chan Is a Girl!...

                        </p>
                    </div>

                </div>
            </div>

            <div className="info-banner-zoro-image">
                <img src={zoroImage} alt="zoro" width="100%" />
            </div>
        </div>
    );
}

export default InfoBanner;
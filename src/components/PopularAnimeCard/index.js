import { useNavigate } from "react-router-dom";
import "./index.css"

function PopularAnimeCard(props) {
 

    const navigate=useNavigate()


    return (
        <div className="popular-anime-card-container">
            <div className="popular-anime-card-title">
                <h2>{props.type}</h2>
            </div>
            <div className="popular-anime-card-content-container">
                {props.data.filter((_, index) => index % 4 === 0)
                .map((shows, index) => {
                    return (
                        <div className="popular-anime-card-card" key={index}>
                            <div className="popular-anime-card-img">
                            <img src={shows.images.jpg.image_url} alt={shows.title} />
                            </div>
                            <div className="popular-anime-card-content">
                                <div className="popular-anime-card-card-title">
                                <h2
                                onClick={()=>navigate(`/detail/${shows.mal_id}`)}
                                >{shows.title}</h2>
                                </div>
                                <div className="popular-anime-card-info">
                                <p>{shows.type}</p>
                                <p>Episode:{shows.episodes}</p>
                                </div>
                            </div>

                        </div>
                    )

                })}
            </div>
        </div>

    );
}

export default PopularAnimeCard;
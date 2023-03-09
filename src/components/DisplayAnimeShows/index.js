import { useNavigate } from "react-router-dom";
import "./index.css"


function DisplayAnimeShows(props) {

    const navigate=useNavigate()

    const StringConvertFunction = (str) => {
        
        let title
        if (str.length > 30)
        { 
            title = str.slice(0, 30) + "...";
        }
        else {
            title = str
        }
        return title

    }
    return (
        <div className="display-main-container">
            <div className="display-type">
                <h2>{props.type}</h2>
                <button>View More<span className="material-symbols-outlined">chevron_right</span></button>
            </div>
            <div className="display-shows-container">
                {props.data.map((shows, index) => {
                    return (
                        <div className="display-shows-card" key={index}>
                            <div className="display-shows-card-image"
                            onClick={()=>navigate(`/detail/${shows.mal_id}`)}
                            >
                                <img src={shows.images.jpg.image_url} alt={shows.title} />
                            </div>

                            <div className="display-shows-card-content">
                            {shows.subOrDub && shows.episodeNum !== undefined ?
                                    (<div className="display-shows-info">
                                        <p>{shows.type}</p>
                                        <p>Episode:{shows.episodes}</p>
                                    </div>) : null
                                }
                                <h2
                                onClick={()=>navigate(`/detail/${shows.mal_id}`)}
                                >{StringConvertFunction(shows.title)}</h2>
                                
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    );
}

export default DisplayAnimeShows;
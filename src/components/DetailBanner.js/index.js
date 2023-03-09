import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./index.css"

function DetailBanner({ anime, animeImg, genres }) {

    const navigate = useNavigate()
  
    return (
        <>
            <div className="detail-banner-main-container">
                <div className="detail-banner-sub-container">
                    <div className="detail-banner-image">
                        <img src={animeImg} alt={anime.title} />
                    </div>
                    <div className="detail-banner-content">
                        <div className="detail-banner-top">
                            <p>Home</p>
                            <p>{anime.type}</p>
                            <p>{anime.title}</p>
                        </div>
                        <h2>{anime.title}</h2>

                        <div className="detail-banner-content-type-info">
                            <p>{anime.type}</p>
                            <p>Episodes:&nbsp;{anime.episodes}</p>
                            <p>Duration:&nbsp;{anime.duration}</p>
                        </div>
                        <div>
                            <Button
                                click={() => navigate("/home")}
                                bg="#cae962"
                                color="black"
                                text="Watch now"
                            />
                            <Button
                                click={() => navigate("/home")}
                                bg="white"
                                color="black"
                                text={" Add To List"}
                            />
                        </div>
                        <p>{anime.synopsis}</p>
                    </div>
                </div>
                <div className="detail-banner-info">
                    <p><span>Janpanese:</span>&nbsp;{anime.title_japanese}</p>
                    <p><span>Synonyms:</span>&nbsp;{anime.title_synonyms}</p>
                    <p><span>Duration:</span>&nbsp;{anime.duration}</p>
                    <p><span>Premiered:</span>&nbsp;{`${anime.season} ${anime.year}`}</p>
                    <p><span>Status:</span>&nbsp;{anime.status}</p>
                    <p><span>Score:</span>&nbsp;{anime.score}</p>

                    <div className="detail-banner-genre-btn-container">
                        <p>Genre:&nbsp;{genres.map((genre, index) => {
                            return (
                                <button
                                    onClick={()=>navigate(`/genre/${genre.name}/${genre.mal_id}`)}
                                    key={index}
                                    className="detail-banner-genre-btn">
                                    {genre.name}
                                </button>
                            )
                        })}</p>
                    </div>
                </div>
            </div>

            <div className="detail-banner-wrapper-container"
                style={{
                    backgroundImage: `url(${animeImg})`,
                }}
            ></div>
        </>
    );
}

export default DetailBanner;
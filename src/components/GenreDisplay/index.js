import { useNavigate } from "react-router-dom";
import "./index.css"

function GenreDisplay({genres}) {

    const navigate=useNavigate()


    return (
        <div className="genre-display-main-container">
            <h2>Genres</h2>
            <div className="genre-display-types">
            {genres.map((genre,index)=>{
                return(
                    <button 
                    key={index}
                    onClick={()=>navigate(`/genre/${genre.name}/${genre.mal_id}`)}
                    >
                        {genre.name}
                    </button >
                )
            })}
            </div>

        </div>
    );
}

export default GenreDisplay;


import { useParams } from "react-router-dom";
import useGetAnime from "../../hooks/useGetAnime"
import DisplayAnimeShows from "../../components/DisplayAnimeShows/index";
import Loader from "../../components/Loader/index"
import Layout from "../../layouts/index.js";
import "./index.css"


function Search() {

const {nameid} =useParams()

const [search,loadingsearch]=useGetAnime(`https://api.jikan.moe/v4/anime?q=${nameid}&sfw`)
    return (  

       <>
        {loadingsearch?<Loader />:
        <Layout >
        <div>
        <div className="search-container">
        <DisplayAnimeShows data={search}  type={`Search results for: ${nameid}`}/>
        </div>
        </div>
        </Layout>
        }
       </>
    );
}

export default Search;
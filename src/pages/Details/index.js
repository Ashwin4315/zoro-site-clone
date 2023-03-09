import { useParams } from "react-router-dom";
import useGetAnime from "../../hooks/useGetAnime"
import useSearchAnime from "../../hooks/useSearchAnime"
import DetailBanner from "../../components/DetailBanner.js";
import DisplayAnimeShows from "../../components/DisplayAnimeShows/index";
import Loader from "../../components/Loader/index"
import Layout from "../../layouts/index.js";
import "./index.css"
import PopularAnimeCard from "../../components/PopularAnimeCard/index";


function Details() {

const {id} =useParams()

const [popular,loadingpopular]=useGetAnime("https://api.jikan.moe/v4/top/anime")
const [animedetail,animeImg,genres,loadingdetail]=useSearchAnime(`https://api.jikan.moe/v4/anime/${id}`)


    return (  

       <>
        {loadingdetail || loadingpopular?<Loader />:
        <Layout >
        <div>
        <DetailBanner anime={animedetail} animeImg={animeImg} genres={genres}/>
        <div className="detail-recommendation-container">
        <DisplayAnimeShows data={popular}  type="Recommended For You"/>
        <PopularAnimeCard data={popular} type="Most Popular"/>
        </div>
        </div>
        </Layout>
        }
       </>
    );
}

export default Details;
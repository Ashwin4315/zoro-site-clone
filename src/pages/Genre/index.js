import { useParams } from "react-router-dom";
import useGetAnime from "../../hooks/useGetAnime"
import DisplayAnimeShows from "../../components/DisplayAnimeShows/index";
import Loader from "../../components/Loader/index"
import Layout from "../../layouts/index.js";
import "./index.css"
import PopularAnimeCard from "../../components/PopularAnimeCard";
import { useState, useEffect } from 'react';
import GenreDisplay from "../../components/GenreDisplay";


function Genre() {

    const { genreid, genrename } = useParams()

    const url = `https://api.jikan.moe/v4/anime?genres=${genreid}`;

    const [anime,loadinganime] = useGetAnime(url)

    const [airing] = useGetAnime("https://api.jikan.moe/v4/seasons/now")



    const [genres, setgenres] = useState([]);

    useEffect(() => {
        const fetchanime = async () => {
            try {
                const options = { method: 'GET' }

                const response = await fetch("https://api.jikan.moe/v4/genres/anime", options)
                const data = await response.json();
                setgenres(data.data)

            }
            catch (error) {
                console.log(error)
            }

        }
        setTimeout(() => { fetchanime() }, 1000)
    }, [])





    return (

        <>
            {loadinganime ? <Loader /> :
                <Layout >
                    <div>
                        <div className="genre-container">
                            <DisplayAnimeShows data={anime} type={genrename} />
                            <div className="genre-side-container">
                                <GenreDisplay genres={genres} />
                                <PopularAnimeCard data={airing} type="Top Airing" />
                            </div>

                        </div>
                    </div>
                </Layout>
            }
        </>
    );
}

export default Genre;
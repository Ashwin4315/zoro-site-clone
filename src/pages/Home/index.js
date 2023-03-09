import DisplayAnimeShows from "../../components/DisplayAnimeShows";
import Loader from "../../components/Loader";
import PopularAnimeCard from "../../components/PopularAnimeCard";
import Carousel from "../../components/Carousel";
import useGetAnime from "../../hooks/useGetAnime";
import Layout from "../../layouts";
import "./index.css"
import GenreDisplay from "../../components/GenreDisplay";
import React, { useState, useEffect } from 'react';



function Home() {

  const [popular, loadingpopular] = useGetAnime("https://api.jikan.moe/v4/top/anime")
  const [latest] = useGetAnime("https://api.jikan.moe/v4/seasons/upcoming")
    const [airing] = useGetAnime("https://api.jikan.moe/v4/seasons/now")


  const [genres, setgenres] = useState([]);


  useEffect(() => {
    const fetchanime = async() => {
        try {
        const options = {
            method: 'GET'
            
        }

            const response = await fetch("https://api.jikan.moe/v4/genres/anime", options)
            const data = await response.json();
            setgenres(data.data)
        }
        catch (error) {
            console.log(error)
        }
        
     
    }

    setTimeout(()=>{fetchanime()},1000)
    

}, [])

  return (
    <>

      {
        (loadingpopular  ) 
          ? <Loader />
          : <Layout>
            <div className="home-container">
              <Carousel />
            <div className="home-sub-container">
              <div className="home-content-container">
                <div className="home-content-shows">
                  <DisplayAnimeShows data={airing} type="Airing Anime" />
                  <DisplayAnimeShows data={popular} type="Popular Anime" />
                  <DisplayAnimeShows data={latest} type="Upcoming Anime" />
                </div>
                <div className="home-content-random-list">
                  <GenreDisplay genres={genres} />
                  <PopularAnimeCard data={popular} type="Most Popular" />
                  <PopularAnimeCard data={airing} type="Top Airing" />

                </div>
              </div>
            </div>
            </div>
          </Layout>
      }

    </>
  )

}

export default Home;
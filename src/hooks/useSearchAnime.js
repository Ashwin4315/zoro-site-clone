import { useEffect, useState } from "react";



function useSearchAnime(url) {
    const [anime, setanime] = useState({});
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);

    const [animeImg, setanimeImg] = useState("");
    const [genres, setgenres] = useState([]);

    //for some reason I cannot access the image_url which is nested inside an object in state which gives undefined but after i change the code it works so I created another state to hold img value
  
    


    useEffect(() => {
        const fetchanime = async() => {
            try {
            
            setloading(true)
            const options = {
                method: 'GET'
              
            }

                const response = await fetch(url, options)
                const data = await response.json();
                setanime(data.data)
                setanimeImg(data.data.images.jpg.image_url)
                setgenres(data.data.genres)
            }
            catch (error) {
                setloading(true)
                console.log(error)
            }
            setloading(false)
         
        }
        fetchanime()
       
    }, [url])

    return [anime,animeImg,genres,loading,error]
}

export default useSearchAnime;
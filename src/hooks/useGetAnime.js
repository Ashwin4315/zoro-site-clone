import { useEffect, useState } from "react";



function useGetAnime(url) {
    const [anime, setanime] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    


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
                }
                catch (error) {
                    console.log(error)
                    seterror(error)
                }
                setloading(false)
                
             
            }
        

            fetchanime()
      
        
    }, [url])

    return [anime,loading,error]
}

export default useGetAnime;
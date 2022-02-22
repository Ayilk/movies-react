import { useState } from "react";
import { useEffect } from "react";
import { useParams} from "react-router";
import { Spinner } from "../componentes/Spinner";
// import { useQuery } from "../Hooks/useQuery";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
//import movie from "./movie.json";
import styles from "./MovieDetails.module.css";


export function MovieDetails(){
    const { movieId } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [movie, setMovie] = useState(null);
    
    

    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId).then(data => {
           setMovie(data);
           setIsLoading(false);
        })
    },[movieId]);

    if(isLoading){
        return <Spinner/>
    }

    const imageUrl = getMovieImg(movie.poster_path, 500)

    // if(!movie){ return null; }

    return(
        <div className={styles.detailsContainer}> 
            <img 
            className={styles.col + " " + styles.movieImage}
            src={imageUrl} 
            alt={movie.title}/>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem} ><strong>Title: </strong> {movie.title}</p>
                <p><strong>Description: </strong>  {movie.overview}</p>
                <p><strong>Genres: </strong> {movie.genres.map(el => el.name).join(", ")} </p>
            </div>
        </div>
    )
}
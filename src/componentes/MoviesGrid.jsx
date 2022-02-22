import {  useEffect, useState } from "react";
//import { useQuery } from "../Hooks/useQuery"; 
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";



export function MoviesGrid({ search }) {
  //let movies = [];
  const [movies, setMovies] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ page, setPage] = useState(1);
  const [ hasMore, setHasMore ] = useState(true);

  // const query = useQuery();
  // const search = query.get("search");
  // console.log(search)
  // const movies = moviesState[0];
  // const setMovies = moviesState[1];
  //const [movies, setMovies] = moviesState;
  

   useEffect(()=>{
     setIsLoading(true);
     const searchUrl = search 
     ? "/search/movie?query=" + search + "&page=" + page
     : "/discover/movie?page=" + page;  
     get(searchUrl)
      .then(data => {
        setMovies(prevMovies => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages);
        setIsLoading(false);
        });
      }, [ search, page ])

      if(!isLoading && movies.length === 0 ){
        return <Empty/>
      }

    

  return (
    <InfiniteScroll 
     dataLength={movies.length}
     hasMore= { hasMore }
     next = {() => setPage((prevPage) => prevPage + 1)}
     loader = {<Spinner/>}
     >
    <ul className={styles.moviesGrid}>
      {movies.map(movie => 
      <MovieCard key = {movie.id} movie={movie}/> )}
    </ul>
    </InfiniteScroll>
  );
}

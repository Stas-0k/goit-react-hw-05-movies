import { getMovieDetails } from 'api';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(631842);
 
    

  useEffect(() => {
    async function getFilms() {
      try {
        const response = await getMovieDetails(id);          
        setMovie(response)      
       
      } catch (error) {
        console.log(error);
      }
    } 
    getFilms()
    
  },[id] );
    
  
  const date = new Date(movie.release_date).getFullYear()
  const score = Math.round(movie.vote_average * 10)
  
 
 
  return (
    <div>   
      
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h1>{movie.title} ({date})</h1>
      <p>User score: {score}%</p>
      <p>Overwiew: {movie.overview } </p>
      <p>Genres: {movie.genres && movie.genres.map(({ name }) => name).join(', ')}</p> 
      <Link to='cast'>Cast</Link>
      <Link to='reviews'>Reviews</Link>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

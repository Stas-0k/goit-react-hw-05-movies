import { getMovieDetails } from 'api';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import css from './movie-details.module.css';
import { IoArrowBackCircle } from 'react-icons/io5'


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function getFilms() {
      try {
        const response = await getMovieDetails(id);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, [id]);

  const date = new Date(movie.release_date).getFullYear();
  const score = Math.round(movie.vote_average * 10);

  return (
    <div className={css.cardContainer }>
      
      <Link to={backLink} className={css.back}><IoArrowBackCircle size={30 }/>Back</Link>
      <div className={css.card}>
        <div>
          
        <img          
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://weblinks.ru/wp-content/uploads/2021/07/1-14.jpg"}
          alt={movie.title}
          
        /> </div>
        <div className={css.cardInfo}>
          <h1>
            {movie.title} ({date})
          </h1>
          <p>User score: {score}%</p>
          <p>Overwiew: {movie.overview} </p>
          <p>
            Genres:{' '}
            {movie.genres && movie.genres.map(({ name }) => name).join(', ')}
          </p>
        </div>
      </div>
      <div className={css.buttContainer}>
      <Link to="cast" className={css.castReview}>Cast</Link>
        <Link to="reviews" className={css.castReview}>Reviews</Link>
        </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};


export default MovieDetails

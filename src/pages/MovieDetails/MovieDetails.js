import { getMovieDetails } from 'api';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import css from './movie-details.module.css';
import { IoArrowBackCircle} from 'react-icons/io5'

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(631842);
  const location = useLocation();
  const backLink = location.state?.from ?? '/goit-react-hw-05-movies';

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
      <div className={css.card }>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
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
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

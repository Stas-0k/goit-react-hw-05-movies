import { getMovieDetails } from 'api';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import css from './movie-details.module.css';
import { IoArrowBackCircle } from 'react-icons/io5'
import Loader from '../../components/Loader/Loader'


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getFilms() {
      try {
        setLoader(true)
        const response = await getMovieDetails(id);
        if (response.length !== 0) {
          setMovie(response);
        } else {
          throw new Error('Sorry, try again later.');
        }
        
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    }
    getFilms();
  }, [id]);

  const date = new Date(movie.release_date).getFullYear();
  const score = Math.round(movie.vote_average * 10);
  //console.log(location)
  return (
    <div className={css.cardContainer }>
      
      <Link to={backLink} className={css.back}><IoArrowBackCircle size={30 }/>Back</Link>
      <div className={css.card}>
        {error && <p>{error.message}</p>}
      {loader && <Loader />}
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
      <Link to="cast" className={css.castReview} state={{from: backLink }}>Cast</Link>
        <Link to="reviews" className={css.castReview} state={{from: backLink }}>Reviews</Link>
        </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};


export default MovieDetails

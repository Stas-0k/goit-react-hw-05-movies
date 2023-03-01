import { useState, useEffect } from 'react';
import { searchMovies } from '../../api';
import { MovieList } from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import css from './movies.module.css';
import Loader from '../../components/Loader/Loader'

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);


  const searchName = searchParams.get('query');

  const handleChange = evt => {
    setQuery(evt.currentTarget.value);
    
  };

  
  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query });
    setLoader(true);
  };


  useEffect(() => { 
     if (!searchName) {
      return;
    }
    async function getFilm() { 
      try {
        const response = await searchMovies(searchName)
        if (response.length !== 0) {
          setFilms(response.results)
        setQuery(searchName)
        } else {
          throw new Error('Sorry, try again later.');
        }
        
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    }getFilm()
  },[searchName])
 

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">Search</button>
      </form>
      {loader && <Loader />}
      {error && <p>{error.message}</p>}
      
      <MovieList items={films} />
    </>
  );
};

export default Movies;

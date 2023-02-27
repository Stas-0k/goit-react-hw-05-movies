import { useState } from 'react';
import { searchMovies } from '../../api'
import { MovieList } from '../../components/MovieList/MovieList'
import { useSearchParams } from 'react-router-dom'
import css from './movies.module.css'

const Movies = () => {

    const [query, setQuery] = useState('')
  const [films, setFilms] = useState([])  
   const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

    const handleChange = evt => { 
        setQuery(evt.currentTarget.value)
        setSearchParams({ name: evt.target.value })
    }

    const handleSubmit = async evt => { 
        evt.preventDefault();
        if (query.trim() === "") { 
           return alert("Enter something.")
        }
        const response = await searchMovies(query)
      setFilms(response.results)
      
        
    }

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          value={name }
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          
        />
        <button type="submit">Search</button>
          </form>
         
          <MovieList items={films} />
          
    </>
  );
};


export default Movies

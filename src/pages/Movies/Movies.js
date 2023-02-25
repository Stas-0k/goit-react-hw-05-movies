import { useState } from 'react';
import { searchMovies } from '../../api'
import { MovieList } from '../../components/MovieList/MovieList'



export const Movies = () => {

    const [query, setQuery] = useState('')
    const [films, setFilms] = useState([])

    const handleChange = evt => { 
        setQuery(evt.currentTarget.value)
        
    }

    const handleSubmit = async evt => { 
        evt.preventDefault();
        if (query.trim() === "") { 
           return alert("Enter something.")
        }
        const response = await searchMovies(query)
        setFilms(response.results)
        console.log(films)
    }
    

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">Search</button>
          </form>
          {/* <Link to={}> {films && films.map(({adult})=>adult).join(' ')}</Link> */}
          <MovieList items={films} />
          
    </>
  );
};

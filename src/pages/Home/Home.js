import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { getTrending } from '../../api';


export const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        const films = await getTrending();
        setItems(films.results);
      } catch (error) {
        console.log(error);
      }
    } getFilms()
  }, []);
    
  
    return (
      <div
        style={{display: 'flex',
          flexDirection: 'column',
        marginTop:20}}>
            <MovieList items={items} />
      </div>
  )
};

import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { getTrending } from '../../api';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getFilms() {
      try {
        const films = await getTrending();
        if (films.results.length !== 0) {
          setItems(films.results);
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
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
      <h1>Trending movies</h1>
      {error && <p>{error.message}</p>}
      {loader && <Loader />}
      <MovieList items={items} />
    </div>
  );
};

export default Home;

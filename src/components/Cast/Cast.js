import { getMovieCredits } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './cast.module.css'
import Loader from 'components/Loader/Loader';

const Cast = () => {
    const { id } = useParams();
  const [cast, setCast] = useState(null)
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);


  useEffect(() => {
    async function getFilms() {
      try {
        setLoader(true);
        const response = await getMovieCredits(id)
        if (response.length !== 0) {
          setCast(response);
        } else {
          throw new Error('Sorry, no info.');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    }
    getFilms();
  }, [id]);
  
    
  return (
    
    <div className={css.containerCast}>
      {error && <p>{error.message}</p>}
      {loader && <Loader />}
          
           {cast && cast.map(({ name, character, profile_path, cast_id }) => {return (<ul className={css.cardCast} key={cast_id}> 
               <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : "https://weblinks.ru/wp-content/uploads/2021/07/1-14.jpg"} alt={name } />  
                  <li>Name: {name} </li>
                  <li>Character: {character}</li>              
           </ul>)})}
              
          
    </div>
  );
};


export default Cast
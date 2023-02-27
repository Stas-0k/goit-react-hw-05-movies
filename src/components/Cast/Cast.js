import { getMovieCredits } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './cast.module.css'


const Cast = () => {
    const { id } = useParams();
    const[cast,setCast] = useState(null)


  useEffect(() => {
    async function getFilms() {
      try {
        const response = await getMovieCredits(id)
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, [id]);
  
    
  return (
      <div className={css.containerCast}>
          
           {cast && cast.map(({ name, character, profile_path, cast_id }) => {return (<ul className={css.cardCast} key={cast_id}> 
               <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : "https://weblinks.ru/wp-content/uploads/2021/07/1-14.jpg"} alt={name } />  
                  <li>Name: {name} </li>
                  <li>Character: {character}</li>              
           </ul>)})}
              
          
    </div>
  );
};


export default Cast
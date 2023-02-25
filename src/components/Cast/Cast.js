import { getMovieCredits } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cast = () => {
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
      <div>
          
           {cast && cast.map(({ name, character, profile_path, id }) => {return (<ul key={id}> 
               <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name } />  
                  <li>Name: {name} </li>
                  <li>Character: {character}</li>              
           </ul>)})}
              
          
    </div>
  );
};

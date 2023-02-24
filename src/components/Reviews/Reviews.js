import { getMovieReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Reviews = () => {

    const { id } = useParams();
    const[reviews,setReviews] = useState(null)


  useEffect(() => {
    async function getFilms() {
      try {
        const response = await getMovieReviews(id)
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, [id]);
    
    console.log(reviews)


    return (
        <div>
            {reviews && reviews.map(({author, content,id}) => { 
                return (
                    <ul key={id}>
                        <li>{author}</li>
                        <li>{content}</li>
                    </ul>
                )
            }) }
       </div>
   )
}
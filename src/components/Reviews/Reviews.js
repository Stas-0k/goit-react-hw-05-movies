import { getMovieReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './reviews.module.css'

const Reviews = () => {

    const { id } = useParams();
    const[reviews,setReviews] = useState(null)
  const [error, setError] = useState('');


  useEffect(() => {
    async function getFilms() {
      try {
        const response = await getMovieReviews(id)
        if (response.length !== 0) {
          setReviews(response);
        } else { 
          throw new Error ("No reviews yet.")
        }
        
      } catch (error) {
        setError(error)
        console.log(error);
      }
    }
    getFilms();
  }, [id]);
    
    console.log(reviews)


    return (
      <div>
        {error && <p>{error.message }</p> }
            {reviews && reviews.map(({author, content,id}) => { 
                return (
                    <ul className={css.reviewsCard} key={id}>
                        <li className={css.authorReview}><em className={css.author}>Author: </em>{author}</li>
                        <li>{content}</li>
                    </ul>
                )
            })}
        
       </div>
   )
}


export default Reviews
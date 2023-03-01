import { getMovieReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './reviews.module.css';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getFilms() {
      try {
        setLoader(true);
        const response = await getMovieReviews(id);

        if (response.length !== 0) {
          setReviews(response);
        } else {
          throw new Error('No reviews yet.');
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
    <div>
      {error && <p>{error.message}</p>}
      {loader && <Loader />}
      {reviews &&
        reviews.map(({ author, content, id }) => {
          return (
            <ul className={css.reviewsCard} key={id}>
              <li className={css.authorReview}>
                <em className={css.author}>Author: </em>
                {author}
              </li>
              <li>{content}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default Reviews;

import { Link, useLocation  } from 'react-router-dom'
import css from './movie-list.module.css'

export const MovieList = ({ items }) => { 
    const location = useLocation();

    return (
        <div className={css.movieList}>
            {
                items.map(item => <Link to={`/movies/${item.id}`} key={item.id} state={{from:location}}>
                    {item.title}</Link>)
            }
        </div>
    )
}
import { Link } from 'react-router-dom'
import css from './movie-list.module.css'

export const MovieList = ({ items }) => { 
    return (
        <div className={css.movieList}>
            {
                items.map(item => <Link to={`/movies/${item.id}`} key={item.id}>{item.title}</Link>)
            }
        </div>
    )
}
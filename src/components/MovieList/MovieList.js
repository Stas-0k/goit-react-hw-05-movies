import {Link } from 'react-router-dom'

export const MovieList = ({ items }) => { 
    return (
        <div>
            {
                items.map(item => <Link to={`/goit-react-hw-05-movies/movies/${item.id}`} key={item.id}>{item.title}</Link>)
            }
        </div>
    )
}
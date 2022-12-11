import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const {Title, Poster, Type, Year, imdbID} = props
  return (
    <div className="my_card">
            <div className="image">
                <img src={Poster} alt={Title} />
            </div>
            <div className='my_cord_body'>
                <p>Type: {Type}</p>
                <p>Year: {Year}</p>
            </div>
        <div className="my_card_link">
            <Link to={`/movie/${imdbID}`}><h5>{Title}</h5></Link>
        </div>


    </div>
  )
}

export default MovieCard
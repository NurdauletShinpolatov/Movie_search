import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/movies.css'

const Movie = () => {
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const [movie, setMovie] = useState({})
    const {Title, Poster, Actors, Awards, Country, Director, Genre, Language, Runtime, Year, imdbRating, imdbVotes} = movie.data

    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.omdbapi.com/?apikey=aba4f30e&i=${params.id}`)
        .then((res) => {
            setMovie(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false)
        })

    }, [])
  return (
    <div className="container">
        <div className='movie'>
            <div className="poster">
                <img src={Poster} alt="Title" />
            </div>
            <div className="info">
                <h4>{Title}</h4>
                <p>{imdbRating}</p>
            </div>
        </div>
    </div>
  )
}

export default Movie
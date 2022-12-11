import axios from 'axios'
import React, { useState } from 'react'
import Loading from '../components/Loading'
import MovieCard from '../components/MovieCard'

const Home = () => {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=aba4f30e&s=${search}`)
        .then((res) => {
            setMovies(res.data.Search);
        })
        .catch(err => console.log(err))
        .finally(() => {setLoading(false)})
    }
  return (
    <>
        <div className="background">
            <form className='searching' onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={e => setSearch(e.target.value)}
                    required
                    placeholder='type name of a movie'
                    value={search}
                />
                <button className='btn'>Submit</button>
            </form>
        </div>
        <div className="results">
            {
                loading ? (
                    <Loading />
                ) : (
                    movies && movies?.length !== 0 ? (
                        <div className='container flex'>
                            {
                                movies.map((item) => (
                                    <MovieCard key={item.imdbID} {...item}/>
                                ))
                            }
                        </div>
                    ) : (
                        <center>
                            <h2>Not found</h2>
                        </center>
                    )
                    
                    
                )
            }
        </div>
    </>

  )
}

export default Home
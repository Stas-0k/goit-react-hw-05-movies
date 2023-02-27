import axios from 'axios'


axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '177f83f5259c7f846e561f4715bd03a4'


export const getTrending = async () => { 
    try {
        const response = await axios.get(`./trending/movie/day?api_key=${API_KEY}`)
        return response.data
    } catch (error) {
        console.log(error)
    }    
}

export const searchMovies = async (query) => { 
    try {
        const response = await axios.get(`./search/movie?api_key=${API_KEY}&query=${query}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getMovieDetails = async (id) => { 
    try {
        const response = await axios.get(`./movie/${id}?api_key=${API_KEY}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getMovieCredits = async (movie_id) => { 
    try {
        const response = await axios.get(`./movie/${movie_id}/credits?api_key=${API_KEY}`)
        return response.data.cast
    } catch (error) {
        console.log(error)
    }
}

export const getMovieReviews = async (movie_id) => { 
    try {
        const response = await axios.get(`./movie/${movie_id}/reviews?api_key=${API_KEY}`)
        return response.data.results
    } catch (error) {
        console.log(error)
    }
}






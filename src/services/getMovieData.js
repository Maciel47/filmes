import { useEffect, useState } from 'react';
import axios from 'axios';
import conn from './services/conn';

const[movieData, setMovieData] = useState({
    ImgPath: '',
    Title: '',
    ReleaseDate: '',
    Rating: '',
    Description: ''
  });


function getInfo () {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
    getMovieData("movie");
    }, []);

    async function getMovieData(movieId) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${conn}`
        try {
            let resp = await axios.get(url);
            console.log(resp.data.results);
            setMovieData(resp.data.results);
        } catch (e) {

        } finally {

        }
    }
}

export default getInfo;
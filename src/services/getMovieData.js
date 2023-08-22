import axios from 'axios';
import API_KEY from './connKey';

    export default async function getMovieData(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      try {
          let resp = await axios.get(url);
          return resp.data;
      } catch (e) {

      } finally {

      }
  }

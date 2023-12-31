import axios from 'axios';
import API_KEY from './tmdbTokenAPI';
import { i18n } from '../assets/translate/i18n';
import errorWarning from './errorWarning';

export default async function getMovieData(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=${i18n.t('urlLng.language')}`
    try {
        let resp = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        return resp.data;
    } catch (errorValue) {
        return (
            errorValue = errorWarning
        )
    } finally {

    }
}
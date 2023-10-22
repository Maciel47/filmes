import React, { useState } from 'react'
import { i18n } from "../assets/translate/i18n";
import axios from 'axios';
import API_KEY from '../services/tmdbTokenAPI';
import errorWarning from '../services/errorWarning';

export default function InputSearch() {
    const [movieName, setMovieName] = useState('')
    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        const movieName = e.target.value;
        setMovieName(movieName);
    }

    async function getData() {
        const convertedName = movieName.replace(/ /, '+');
        const url = `https://api.themoviedb.org/3/search/movie?query=${convertedName}`
        try {
            let resp = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`
                }
               
            });
            setResult(resp.data)
            console.log(result)
            // return resp.data;
        } catch (errorValue) {
            return (
                errorValue = errorWarning
            )
        } finally {

        }
    }

    return (
        <>
            <input className='input-search' placeholder={i18n.t('searchMoviePage.input')} value={movieName} onChange={handleInputChange} />
            <button onClick={getData}>Buscar</button>
            {result.length > 0 ? (
                <ul>
                    {result.map((item) => (
                        <li key={item.results}>{item.original_title}</li>
                    ))}
                </ul>
            ) : (
                <p></p>
            )}
        </>
    )
}

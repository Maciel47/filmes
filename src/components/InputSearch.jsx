import React, { useState } from 'react'
import { i18n } from "../assets/translate/i18n";
import axios from 'axios';
import API_KEY from '../services/tmdbTokenAPI';
import errorWarning from '../services/errorWarning';

export default function InputSearch() {
    const [movieName, setMovieName] = useState('')
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        const typedName = e.target.value;
        const convertedName = typedName.replace(/ /g, '+');
        setMovieName(convertedName);
        console.log(movieName)
    }

    async function getData() {
        const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}`
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
        </>
    )
}

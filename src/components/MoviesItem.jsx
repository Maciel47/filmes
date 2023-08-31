import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import getMovieData from '../services/getMovieData';
import { i18n } from '../assets/translate/i18n';

function MoviesItem(props) {
    const [movieData, setMovieData] = useState({
        poster_path: '',
        original_title: '',
        title: '',
        overview: '',
    });

    async function getData() {
        let data = await getMovieData(props.moviesId);
        console.log(data)
        setMovieData({
            ...movieData,
            poster_path: data.poster_path,
            title: data.title,
            overview: data.overview
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section className='moviesSection'>
            <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} />
            <section>
                <h2>{movieData.title}</h2>
                <p>{movieData.overview}</p>
                <Button variant="info">{i18n.t('buttons.learnMoreMovie') + movieData.title}</Button>
            </section>
        </section>
    )
}

export default MoviesItem;
import { useEffect, useState } from 'react';
import getMovieData from '../services/getMovieData';
import Button from 'react-bootstrap/Button';

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
            original_title: data.original_title,
            title: data.title, //pt-br
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
                {/* en-english */}
                {/* <Button variant="primary">more about: {movieData.original_title}</Button> */}

                {/* pt-br */}
                <Button variant="primary">mais sobre: {movieData.title}</Button>
            </section>
        </section>
    )
}



export default MoviesItem;
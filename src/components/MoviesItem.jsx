import { useEffect, useState } from 'react';
import getMovieData from '../services/getMovieData';

function MoviesItem (props) {

    const[movieData, setMovieData] = useState({
        poster_path: '',
        original_title: '',
        overview: '',
    });
    
    async function getData () {
        let data = await getMovieData(props.moviesId);
        console.log(data)
        setMovieData({
            ...movieData,
            original_title: data.original_title,
            overview: data.overview
        })
     }
    
     useEffect (()=>{
      getData();
     }, [])

    return (
        <div>
            <h2>{movieData.original_title}</h2>
            <p>{movieData.overview}</p>
        </div>
    )
}



export default MoviesItem;
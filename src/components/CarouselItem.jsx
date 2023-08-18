import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import getMovieData from '../services/getMovieData';

function CarouselItem (props) {

    const[movieData, setMovieData] = useState({
        poster_path: '',
        original_title: '',
        overview: '',
    });
    
    async function getData () {
        let data = await getMovieData(props.movieId);
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
        // <Carousel.Item>
        //     <Carousel.Caption>
        //         <h3>{props.name}</h3>
        //         <p>{props.overview}</p>
        //     </Carousel.Caption>
        // </Carousel.Item>
        <div>
            <h2>{movieData.original_title}</h2>
            <p>{movieData.overview}</p>
        </div>
    )
}

export default CarouselItem;
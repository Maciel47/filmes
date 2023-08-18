import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import MoviesItem from './MoviesItem';

export default function MovieSection(props) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section>
            <h2>{props.title}</h2>
            <hr className='hr'></hr>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {props.moviesId.map((item) => (
                    <MoviesItem moviesId={item}/>
                ))}
            </Carousel>
        </section>
    )
}





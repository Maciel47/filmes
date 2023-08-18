import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import getMovieData from '../services/getMovieData';
import CarouselItem from './CarouselItem';

function ControlledCarousel() {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <CarouselItem movieId={238}/>
      <CarouselItem movieId={235}/>
    </Carousel>
  );
}

export default ControlledCarousel;
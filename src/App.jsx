import './assets/css/App.css';
import MovieSection from './components/MovieSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <>
      {/* en-english */}
      {/* <h1>Movies</h1>
      <hr className='hr'></hr>
      <nav>
        <h2>Movie Selection</h2>
        <p className='descTitle'>
          All movie information was retrieved using The Movie Database (TMDB) API.
        </p>
        <a href='https://www.themoviedb.org/' target='_blank'>
          <Button variant="primary">Learn more about the API</Button>
        </a>
        <hr className='hr'></hr>
      </nav>
      <MovieSection title={'Science Fiction'} moviesId={[9426, 1903, 5548, 218, 105]} />
      <MovieSection title={'Action'} moviesId={[238, 101, 68718, 16869, 500]} />
      <MovieSection title={'Drama'} moviesId={[418533, 13, 424, 278, 637]} /> */}

      {/* pt-br */}
      <h1>Filmes</h1>
      <hr className='hr'></hr>
      <nav>
        <h2>Seleção de filmes</h2>
        <p className='descTitle'>
          Todas as informações dos filmes foram buscadas utilizando a API The Movie Database (TMDB).
        </p>
        <a href='https://www.themoviedb.org/' target='_blank'>
          <Button variant="primary">Saiba mais sobre a API</Button>
        </a>
        <hr className='hr'></hr>
      </nav>
      <MovieSection title={'Ficção científica'} moviesId={[9426, 1903, 5548, 218, 105]} />
      <MovieSection title={'Ação'} moviesId={[238, 101, 68718, 16869, 500]} />
      <MovieSection title={'Drama'} moviesId={[418533, 13, 424, 278, 637]} />
    </>
  )
}

export default App

import './assets/css/App.css';
import MovieSection from './components/MovieSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <nav>
        <h1>Filmes</h1>
        <hr className='hr'></hr>
        <h2>Seleção de filmes</h2>
        <p>
          Todas as informações dos filmes foram buscadas utillizando a API do The Movie Database (TMDB).
        </p>
        <hr className='hr'></hr>
        <MovieSection title={'Ação'} moviesId={[100, 200, 300, 400]}/>
        <hr className='hr'></hr>
        <MovieSection title={'Comédia'} moviesId={[102, 202, 302, 402]}/>
        <hr className='hr'></hr>
        <MovieSection title={'Terror'} moviesId={[101, 201, 301, 401]}/>
        <hr className='hr'></hr>
      </nav>
    </>
  )
}

export default App

import './assets/css/App.css';
import MovieSection from './components/MovieSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { i18n } from './assets/translate/i18n';

function App() {

  return (
    <>
      <h1>{i18n.t('pageTitle.title')}</h1>
      <hr className='hr'></hr>
      <nav>
        <h2>{i18n.t('pageTitle.subTitle')}</h2>
        <p className='descTitle'>{i18n.t('pageDesc.desc')}</p>
        <a href='https://www.themoviedb.org/' target='_blank'>
          <Button variant="primary">{i18n.t('buttons.learnMorePage')}</Button>
        </a>
      </nav>
      <h2>{i18n.t('movieSectionTitle.firstSection')}</h2>
      <MovieSection moviesId={[9426, 1903, 5548, 218, 105]} />
      <h2>{i18n.t('movieSectionTitle.secondSection')}</h2>
      <MovieSection moviesId={[238, 101, 68718, 16869, 500]} />
      <h2>{i18n.t('movieSectionTitle.thirdSection')}</h2>
      <MovieSection moviesId={[418533, 13, 424, 278, 637]} />
    </>
  )
}

export default App

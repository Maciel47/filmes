import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { i18n } from '../assets/translate/i18n';
import NaviHeader from '../components/NavHeader';
import MovieSection from '../components/MovieSection';

function PersonalGallery() {
    return (
        <>
            <NaviHeader />
            <nav id='navButton'>
                <Link to="/">
                    <Button variant="outline-light">{i18n.t('buttons.returnButton')}</Button>
                </Link>
                <Link to="/search">
                    <Button variant="outline-info">
                        {i18n.t('buttons.goToButton') + i18n.t('buttons.searchMovie')}
                    </Button>
                </Link>
            </nav>
            <hr className='hr'></hr>
            <h2>{i18n.t('personalGalleryPage.title')}</h2>
            <p className='descTitle'>{i18n.t('personalGalleryPage.desc')}</p>
            <h2>{i18n.t('movieSectionTitle.firstSection')}</h2>
            <MovieSection moviesId={[9426, 1903, 5548, 218, 105]} />
            <h2>{i18n.t('movieSectionTitle.secondSection')}</h2>
            <MovieSection moviesId={[238, 101, 68718, 16869, 500]} />
            <h2>{i18n.t('movieSectionTitle.thirdSection')}</h2>
            <MovieSection moviesId={[418533, 13, 424, 278, 637]} />
        </>
    )
}

export default PersonalGallery
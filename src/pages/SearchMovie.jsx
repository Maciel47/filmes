import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { i18n } from "../assets/translate/i18n";
import NaviHeader from '../components/NavHeader';
import InputSearch from '../components/InputSearch';

const SearchMovie = () => {
    return (
        <>
            <NaviHeader />
            <nav id='navButton'>
                <Link to="/">
                    <Button variant="outline-light">{i18n.t('buttons.returnButton')}</Button>
                </Link>
                <Link to="/gallery">
                    <Button variant="outline-info">
                        {i18n.t('buttons.goToButton') + i18n.t('buttons.personalGallery')}
                    </Button>
                </Link>
                
            </nav>
            <h2>{i18n.t('searchMoviePage.title')}</h2>
            <p className='descTitle'>{i18n.t('searchMoviePage.desc')}</p>
            <br/><br/>
            <InputSearch />
        </>
    );
}

export default SearchMovie;
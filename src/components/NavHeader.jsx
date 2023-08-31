import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import { i18n } from "../assets/translate/i18n";

function NaviHeader() {
    return (
        <>
            <h1 id='pageMainTitle'>{i18n.t('pageTitle.title')}</h1>
            <hr className='hr'></hr>
            <h2>{i18n.t('pageTitle.subTitle')}</h2>
            <p className='descTitle'>{i18n.t('pageDesc.desc')}</p>
            <nav id='navButton'>
                <a href='https://www.themoviedb.org/' target='_blank'>
                    <Button variant="info">{i18n.t('buttons.learnMorePage')}</Button>
                </a>
            </nav>
        </>
    )
}

export default NaviHeader;
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import { i18n } from "../assets/translate/i18n";
import NaviHeader from '../components/NavHeader';

const Home = () => {
    return (
        <>
        <NaviHeader/>
            <nav id='navButton'>
                <Link to="/search">
                    <Button variant="outline-info">
                        {i18n.t('buttons.searchMovie')}
                    </Button>
                </Link>
                <Link to="/gallery">
                <Button variant="outline-info">
                    {i18n.t('buttons.personalGallery')}
                    </Button>
                </Link>
            </nav>
        </>
    )
}

export default Home;
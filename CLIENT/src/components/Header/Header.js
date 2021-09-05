import './Header.scss';
import SearchBar from './SearchBar/SearchBar';
import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <header className='header'>
        <Link to={'/'}>
            <img className='header__logo' src='http://localhost:8000/logo/Logo-brainflix.svg' alt="Brainflix Logo"/>
        </Link>
        <div className='header__container'>
            <SearchBar />
            <div className='header__submit'>
                <Link to={'/UploadPage'} className='header__button'>
                    &nbsp;UPLOAD
                </Link>
                <Icon />
            </div>
        </div>
    </header>
);}

export default Header;
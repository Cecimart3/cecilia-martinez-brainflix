import './Header.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="Brainflix Logo"/>
        <SearchBar />
    </header>
);}

export default Header;
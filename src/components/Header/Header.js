import './Header.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import SearchBar from './SearchBar/SearchBar';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Header = () => {
    return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="Brainflix Logo"/>
        <SearchBar />
        <div className='header__submit'>
            <Button />
            <Icon />
        </div>
    </header>
);}

export default Header;
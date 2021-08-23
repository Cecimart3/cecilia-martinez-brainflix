import './Header.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import SearchBar from './SearchBar/SearchBar';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Header = () => {
    return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="Brainflix Logo"/>
        <div className='header__container'>
            <SearchBar />
            <div className='header__submit'>
                <Button className='header__button' buttonType=' UPLOAD'/>
                <Icon />
            </div>
        </div>
    </header>
);}

export default Header;
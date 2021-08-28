import './Button.scss';
import '../Header/Header.scss';
import { Link } from 'react-router-dom';

const Button = ({ buttonType, className }) => {
    return (
        <button className={className} type='submit'>
                {buttonType}
        </button>
    )
}

export default Button;
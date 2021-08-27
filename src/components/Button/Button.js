import './Button.scss';
import '../Header/Header.scss';
import { Link } from 'react-router-dom';

const Button = ({ buttonType, className }) => {
    return (
        <Link className={className} type='submit'>
            {buttonType}
        </Link>
    )
}

export default Button;
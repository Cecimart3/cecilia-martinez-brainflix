import './Button.scss';
import '../Header/Header.scss';

const Button = ({ buttonType, className }) => {
    return (
        <button className={className} type='submit'>
            {buttonType}
        </button>
    )
}

export default Button;
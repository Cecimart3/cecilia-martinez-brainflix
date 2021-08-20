import './SearchBar.scss';
import magnifyGlass from '../../../assets/Icons/Icon-search.svg'

const SearchBar = () => {
    return (
        <div className='search'>
            {/* <img src={magnifyGlass} alt='Magnifying Glass'/> */}
            <input 
            className='search__bar'
            type='search'
            placeholder='Search'
            />
        </div>
      
    )
}

export default SearchBar;
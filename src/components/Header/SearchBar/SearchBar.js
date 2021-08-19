import './SearchBar.scss';
import magnifyGlass from '../../../assets/Icons/Icon-search.svg'

const SearchBar = () => {
    return (
        <div>
            {/* <img src={magnifyGlass} alt='Magnifying Glass'/> */}
            <input 
            className='search-bar'
            type='search'
            placeholder='Search'
            />
        </div>
      
    )
}

export default SearchBar;
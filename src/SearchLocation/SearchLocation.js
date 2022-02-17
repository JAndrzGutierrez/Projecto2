import './SearchLocation.css'
import { useState } from 'react';

const SearchLocation = ({ setcityName, country, cityName, localtime, conditionIcon, conditionText, temp_c, temp_f }) =>{
 const [search, setsearch] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        setcityName(search);
    }
    console.log(search)
    const handleChange = (event) => {
        setsearch(event.target.value);
      };

    return(
    <div className='searchLocation'>
            <form onSubmit={handleSubmit} action='/' method='get'>
                <label htmlFor='location-search'>
                    <span className='visually-hidden'>Search City</span>
                </label>
                <input
                type="text"
                id="location-search"
                placeholder='Buscar'
                name='s'
                value={search} 
                onChange={handleChange}
                />
                <button type='Submit'>Submit</button>
            </form>
            <div className="cityData">
            <h2>{cityName}</h2>
            <h4>{country}</h4>
            <h5>{localtime}</h5>
            <img id="condition-icon" src={conditionIcon}/>
            <h3>Condition: {conditionText}</h3>
            <h3>{temp_c} C</h3>
            <h3>{temp_f} F</h3>
            </div>
   </div>
    );
}
export default SearchLocation

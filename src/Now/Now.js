import './Now.css';

const Now = ({ name, localtime, conditions, weatherIcon, feelsLike, currentTemp }) => {
  
return(
     <div className="userLocation">
          <h3 className='localtime'>{localtime}</h3>
          <h3 className='locationName'>{name}</h3>
          <h3 className='conditions'>{conditions}</h3>
          <img className='weatherIcon' src={weatherIcon}/>
          <h2 className='currentTemp'>{currentTemp} C</h2>
          <h2 className='feelslike'>Feels Like: {feelsLike}</h2>
     </div>
    
)
};

export default Now;









// Original code from app js to fetch info from API
{/* <div className="userLocation">
        <h3>City: {weatherData.location ? weatherData.location.name : "Loading..."}</h3>
        <h4>Local Time: {weatherData.location ? weatherData.location.localtime : "Loading..."}</h4>
        <h4>{weatherData.current ? weatherData.current.condition.text : "Loading..."}</h4>
      </div> */}
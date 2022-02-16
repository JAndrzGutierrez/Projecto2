import './Forecast.css'

const Forecast = ({date, icon, maxtemp, mintemp, sunrise, sunset, moonphase}) => {
    
    return(
        <div className='forecast_container'>
           <h3>{date}</h3>
           <img src={icon}/>
           <h3>Max Temp: {maxtemp}</h3>
           <h3>Min Temp: {mintemp}</h3>
           <h4>Sunrise: {sunrise}</h4>
           <h4>Sunset: {sunset}</h4>
           <h4>Moon Phase: {moonphase}</h4>
</div>
    )
}
export default Forecast
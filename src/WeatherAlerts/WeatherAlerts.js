import './WeatherAlerts.css'

const WeatherAlerts =({ desc }) => {
    return(
        <div className='alerts-container'>
            <h1>Local Alerts</h1>
         <p className='alert-description'>{desc}</p>

        </div>
    )
}

export default WeatherAlerts;
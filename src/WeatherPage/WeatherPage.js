import { useState, useEffect } from "react";
import Now from "../Now/Now";
import NavigationBar from "../NavigationBar/NavigationBar";
import Forecast from "../Forecast/Forecast";
import SearchLocation from "../SearchLocation/SearchLocation";
import WeatherAlerts from "../WeatherAlerts/WeatherAlerts";

export default function WeatherPage() {
    // search function
const [cityData, setcityData] = useState([]);
const [cityName, setcityName] = useState('Heredia');
const cityUrl = `http://api.weatherapi.com/v1/forecast.json?key=bd0a47f6bab04278a31232342221102&q=${cityName}&days=5&aqi=yes&alerts=yes`;

const searchCall = () =>{
  fetch(cityUrl)
  .then((response) => response.json())
  .then(data => setcityData(data))
  .catch(() => console.log("search API call error."))
}
console.log('CityData', cityData)
const url = "http://api.weatherapi.com/v1/forecast.json?key=bd0a47f6bab04278a31232342221102&q=auto:ip&days=5&aqi=yes&alerts=yes";
const [weatherData, setweatherData] = useState([]);

// API call 
const apiCall = () => {
  fetch(url)
  .then((response) => response.json())
  .then(data => setweatherData(data))
  .catch(() => console.log("CONSOLE.LOG ERROR"));
}
useEffect(() => {
  apiCall();
  searchCall();

  }, [cityName]);
  console.log('weatherData', weatherData)
// map funtion goes here.
const forecastDays = weatherData?.forecast?.forecastday?.map((day, index) => {
  return(
     <Forecast
     key={index}
     date={day?.date}
     icon={day?.day?.condition?.icon}
     maxtemp={day?.day?.maxtemp_c}
     mintemp={day?.day?.mintemp_c}
     sunrise={day?.astro?.sunrise}
     sunset={day?.astro?.sunset}
     moonphase={day?.astro?.moon_phase}
     />
  )
  // const searchCity = 
});
if (weatherData.current) {
  return (
<div className="App">
  
 <NavigationBar/>

 <SearchLocation
 setcityData={setcityData}
 setcityName={setcityName}
 cityData={cityData}
 country={cityData?.location?.country}
 cityName={cityName}
 localtime={cityData?.location?.localtime}
 conditionIcon={cityData?.current?.condition?.icon}
 conditionText={cityData?.current?.condition?.text}
 temp_c={cityData?.current?.temp_c}
 temp_f={cityData?.current?.temp_f}

  />

        {/* Now Component */}
 <Now
    name={weatherData.location.name} 
    localtime={weatherData.location.localtime}
    conditions={weatherData.current.condition.text}
    currentTemp={weatherData.current.temp_c}
    weatherIcon={weatherData.current.condition.icon}
    feelsLike={weatherData.current.feelslike_c}/>
  
  {/* <h3>Condition:{weatherData.current ? weatherData.current.temp_c : ""} C</h3> */}
  {/* FORECAST COMPONENT BELOW */}
  {forecastDays} 

  <WeatherAlerts
  desc= {weatherData?.alerts?.alert[0]?.desc}
  /> 
  
  
                <footer>
                        Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
                </footer>
</div>

);
  }else{
    return(
     <h2>Esperate Cabrón!</h2> 
    )
  };






// Closing Curly for
};
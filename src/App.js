// App.js is to create all the functionalities for the child components.
import { useState, useEffect } from "react";
import './App.css';
import NowData from "./Now/Now";
import NavigationBar from "./NavigationBar/NavigationBar";
import Forecast from "./Forecast/Forecast";
import SearchLocation from "./SearchLocation/SearchLocation";
// ^^ Imported Components Above ^^

export default function App() {
// search function
const [cityData, setcityData] = useState([]);
const [cityName, setcityName] = useState('Paris');
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
     <NavigationBar
     />
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
     <NowData 
        name={weatherData.location.name} 
        localtime={weatherData.location.localtime}
        conditions={weatherData.current.condition.text}
        currentTemp={weatherData.current.temp_c}
        weatherIcon={weatherData.current.condition.icon}
        feelsLike={weatherData.current.feelslike_c}/>
      
      {/* <h3>Condition:{weatherData.current ? weatherData.current.temp_c : ""} C</h3> */}
      {/* FORECAST COMPONENT BELOW */}
      {forecastDays} 
                    <footer>
                            Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
                    </footer>
    </div>
    
  );
      }else{
        return(
         <h2>MotherFucka Wait!</h2> 
        )
      };






// Closing Curly for
};



// NOTES/EXAMPLES: 

// Ternary Operator AKA Ternero Operator

{/* <h3>Condition:{weatherData.current ? weatherData.current.temp_c : ""} Degrees</h3>
      <h3>Forecast:{weatherData.current ? weatherData.current.condition.text : ""}</h3> */}
      // weatherData.forecast.forecastdat[3].0

// console.log('weather data', weatherData.current.condition.text)


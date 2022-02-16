// App.js is to create all the functionalities for the child components.
import { useState, useEffect } from "react";
import './App.css';
import NowData from "./Now/Now";
import NavigationBar from "./NavigationBar/NavigationBar";
import Forecast from "./Forecast/Forecast";
// ^^ Imported Components Above ^^

export default function App() {

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
  }, []);
  console.log('weatherData', weatherData)
// map funtion goes here.
const forecastdays = weatherData?.forecast?.forecastday?.map((day, index) => {
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
  
});
// weatherData.forecast.forecastdat[3].0

// console.log('weather data', weatherData.current.condition.text)

// code below displays in the browser.
 
    if (weatherData.current) {
      return (
    <div className="App">
     <NavigationBar
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
      {forecastdays}
                    <footer>
                            Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
                    </footer>
    </div>
    
  );
      }else{
        return(
         <h2>Loading...WAIT!</h2> 
        )
      };






// Closing Curly for
};


// Ternary Operator AKA Ternero Operator

{/* <h3>Condition:{weatherData.current ? weatherData.current.temp_c : ""} Degrees</h3>
      <h3>Forecast:{weatherData.current ? weatherData.current.condition.text : ""}</h3> */}
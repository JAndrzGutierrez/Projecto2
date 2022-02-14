// App is to create all the functionalities for the child components.
import { useState, useEffect } from "react";
import './App.css';
import Now from "./Now/Now";

export default function App() {

const url = "http://api.weatherapi.com/v1/forecast.json?key=bd0a47f6bab04278a31232342221102&q=auto:ip";
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
  console.log('weatherData', weatherData)
}, []);

// console.log('weather data', weatherData.current.condition.text)

// code below displays in the browser.
 
    // if (weatherData.current) {
      return (
    <div className="App">
      <h1>El Clima</h1>
      
      <div className="userLocation">
        <h3>City: {weatherData.location ? weatherData.location.name : "Loading..."}</h3>
        <h4>Local Time: {weatherData.location ? weatherData.location.localtime : "Loading..."}</h4>
        <h4>{weatherData.current ? weatherData.current.condition.text : "Loading..."}</h4>
      </div>
      <div className="forecastSection">
      <h3>Forecast:</h3>
      </div>
      <h3>Condition:{weatherData.current ? weatherData.current.temp_c : ""} C</h3>
    
    
    </div>
    
  )
  //     }else{
  //       return(
  //        <h2>Loading...WAIT!</h2> 
  //       )
  //     }







};


// Ternary Operator AKA Ternero Operator

{/* <h3>Condition:{weatherData.current ? weatherData.current.temp_c : ""} Degrees</h3>
      <h3>Forecast:{weatherData.current ? weatherData.current.condition.text : ""}</h3> */}
// App.js is to create all the functionalities for the child components.
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import WeatherPage from "./WeatherPage/WeatherPage";
import About from "./About/About";
import FeedBack from "./FeedBack/FeedBack";
// ^^ Imported Components Above ^^

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route 
        path="/enviromentnews" 
        element={<WeatherPage/>}>
        </Route>
        <Route
        path="aboutsection"
        element={<About/>}>
        </Route>
        <Route
        path="feedBack-page"
        element={<FeedBack/>}>
          
        </Route>
      </Routes>
      
      
    </div>
  );
  // Closing Curly for
}

// NOTES/EXAMPLES:

// Ternary Operator AKA Ternero Operator

{
  /* <h3>Condition:{weatherData.current ? weatherData.current.temp_c : ""} Degrees</h3>
      <h3>Forecast:{weatherData.current ? weatherData.current.condition.text : ""}</h3> */
}
// weatherData.forecast.forecastdat[3].0

// console.log('weather data', weatherData.current.condition.text)

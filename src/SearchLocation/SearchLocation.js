import "./SearchLocation.css";
import { useState } from "react";

const SearchLocation = ({
  setcityName,
  country,
  cityName,
  localtime,
  conditionIcon,
  conditionText,
  temp_c,
  temp_f,
}) => {
  const [search, setsearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setcityName(search);
  };
  console.log(search);
  const handleChange = (event) => {
    setsearch(event.target.value);
  };

  return (
    <div className="searchLocation">
      <form onSubmit={handleSubmit} action="/" method="get">
        <label htmlFor="location-search"></label>
        <input
          type="text"
          id="location-search"
          placeholder="Buscar"
          name="s"
          value={search}
          onChange={handleChange}
        />
        <button type="Submit">
          <strong>Submit</strong>
        </button>
      </form>
      <div className="cityData">
        <h2 className="cityName">{cityName}</h2>
        <h2 className="country">{country}</h2>
        <h3 className="int-localtime">{localtime}</h3>
        <img id="condition-icon" src={conditionIcon} />
        <h3 className="condition">{conditionText}</h3>
        <h1 className="temp_c">{temp_c} C</h1>
        <h1 className="temp_f">{temp_f} F</h1>
      </div>
    </div>
  );
};
export default SearchLocation;

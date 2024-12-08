import { useState } from "react";
import { weather } from "../axios";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  function handleChage() {
    weather(`data/2.5/weather?q=${city}&appid={your_api_key}`)
      .then((response) => {
        const data = {
          name: response.data.name,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
        };
        setWeatherData(data);
      })
      .catch((error) => {
        setWeatherData([]);
      });
  }

  return (
    <div className="weather-container">
      <h1 className="weather-title">Ob Havo malumotlari</h1>
      <div className="weather-input-group">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="weather-input"
        />
        <button onClick={handleChage} className="weather-button">
          Search
        </button>
      </div>
      {weatherData.map((data, index) => (
        <div key={index} className="weather-details">
          <h2 className="weather-city">{data.name}</h2>
          <p className="weather-info">{data.temp}</p>
          <p className="weather-info">{data.humidity}</p>
          <p className="weather-info">{data.windSpeed}</p>
        </div>
      ))}
    </div>
  );
}

export default Weather;

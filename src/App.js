import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  const getLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(data);
      });
      setLocation("");
    }
  };

  return (
    <div className="weather-app">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={getLocation}
          value={location}
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="data-name">
            <h1 className="name">{data.name}</h1>
          </div>
          <div className="data-desc">
            {data.weather ? (
              <h5 className="desc">
                Weather condition:{" "}
                <strong className="font-bold">{data.weather[0].main}</strong>
              </h5>
            ) : null}
          </div>
          <div className="data-degree">
            {data.main ? <h2 className="degree">{data.main.temp}°F </h2> : null}
          </div>
        </div>

        {data.name != undefined && (
          <div className="bottom">
            <div className="feels-like">
              {data.main ? (
                <h3 className="feel">{data.main.feels_like}°F</h3>
              ) : null}
              <p className="feel-value">feels Like</p>
            </div>
            <div className="humidity-div">
              {data.main ? (
                <h3 className="humidity">{data.main.humidity}%</h3>
              ) : null}
              <p className="humidity-value">Humidity</p>
            </div>

            <div className="wind-div">
              {data.wind ? (
                <h3 className="wind"> {data.wind.speed}MPH</h3>
              ) : null}
              <p className="wind-value">Winds</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

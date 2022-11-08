import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=00f1cf07bcfe190b4562f4608ccd1769`;

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
            <h5 className="desc">
              {" "}
              Weather condition:{" "}
              <strong className="font-bold">
                {data.weather[0].description}
              </strong>
            </h5>
          </div>
          <div className="data-degree">
            <h2 className="degree">{data.main.temp}°F </h2>
          </div>
        </div>

        <div className="bottom">
          <div className="feels-like">
            <h3 className="feel">{data.main.feels_like}°F</h3>
            <p className="feel-value">feels Like</p>
          </div>
          <div className="humidity-div">
            <h3 className="humidity">{data.main.humidity}%</h3>
            <p className="humidity-value">Humidity</p>
          </div>

          <div className="wind-div">
            <h3 className="wind"> MPH</h3>
            <p className="wind-value">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

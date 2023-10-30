import React, { useState } from "react";
import axios from "axios";
import CityName from "./CityName";
import CityWeatherDetails from "./CityWeatherDetails";
import DegreesIcon from "./DegreesIcon";
import CityTemperature from "./CityTemperature";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  let apiKey = "0065c92bb38o03d36835f9t248bba38f";

  function updateTime(timestamp) {
    let dayAndTime = new Date(timestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[dayAndTime.getDay()];
    let hours = dayAndTime.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = dayAndTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.city,
      time: response.data.time,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon,
    });
  }

  function presetSydney(event) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    updateTime();
  }

  function displayForecast(response) {
    let forecast = response.data.daily;
    setForecast(forecast);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
    axios.get(forecastUrl).then(displayForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2 weather-card">
          <div className="row">
            <div className="col-md-6">
              <div className="main-cities">
                <a href="www.google.com" className="san-diego" target="blank">
                  {" "}
                  San Diego{" "}
                </a>
                <a href="www.google.com" className="bismarck" target="blank">
                  {" "}
                  Bismarck{" "}
                </a>
                <a href="www.google.com" className="barcelona" target="blank">
                  {" "}
                  Barcelona{" "}
                </a>
                <a href="www.google.com" className="mykolaiv" target="blank">
                  {" "}
                  Mykolaiv{" "}
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="temp-scale">
                <a href="www.google.com" className="active">
                  °F{" "}
                </a>
                |<a href="www.google.com">°C</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 search-bar">
              <form id="search-form" onSubmit={handleSearch}>
                <input
                  className="search-box"
                  type="search"
                  placeholder="Enter a city..."
                  onChange={updateCity}
                />
                <input type="submit" value="Search" className="search-button" />
                <input
                  className="current-location-button"
                  type="submit"
                  value="📍"
                />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 city-information text-capitalize">
              <CityName data={weather} />
              <CityWeatherDetails data={weather} />
            </div>
            <div className="col-md-6 current-temp ">
              <DegreesIcon data={weather} />
              <CityTemperature data={weather} />
            </div>
          </div>
          <div className="row">
            <div>
              <WeatherForecast />
            </div>
            <div>
              {" "}
              <div className="row">
                <div className="col-md-12 footnote">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    presetSydney();
  }
}

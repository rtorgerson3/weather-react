/* eslint-disable jsx-a11y/anchor-is-valid */
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
  const [unit, setUnit] = useState("fahrenheit");
  const [tempNumber, setTempNumber] = useState(0);

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
    setTempNumber(response.data.temperature.current);
  }

  function presetSydney(event) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    updateTime();
  }

  function presetSanDiego(event) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=San%20Diego&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    updateTime();
  }

  function presetBismarck(event) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Bismarck&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    updateTime();
  }

  function presetBarcelona(event) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Barcelona&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    updateTime();
  }

  function presetMykolaiv(event) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Mykolaiv&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    updateTime();
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function currentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    updateTime();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getPosition(event) {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  function showCelsius(event) {
    event.preventDefault();
    setTempNumber(((weather.temperature - 32) * 5) / 9);
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setTempNumber(weather.temperature);
    setUnit("fahrenheit");
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2 weather-card">
          <div className="row">
            <div className="col-md-6">
              <div className="main-cities">
                <a
                  href="#"
                  className="san-diego"
                  target="blank"
                  onClick={presetSanDiego}
                >
                  {" "}
                  San Diego{" "}
                </a>
                <a
                  href="#"
                  className="bismarck"
                  target="blank"
                  onClick={presetBismarck}
                >
                  {" "}
                  Bismarck{" "}
                </a>
                <a
                  href="#"
                  className="barcelona"
                  target="blank"
                  onClick={presetBarcelona}
                >
                  {" "}
                  Barcelona{" "}
                </a>
                <a
                  href="#"
                  className="mykolaiv"
                  target="blank"
                  onClick={presetMykolaiv}
                >
                  {" "}
                  Mykolaiv{" "}
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="temp-scale">
                <a
                  href="/"
                  onClick={showFahrenheit}
                  className={unit === "fahrenheit" ? "active" : ""}
                >
                  °F{" "}
                </a>
                |
                <a
                  href="/"
                  onClick={showCelsius}
                  className={unit === "celsius" ? "active" : ""}
                >
                  °C
                </a>
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
                  onClick={getPosition}
                />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 city-information text-capitalize">
              <CityName data={weather} />
              <CityWeatherDetails data={weather} />
            </div>
            <div className="col-md-6 current-temp">
              <DegreesIcon data={weather} size={80} />
              <CityTemperature data={tempNumber} />
            </div>
          </div>
          <div className="row">
            <div>
              <WeatherForecast city={weather.city} />
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

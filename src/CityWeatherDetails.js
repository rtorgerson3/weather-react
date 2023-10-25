import React from "react";

export default function CityWeatherDetails() {
  let weatherData = {
    date: "Sunday 8:00am",
    weatherdescription: "Cloudy",
    humidity: 8,
    wind: 4,
  };
  return (
    <div>
      <h4>Last updated - {weatherData.date}</h4>
      <h4>{weatherData.weatherdescription}</h4>
      <h4 class="current-humidity">Humidity: {weatherData.humidity}%</h4>
      <h4 class="current-wind-speed">Wind: {weatherData.wind}mph</h4>
    </div>
  );
}

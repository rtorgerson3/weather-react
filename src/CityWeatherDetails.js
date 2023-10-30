import React from "react";

export default function CityWeatherDetails(props) {
  let weatherData = {
    date: updateTime(props.data.time),
    weatherdescription: props.data.description,
    humidity: props.data.humidity,
    wind: props.data.wind,
  };

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
    let minutes = dayAndTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
  }
  return (
    <div>
      <h4>Last updated - {weatherData.date}</h4>
      <h4>{weatherData.weatherdescription}</h4>
      <h4 className="current-humidity">Humidity: {weatherData.humidity}%</h4>
      <h4 className="current-wind-speed">
        Wind: {Math.round(weatherData.wind)}mph
      </h4>
    </div>
  );
}

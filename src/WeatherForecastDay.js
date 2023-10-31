import React from "react";
import DegreesIcon from "./DegreesIcon";

export default function WeatherForecastDay(props) {
  function maximumTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minimumTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function updateTime(timestamp) {
    let dayAndTime = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[dayAndTime.getDay()];
    return day;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{updateTime(props.data.time)}</div>
      <div className="DegreeIcon">
        <DegreesIcon data={props.data.condition} size={60} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maximumTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minimumTemperature()}
        </span>
      </div>
    </div>
  );
}

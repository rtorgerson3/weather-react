import React, { useState } from "react";
import DegreesIcon from "./DegreesIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function updateTime(timestamp) {
    let dayAndTime = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[dayAndTime.getDay()];
    return day;
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">
              {updateTime(forecast[0].time)}
            </div>
            <DegreesIcon data={forecast[0].condition} size={60} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[0].temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0065c92bb38o03d36835f9t248bba38f";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

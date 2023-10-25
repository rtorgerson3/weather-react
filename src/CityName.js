import React from "react";
import CityWeatherDetails from "./CityWeatherDetails";

export default function CityName() {
  let weatherData = {
    city: "Sydney",
  };
  return <h2>{weatherData.city}</h2>;
}

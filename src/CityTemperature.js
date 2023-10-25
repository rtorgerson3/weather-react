import React from "react";

export default function CityTemperature() {
  let weatherData = {
    citytemperature: 75,
  };
  return <span class="current-degrees">{weatherData.citytemperature}°</span>;
}

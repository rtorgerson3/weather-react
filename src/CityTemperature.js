import React from "react";

export default function CityTemperature(props) {
  let currentTemperature = props.data;
  return (
    <span className="current-degrees">{Math.round(currentTemperature)}°</span>
  );
}

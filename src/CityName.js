import React from "react";

export default function CityName(props) {
  let cityName = props.data.city;
  return <h2>{cityName}</h2>;
}

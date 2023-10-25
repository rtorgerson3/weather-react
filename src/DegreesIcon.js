import React from "react";

export default function DegreesIcon() {
  let weatherData = {
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return <img src={weatherData.imgURL} />;
}

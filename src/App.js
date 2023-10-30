import React from "react";
import "./App.css";
import MainCities from "./MainCities";
import TempScale from "./TempScale";
import SearchForm from "./SearchForm";
import CityName from "./CityName";
import CityWeatherDetails from "./CityWeatherDetails";
import CityTemperature from "./CityTemperature";
import DegreesIcon from "./DegreesIcon";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <body className="background-image">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 weather-card">
              <div className="row">
                <div className="col-md-6">
                  <MainCities />
                </div>
                <div className="col-md-6">
                  <TempScale />
                </div>
              </div>

              <div className="row">
                <div className="col-md-8 search-bar">
                  <SearchForm />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 city-information">
                  <CityName />
                  <CityWeatherDetails />
                </div>
                <div class="col-md-6 current-temp">
                  <DegreesIcon code="10n" />
                  <CityTemperature />
                </div>
              </div>
              <div className="row">
                <div>
                  <WeatherForecast />
                </div>
                <div className="col-md-12 footnote">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="script.js"></script>
      </body>
    </div>
  );
}

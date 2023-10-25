import React from "react";
import "./App";

export default function SearchForm() {
  return (
    <div>
      <form id="search-form">
        <input
          id="current-city-search-box"
          class="search-box"
          type="text"
          autocomplete="off"
        />
        <input type="submit" value="Search" />
        <input class="current-location-button" type="submit" value="📍" />
      </form>
    </div>
  );
}

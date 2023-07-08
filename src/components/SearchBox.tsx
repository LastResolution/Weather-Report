import React, { useEffect, useState } from "react";
import "../css/SearchBox.css";
import { requests } from "../api/request";
import axios from "../api/axios";
import { Weather } from "../api/weather";

type Props = {
  updateStatus: (status: number) => void;
  updateWeather: (w: Weather) => void;
};

export const SearchBox = (props: Props) => {
  const [city, setCity] = useState("");

  const onChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  useEffect(() => {
    return () => {};
  }, [city]);

  const onSearchClick = () => {
    if (!city) return;
    async function fetchData() {
      try {
        const fetchUrl = requests.feachWeather.replace("{city}", city);
        const fetchResult = await axios.get(fetchUrl);
        props.updateStatus(fetchResult.status);
        console.log(fetchResult.data);
        const weather: Weather = {
          weather: fetchResult.data.weather[0].main,
          description: fetchResult.data.weather[0].description,
          temperature: fetchResult.data.main.temp,
          humidity: fetchResult.data.main.humidity,
          wind: fetchResult.data.wind.speed,
        };
        props.updateWeather(weather);
        return fetchResult;
      } catch {
        props.updateStatus(404);
      }
    }
    fetchData();
  };

  return (
    <div id="search-box">
      <i className="fa-solid fa-location-dot"></i>
      <input
        type="text"
        placeholder="Enter your location"
        value={city}
        onChange={onChangeCity}
      />
      <button
        className="fa-solid fa-magnifying-glass"
        onClick={onSearchClick}
      ></button>
    </div>
  );
};

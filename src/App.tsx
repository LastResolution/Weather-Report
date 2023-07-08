import { useState } from "react";
import { NotFound } from "./components/NotFound";
import { SearchBox } from "./components/SearchBox";
import { WeatherBox } from "./components/WeatherBox";
import { WeatherDetails } from "./components/WeatherDetails";
import { Weather } from "./api/weather";

function App() {
  const [status, setStatus] = useState(0);
  const [weather, setWeather] = useState<Weather>();
  const updateStatus = (stat: number) => {
    setStatus(stat);
  };

  const updateWeather = (w: Weather) => {
    setWeather(w);
  };

  const expand = status !== 0;

  return (
    <div className={`App ${expand && "expand"}`}>
      <SearchBox updateStatus={updateStatus} updateWeather={updateWeather} />
      <NotFound status={status} />
      <WeatherBox status={status} weather={weather} />
      <WeatherDetails status={status} weather={weather} />
    </div>
  );
}

export default App;

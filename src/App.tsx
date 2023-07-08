import { useState } from "react";
import { NotFound } from "./components/NotFound";
import { SearchBox } from "./components/SearchBox";
import { WeatherBox } from "./components/WeatherBox";
import { WeatherDetails } from "./components/WeatherDetails";

function App() {
  const [status, setStatus] = useState(0);
  const updateStatus = (stat: number) => {
    setStatus(stat);
  };

  const expand = status !== 0;

  return (
    <div className={`App ${expand && "expand"}`}>
      <SearchBox updateStatus={updateStatus} />
      <NotFound status={status} />
      <WeatherBox status={status} />
      <WeatherDetails status={status} />
    </div>
  );
}

export default App;

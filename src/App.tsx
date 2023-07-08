import { NotFound } from "./components/NotFound";
import { SearchBox } from "./components/SearchBox";
import { WeatherBox } from "./components/WeatherBox";
import { WeatherDetails } from "./components/WeatherDetails";

function App() {
  return (
    <div className="App">
      <SearchBox />
      <NotFound />
      <WeatherBox />
      <WeatherDetails />
    </div>
  );
}

export default App;

import { API_KEY } from "./setting";

export const requests = {
  feachWeather: `https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=${API_KEY}`,
};

const API_KEY = 'e9b551b44d587effa6f263b9f8a93121
';

const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}

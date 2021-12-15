import React from "react";
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "2e33e9f124a36cdfdc5d6023bcd82e95";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_Key,
    },
  });

  return data;
  
};

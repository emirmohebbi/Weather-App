import { useState, useEffect } from "react";
import { fetchData } from "../services/api";
import WeatherHeader from "./WeatherHeader";
import WeatherDetails from './WeatherDetails'

import styles from "./WeatherApp.module.css";

function WeatherApp() {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchData("Tehran");
      setWeather(res);
    };
    fetch();
  }, []);

  if (!weather)
    return (
      <div className={styles.container}>
        <h1>Loading ...</h1>
      </div>
    );

  return (
    <div className={styles.container}>
      <WeatherHeader weather={weather} />
      <WeatherDetails weather={weather} />
    </div>
  );
}

export default WeatherApp;

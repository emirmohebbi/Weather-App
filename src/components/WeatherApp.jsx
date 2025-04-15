import { useState, useEffect } from "react";
import { fetchData } from "../services/api";
import WeatherHeader from "./WeatherHeader";
import WeatherDetails from "./WeatherDetails";

import styles from "./WeatherApp.module.css";
import Search from "./Search";

function WeatherApp() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("Tehran");
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchData(city);
      setWeather(res);
    };
    fetch();
  }, [city]);

  if (!weather)
    return (
      <div className={styles.container}>
        <h1>Loading ...</h1>
      </div>
    );

  return (
    <>
      <Search city={city} setCity={setCity} />
      <div className={styles.container}>
        <WeatherHeader weather={weather} />
        <WeatherDetails weather={weather} />
      </div>
    </>
  );
}

export default WeatherApp;

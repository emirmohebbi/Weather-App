import { useState, useEffect } from "react";
import styles from "./WeatherApp.module.css";
import { fetchData } from "../services/api";
import WatherHeader from "./watherHeader";

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
      <WatherHeader weather={weather} />
      {/* <header>{!!Object.keys(weather).length && weather.data.location.name}</header>  */}
    </div>
  );
}

export default WeatherApp;

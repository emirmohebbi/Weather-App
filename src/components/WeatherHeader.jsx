import React from "react";

import styles from "./WeatherHeader.module.css";

function WatherHeader({ weather }) {
  console.log()
  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <p>{weather.data.location.country}</p>
        <h3>{weather.data.location.name}</h3>
      </div>
      <div className={styles.logo}>
        <img
          src={weather.data.current.condition.icon}
          alt="weather condition icon"
        />
      </div>
      <p>{weather.data.current.condition.text}</p>
    </div>
  );
}

export default WatherHeader;

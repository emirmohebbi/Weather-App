import styles from "./WeatherDetails.module.css";

function WeatherDetails({ weather }) {
  return (
    <div className={styles.container}>
      <div className={styles.tem}>
        <div className={styles.text}>Temperature</div>
        <div className={styles.details}>{weather.data.current.temp_c}</div>
      </div>
      <div className={styles.humidity}>
        <div className={styles.text}>Humidity</div>
        <div className={styles.details}>{weather.data.current.humidity}</div>
      </div>
      <div className={styles.wind}>
        <div className={styles.text}>Wind Direction</div>
        <div className={styles.details}>{weather.data.current.wind_dir}</div>
      </div>
      <div className={styles.cloud}>
        <div className={styles.text}>Cloud</div>
        <div className={styles.details}>{weather.data.current.cloud}</div>
      </div>
    </div>
  );
}

export default WeatherDetails;

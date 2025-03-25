import styles from "./WeatherDetails.module.css";

function WeatherDetails({ weather }) {
  
  return (
    <div className={styles.container}>
      <div className={styles.tem}>tem</div>
      <div className={styles.wind}>wind dir</div>
      <div className={styles.humidity}>humidity</div>
      <div className={styles.cloud}>cloud</div>
    </div>
  );
}

export default WeatherDetails;

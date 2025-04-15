import React from "react";
import styles from "./Search.module.css";
function Search({ city, setCity }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search City Name"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
    </div>
  );
}

export default Search;

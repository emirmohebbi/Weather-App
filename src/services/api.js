import axios from "axios";
const key = "d1ec4c4eab094027a14125641251703&";

const fetchData = async (city) => {
  const res =await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${key}q=${city}`
  );
  return res;
};

export { fetchData };

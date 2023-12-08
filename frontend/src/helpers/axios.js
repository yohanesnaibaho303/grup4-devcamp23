import axios from "axios";

const goHealingAxios = axios.create({
  baseURL: "http://localhost:3000",
});

export default goHealingAxios;

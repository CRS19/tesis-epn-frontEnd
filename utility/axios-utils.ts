/* istanbul ignore file */
import axios from "axios";
import { defaultTo } from "lodash";

// TODO: mejora jasdlfslñfaslkfl no sirve
const instance = axios.create({
  headers: {
    //Authorization: defaultTo(localStorage.getItem("jwt"), ""),
    "Content-type": "application/json",
  },
});

export default instance;

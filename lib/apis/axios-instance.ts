import axios from "axios";

export const baseInstance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
});

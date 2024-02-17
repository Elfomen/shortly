import axios from "axios";

const event = axios.create({
  baseURL: "https://shrtlnk.dev/api/v2/link",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default event;

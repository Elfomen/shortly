import axios from "axios";

const event = axios.create({
  baseURL: "https://shrtlnk.dev/api/v2/link",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((value) => {
  value.headers["api-key"] = "5Bza7Mcp1nkNzmC622LfyEdtxyTMx29kI4JO9fZYCDuCY";
  return value;
});

export default event;
